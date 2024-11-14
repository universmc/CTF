const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const db = new Groq({});

async function main() {
  // Liste des CTFs avec leurs détails
  const CTFs = [
    {
      "id": 7,
      "title": "synpsis Elyséum",
      "Description": "Enquête sur la violence, la répression financière et la transformation de l'Élysée en centre pénitencier dans un contexte de manifestations et de révolution permanente.",
      "objective": "Analyser les causes et les conséquences de la violence, de la répression financière et de la transformation de l'Élysée en centre pénitencier, ainsi que les répercussions sur la sécurité globale et les relations avec d'autres pays européens.",
      "tasks": [
      "Étudier les événements historiques marquants en France depuis la prise de la Bastille jusqu'à la prise de l'Élysée en 2024.",
      "Analyser les effets de la violence, de la répression financière et de la transformation de l'Élysée en centre pénitencier sur la société, l'économie et la sécurité globale.",
      "Examiner les liens entre évasions fiscales, répression financière, blanchiment d'argent, détournement de fonds et les chapitres de l'enquête parlementaire.",
      "Investiguer sur les conséquences de la prison de l'Élysée reconnue à l'échelle européenne et son impact sur les relations avec d'autres pays.",
      ],
      "phases": [
      "Contexte historique - Étude des événements clés ayant mené à la situation actuelle.",
      "Analyse des impacts - Examen des effets de la violence, de la répression financière et de la transformation de l'Élysée sur la société, l'économie et la sécurité globale.",
      "Enquête parlementaire - Mise en lumière des liens entre la répression financière et les différents cas d'évasions fiscales, de blanchiment d'argent et de détournement de fonds.",
      "Conséquences européennes - Analyse de l'impact de la prison de l'Élysée sur les relations avec d'autres pays européens et sur la perception internationale de la France.",
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