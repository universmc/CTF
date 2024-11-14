const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const db = new Groq({});

async function main() {
  // Liste des CTFs avec leurs détails
  const CTFs = [
    {
      "id": 1,
      "title": "EMP - Prévention et lutte contre la fraude fiscale",
      "Description": "Identifier les cas potentiels de fraude fiscale et proposer des solutions pour prévenir et lutter contre ces activités illégales.",
      "objective": "Détecter les activités suspectes en matière de fraude fiscale, collecter et analyser des preuves et élaborer des recommandations pour renforcer la prévention et la lutte contre ces pratiques.",
      "tasks": [
      "Utiliser des techniques d'investigation avancées pour analyser les données financières et les transactions liées à la fraude fiscale.",
      "Identifier des anomalies, les typologies et les schémas de fraude potentiels et générer des rapports sur les activités suspectes.",
      "Collaborer avec les organismes gouvernementaux et les autorités compétentes pour échanger des informations et des bonnes pratiques en matière de lutte contre la fraude fiscale.",
      "Proposer des solutions pour renforcer les mécanismes de prévention, de détection et de répression de la fraude fiscale."
      ],
      "phases": [
      "Reconnaissance - Collecte et analyse des informations disponibles sur les activités potentiellement liées à la fraude fiscale.",
      "Analyse - Étude approfondie des données et identification des anomalies et des typologies de fraude.",
      "Documentation - Rédaction de rapports et de recommandations pour les pouvoirs publics et les organismes de régulation."
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