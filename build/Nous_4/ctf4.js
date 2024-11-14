const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const db = new Groq({});

async function main() {
  // Liste des CTFs avec leurs détails
  const CTFs = [
    {
      "id": 4,
      "title": "Nous_4 - Symbole d'abus de pouvoir",
      "Description": "Étude des manipulations d'état et de la désinformation médiatique en rapport avec les allocutions d'Emmanuel Macron depuis son élection, en analysant l'impact de l'IA sur le marché du travail et en proposant des solutions pour rendre l'IA accessible à tous.",
      "objective": "Analyser les discours d'Emmanuel Macron et les réactions des médias et des parties politiques, en examinant l'influence de l'IA sur le marché du travail et en formulant des recommandations pour démocratiser l'accès à l'IA.",
      "tasks": [
      "Récolter et étudier les discours d'Emmanuel Macron depuis son élection, en identifiant les thèmes clés et les réactions des médias et des parties politiques.",
      "Analyser l'impact de l'IA sur le marché du travail, en évaluant les opportunités et les défis liés à son adoption.",
      "Proposer des solutions et des politiques publiques pour favoriser un accès démocratique à l'IA et pour limiter les manipulations d'état et la désinformation.",
      "Mener une réflexion sur l'éthique et la gouvernance de l'IA, en examinant les conséquences potentielles de son utilisation dans le domaine politique."
      ],
      "phases": [
      "Recherche - Collecte et étude des données et informations disponibles sur les discours d'Emmanuel Macron, les réactions des médias et des parties politiques, et l'impact de l'IA sur le marché du travail.",
      "Proposition de solutions - Définition de recommandations et de politiques publiques pour favoriser l'accès à l'IA et limiter la manipulation d'état et la désinformation.",
      "Mise en œuvre - Élaboration d'un plan d'action pour la mise en œuvre des solutions proposées et pour la promotion d'une utilisation éthique et responsable de l'IA dans le domaine politique."
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