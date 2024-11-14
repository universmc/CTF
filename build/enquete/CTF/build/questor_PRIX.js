const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Charger le fichier JSON de la politique du prix
const pricePolicyData = JSON.parse(fs.readFileSync('politique_du_prix.json', 'utf8'));

// Fonction pour générer une réponse basée sur la politique du prix
function templateResponse(question, options, consequences, nextQuestions, causes, effects) {
  return {
    response: {
      question: question,
      answer: {
        text: "Les possibilités sont multiples.",
        quick_replies: options
      },
      decision_tree: options.reduce((acc, option, index) => {
        acc[`Option ${index + 1}`] = {
          consequences: consequences[index],
          next_questions: nextQuestions[index],
          causes: causes[index],
          effects: effects[index]
        };
        return acc;
      }, {})
    }
  };
}

// Exemple d'utilisation des données du fichier JSON dans le script
async function main() {
  const question = "Quelle est la meilleure façon de procéder pour enquêter sur la politique du prix ?";
  const options = [
    "Analyser les coûts liés aux transports publics",
    "Examiner les marges pratiquées sur les produits",
    "Suivre les flux financiers des entités politiques"
  ];
  
  // Utilisation des données JSON dans les conséquences et causes
  const consequences = [
    pricePolicyData.investigation.entites_politique.enquete.prix_transports_publics.description,
    pricePolicyData.investigation.prix_produits.analyse.enjeux,
    pricePolicyData.investigation.etapes_investigation.identification_beneficiaires.description
  ];

  const nextQuestions = [
    ["Quels sont les bénéfices non déclarés des entités politiques ?", "Comment les marges des produits influencent-elles les finances publiques ?"],
    ["Quels produits sont particulièrement concernés ?", "Les preuves trouvées sont-elles suffisantes pour soutenir les accusations ?"],
    ["Qui sont les bénéficiaires réels des bénéfices de la vente de produits publics ?"]
  ];

  const causes = [
    "Les coûts de transport ont un impact direct sur la gestion des finances publiques.",
    "Les marges sur les produits peuvent cacher des détournements de fonds publics.",
    "Les flux financiers doivent être surveillés pour identifier les bénéficiaires non déclarés."
  ];

  const effects = [
    ["Vous découvrez des irrégularités dans les bénéfices des entités politiques", "Le transport public pourrait subir des hausses injustifiées"],
    ["Les preuves sont recueillies sur les produits vendus via des entités comme Elysee X", "Vous avancez dans la compréhension des flux financiers"],
    ["Vous identifiez des bénéficiaires non déclarés et des malversations potentielles", "Vous pourriez exposer de graves fraudes financières"]
  ];

  // Créer une réponse avec les données JSON
  const response = templateResponse(question, options, consequences, nextQuestions, causes, effects);
  console.log(response);

  const completion = await groq.chat.completions.create({
    messages: [
      { role: "assistant", content: "Phase 1: Initialisation de l'enquête sur la politique du prix" },
      {
        role: "system",
        content: "Utilisation des données de la politique du prix pour structurer les questions et options"
      },
      { role: "user", name: "umcTokens", content: "Début de l'analyse sur les flux financiers et les entités politiques" }
    ],
    model: "gemma2-9b-it",
    temperature: 0.7,
    max_tokens: 4096,
  }).then((chatCompletion) => {
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Documentation" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation générée et enregistrée dans " + outputFilePath);
  });
}

main();
