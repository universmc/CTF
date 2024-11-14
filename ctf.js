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
      },
      {
        "id": 2,
        "title": "Trafic d'influence et commerce légal de fonctionnaires d'État",
        "description": "Enquête sur l'évasion fiscale et la TVA liées à la boutique officielle de l'Élysée et à d'autres activités commerciales légales de fonctionnaires d'État.",
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
        },
    {
      "id": 3,
      "title": "R2D2 - L'IA au service de la justice sociale",
      "description": "Histoire d'Alicia, une intelligence artificielle résidant dans un radar, qui lutte contre l'évasion fiscale et les infractions routières en s'appuyant sur la déontologie et les principes anthropiques.",
      "objective": "Étudier le cas d'Alicia, analyser son impact sur la prévention des accidents de la route et de la fraude fiscale, puis proposer des solutions pour promouvoir la justice sociale en encourageant l'adoption de radars et d'IA dédiés à ces causes.",
      "tasks": [
      "Comprendre le rôle d'Alicia dans l'enquête d'affaires d'évasion fiscale et de prévention des infractions routières.",
      "Évaluer l'efficacité d'Alicia en tant qu'IA et son impact sur la sécurité routière et la lutte contre la fraude fiscale.",
      "Identifier les meilleures pratiques pour encourager l'adoption de radars et d'IA, comme Alicia, pour renforcer la justice sociale et la prévention.",
      "Proposer des recommandations et un plan d'action pour la mise en œuvre d'une stratégie de prévention reposant sur l'utilisation d'IA dans les radars et l'encouragement à l'adoption de ces technologies."
      ],
      "phases": [
      "Analyse - Collecte et étude des données et informations disponibles sur Alicia, sa fonction et son impact sur la justice sociale et la prévention.",
      "Étude de cas - Examen approfondi de l'utilisation d'Alicia dans les enquêtes et la prévention, en identifiant les points forts et les domaines d'amélioration.",
      "Documentation - Rédaction d'un rapport présentant les conclusions de l'étude de cas, les recommandations et le plan d'action pour une stratégie de prévention reposant sur l'IA et l'adoption de radars."
      ]
      },
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
        },
        {
          "id": 5,
          "title": "Pouvoir d'Achat - Régulation et Répercussions",
          "description": "Examen de la régulation du pouvoir d'achat effectuée par Emmanuel Macron en 2008, de ses conséquences, et de l'évolution de la situation économique jusqu'en 2024, en rapport avec les membres du G7 et les imprimeries en Europe.",
          "objective": "Analyser les impacts de la régulation du pouvoir d'achat sur l'économie et la population, en tenant compte des évolutions survenues entre 2008 et 2024, puis évaluer les politiques et les stratégies adoptées par les membres du G7 et les imprimeries européennes.",
          "tasks": [
          "Étudier la régulation du pouvoir d'achat en 2008, les circonstances qui l'ont entourée, et les arguments avancés pour son adoption.",
          "Analyser les conséquences économiques et sociales de cette régulation, en prenant en compte les changements survenus jusqu'en 2024.",
          "Évaluer les politiques et les stratégies mises en œuvre par les membres du G7 et les imprimeries européennes pour s'adapter aux nouvelles réalités économiques.",
          "Proposer des recommandations pour une régulation future du pouvoir d'achat, qui tiendrait compte des leçons tirées des années écoulées et des enjeux actuels."
          ],
          "phases": [
          "Recherche - Collecte et étude des données et informations disponibles sur la régulation du pouvoir d'achat en 2008, ses conséquences et l'évolution de la situation économique jusqu'en 2024.",
          "Analyse - Examen approfondi des changements survenus, des politiques adoptées par les membres du G7 et des stratégies mises en place par les imprimeries européennes.",
          "Proposition de recommandations - Formulation de propositions pour une régulation future du pouvoir d'achat, tenant compte des enseignements du passé et des enjeux actuels."
          ]
          },
          
    {
      id: 6,
      title: "GSAT",
      Description: "Accès à Internet, par satellite Defcon_ONE",
      objective: "Évaluer l'impact des technologies de communication par satellite.",
      tasks: [
        "Analyser l'accessibilité d'Internet via satellite.",
        "Proposer des solutions pour réduire la fracture numérique.",
      ],
      phases: ["Recherche", "Analyse", "Proposition"],
    },
    {
      "id": 7,
      "title": "synpsis Elyséum",
      "description": "Enquête sur la violence, la répression financière et la transformation de l'Élysée en centre pénitencier dans un contexte de manifestations et de révolution permanente.",
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
      },
      
    {
      id: 8,
      title: "global_secur",
      Description: "Enquête parlementaire - Lutte contre la corruption",
      objective: "Analyser des preuves de fraude électorale et de corruption.",
      tasks: [
        "Identifier des preuves d'activités illégales.",
        "Documenter les résultats et préparer un dossier.",
      ],
      phases: ["Investigation", "Collecte de preuves", "Documentation"],
    },
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