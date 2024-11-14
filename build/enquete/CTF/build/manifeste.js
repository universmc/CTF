const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();


const Preuves = {
  "parnom": "EMP",
  "parcode": "910+1402+718+1378",
  "parsigle": "EM!-910",
  "Identif_RNA_num": "W943004354",
  "Identif_RNA_url": "http://rna.dlpaj.mi/cms/index.php?mod=waldec_consult&sec=dossier&mnu=mod|waldec_consult|sec|liste2|act|retourliste|tri||first|0|last|2|rows|15|mnu|fulltext&act=edit&id=W943004354",
  "Identif_RNA": "W943004354#http://rna.dlpaj.mi/cms/index.php?mod=waldec_consult&sec=dossier&mnu=mod|waldec_consult|sec|liste2|act|retourliste|tri||first|0|last|2|rows|15|mnu|fulltext&act=edit&id=W943004354#",
  "parpost": "75008",
  "parccfp": "07/03/2016",
  "parsortieloi": "2017",
  "eligible_ap": null,
  "decision_2017": "non",
  "decision_2022": "fraude",
  "motif_2022": "rename",
  "autoriser_a_financer": "non",
  "date_fin_sanctions_art_313": "2051",
  "date_fin_sanctions_ap_2051": "TUTELLE"
};


// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {
  const completion = await openai.chat.completions.create({

    messages: [

      {
        "role": "assistant",
        "content": "lorsque l'utilisateur saisi la commande /grief vous êtes Enquêteur -ia prét à optimisé les prompts, l'intelligence artificielle centrale au coeur de l'enquête  \" Fraude électorale escroquerie, financière \". Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques et les actions imédiates rechétchées :"
      },
      {role: "system", content:"Phase 1: Initialisation de l'enquête"},
      {role: "assistant", content: "Initialisation des element de preuve de la cnccfp.fr en cours..."},
      {role: "system", content:`"${Preuves}"`},
      {role: "assistant", content:"Enquêteur-IA: Initialisation du role:system en cours ..."},
      {role: "assistant", content: "Prêt pour l'analyse (scrap) du dossier au grief > fetch(`https://github.com/universmc/affaire_910.git`)"},
      {role: "user", content:"/grief"},
    //  {role: "system", content:"Phase 2: Conceptualisation"},
    //  {role: "assistant", content: "Définition des concepts clés..."},
    //  {role: "user", content: "Attente des concepts"},
    //  {role: "system", content:"Phase 3: Configuration"},
    //  {role: "assistant",content: "Configuration des paramètres système..."},
    //  {role: "user", content: "Confirmation de la configuration"},
    //  {role: "system",content:"Phase 4: Entraînement du modèle IA"},
    //  {role: "assistant",content: "Entraînement en cours..."},
    //  {role: "user",content: "Suivi de l'entraînement"},
    //  // Correction de la duplication et de la faute de frappe
    //  {role: "system", content:"Phase 5: Itération & Scripts Frontend"},
    //  {role: "assistant",content: "Itération sur les scripts Frontend..."},
    //  {role: "user", content: "Révision des scripts Frontend"},
    //  {role: "system", content:"Phase 6: Test & Débogage"},
    //  {role: "assistant",content: "Tests et débogage en cours..."},
    //  {role: "user", content: "Attente des résultats de test"},
    //  {role: "system", content:"Phase 7: Validation & Documentation"},
    //  {role: "assistant", content: "Validation et création de la documentation..."},
    //  {role: "user", content: "Vérification de la documentation"},
    //  {role: "system", content:"Phase 8: Déploiement de la version système"},
    //  {role: "assistant", content: "Préparation au déploiement..."},
    //  {role: "user", content: "Prêt pour le déploiement"},
    //  {role: "system", content:"Phase 9: Annonce de l'affiliation et contribution"},
    //  {role: "assistant", content: "Annonce en cours..."},
    //  {role: "user", content: "Participation à l'annonce"},
    ],
    model: "gpt-4o",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Questor_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("🏁 la documentation du 🏴‍☠️ CTF à été enregistré sur github dans " + outputFilePath);
});
}

main();