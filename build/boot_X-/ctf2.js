const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const db = new Groq({});

async function main() {
  // Liste des CTFs avec leurs détails
  const CTFs = [
    {
      "id": 2,
      "title": "Boot_X- - Trafic d'influence et commerce légal de fonctionnaires d'État",
      "Description": "Enquête sur l'évasion fiscale et la TVA liées à la boutique officielle de l'Élysée et à d'autres activités commerciales légales de fonctionnaires d'État.",
      "objective": "Analyser les pratiques fiscales potentiellement frauduleuses et évaluer les relations entre les partis politiques et les sponsors affiliés.",
      "tasks": [
      "Établir une liste complète des produits vendus sur la boutique officielle de l'Élysée, boutique.elysee.fr.",
      "Étudier la comptabilité des partis politiques en relation avec les sponsors et les activités de la boutique.",
      "Identifier les marques et les entreprises impliquées dans les transactions sur la boutique et leurs liens avec des partis politiques ou des fonctionnaires d'État.",
      "Examiner les possibilités d'évasion fiscale et de fraude à la TVA dans le cadre des activités commerciales de la boutique et des partis politiques."
      ],
      "phases": [
      "Recherche - Collecte de données et informations disponibles sur la boutique officielle de l'Élysée, les produits vendus, les sponsors, les partis politiques et les fonctionnaires d'État concernés.",
      "Analyse - Examen des transactions, des pratiques fiscales et des liens entre les partis politiques, les sponsors et les entreprises commerciales.",
      "Rapport - Rédaction d'un rapport d'enquête résumant les résultats, les constats et les recommandations pour une meilleure transparence et un renforcement de la lutte contre la fraude."
      ]
      }
  ];

  // Exemple d'algorithme pour générer la documentation
  for (const ctf of CTFs) {
    const ctfDetails = `
# ${ctf.title}
# ${ctf.Description}
**Objectif**: ${ctf.objective}
**Phases**: ${ctf.phases.join(", ")}

## Tâches
${ctf.tasks.map((task, index) => `- ${index + 1}. ${task}`).join("\n")}

---
    `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          name: "[📔.codex]",
          content: "phase[00]:[DATE]:[initialisation des variables dans contexte D'une enquête parlementaire]",
        },
      ],
      model: "gemma2-9b-it",
      temperature: 0.5,
      max_tokens: 2024,
      top_p: 1,
      stop: null,
      stream: false,
    });

    const mdContent = chatCompletion.choices[0]?.message?.content;
    const fileName = `CTF_${ctf.id}_${ctf.title.replace(/ /g, "_")}.md`;
    fs.writeFileSync(fileName, ctfDetails + mdContent);
    console.log(`Documentation générée : ${fileName}`);
  }

  console.log("Toutes les documentations des CTF ont été générées avec succès !");
}

main();