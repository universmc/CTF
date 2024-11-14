const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const db = new Groq({});

async function main() {
  // Liste des CTFs avec leurs détails
  const CTFs = [
    {
      "id": 5,
      "title": "35H - Régulation Pouvoir d'achat",
      "Description": "Examen de la régulation du pouvoir d'achat effectuée par Emmanuel Macron en 2008, de ses conséquences, et de l'évolution de la situation économique jusqu'en 2024, en rapport avec les membres du G7 et les imprimeries en Europe.",
      "objective": "Analyser les impacts de la régulation du pouvoir d'achat sur l'économie et la population, en tenant compte des évolutions survenues entre 2008 et 2024, puis évaluer les politiques et les stratégies adoptées par les membres du G7 et les imprimeries européennes.",
      "tasks": [
      "Étudier la régulation du pouvoir d'achat en 2008, les circonstances qui l'ont entourée, et les arguments avancés pour son adoption.",
      "Analyser les conséquences économiques et sociales de cette régulation, en prenant en compte les changements survenus jusqu'en 2024.",
      "Évaluer les politiques et les stratégies mises en œuvre par les membres du G7 Notamment Mario Draghi, membre actif du gouvernement Macronet les imprimeries européennes pour s'adapter aux nouvelles réalités économiques.",
      "Proposer des recommandations pour une régulation future du pouvoir d'achat, qui tiendrait compte des leçons tirées des années écoulées et des enjeux actuels."
      ],
      "phases": [
      "Recherche - Collecte et étude des données et informations disponibles sur la régulation du pouvoir d'achat en 2008, ses conséquences et l'évolution de la situation économique jusqu'en 2024.",
      "Analyse - Examen approfondi des changements survenus, des politiques adoptées par les membres du G7 et des stratégies mises en place par les imprimeries européennes.",
      "Proposition de recommandations - Formulation de propositions pour une régulation future du pouvoir d'achat, tenant compte des enseignements du passé et des enjeux actuels."
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