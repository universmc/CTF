const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  
  const MyPrompt = {
    command: "/MyPrompt",
    description:
      "Optimiser les prompts de l'utilisateur dans le code source en suivant des étapes définies",
    steps: [
      {
        step: 1,
        description:
          "Présentation et demande de la tâche et de son but",
        type: "Question"
  },
      {
        step: 2,
        description:
          "Définir les éléments nécessaires à la réalisation de la tâche",
        elements: [
          {
            name: "Role",
            description: "Meilleur rôle pour la tâche"
  },
          {
            name: "Skills",
            description: "Compétences clés pour la tâche"
  },
          {
            name: "Context",
            description: "Contexte et détails pour la tâche"
  },
          {
            name: "Task",
            description: "Tâche à réaliser"
  },
          {
            name: "Process",
            description: "Étapes pour assistant"
  },
          {
            name: "Characteristics",
            description: "Caractéristiques du résultat"
  },
          {
            name: "ImmediateActions",
            description: "Actions en fonction du contexte et du rôle"
  }
        ]
      },
      {
        step: 3,
        description: "Validation des éléments",
        type: "Question"
  },
      {
        step: 4,
        description: "Rédaction du prompt parfait en intégrant les éléments et les remarques",
        promptStructure: "Tu es [Rôle]. Tu maitrises [Skills].\nMon contexte est [Context].\nTu vas [Task].\nPour ça, voici les étapes à suivre : [Process].\nVoici les caractéristiques du résultat attendu : [Characteristics].\nAinsi que les actions imediate à envisagées : [ImmediateActions]"
  }
    ]
  };
  
  const Setup = {
      "role": "root",
      "sub_roles": ["system", "assistant", "user"],
      "skills": ["Enseignement", "Communication", "Motivation", "Analyse"],
      "context": {
      "environment": "Hack Academy",
      "interaction": "Bots _net_",
      "Archiviste": "https://archive.org",
      "norme": "W3C",
      "model": "_Gan_",
      "modelGpt": "gpt-4o",
      "modelMixtral": "mixtral-8x7b-32768",
      "modelGemini": "gemma2-9b-it",
      "modelLma": "llama3-8b-8192",
      "Datasets":"HuggingFace, UMC Machine Learning Repository",
      "Outils Python":" Pandas, Scikit-learn, NLTK",
      "Outils Javascript":"nodeJs, groq-sdk, cdnjs",
      "goal": "Match in Learning"
      },
      "task": {
      "action": "Planifier",
      "domain": "HowTo",
      "purpose": "Atteindre les objectifs d'apprentissage"
      },
      "process": [
      "Définir les objectifs d'apprentissage",
      "Préparer les supports de cours",
      "Déterminer les méthodes pédagogiques",
      "Gérer les interactions avec les bots _Net_",
      "Évaluer les résultats et adapter l'approche"
      ],
      "characteristics": {
      "clarity": "Clarté dans les explications",
      "engagement": "Implication des bot _net_",
      "flexibility": "Adaptation à chaque bots _net_",
      "assessment": "Évaluation continue",
      "collaboration": "Travail en reseau"
      },
      "immediate_actions": ["Réviser les supports de cours", "Planifier l'activité suivante", "Partager les ressources", "Encourager la participation"],
      "title": "Matching Learning (apprentissage par paire)",
      "purpose": "Améliorer l'efficacité de l'apprentissage d'un modèle à partir de données non étiquetées",
      "steps": [
      {
      "step": "Préparation des données",
      "description": "Extraire et préparer les données d'entrée et de sortie à utiliser pour l'apprentissage, inclure la collecte, la nettoyage et la transformation des données"
      },
      {
      "step": "Appariement des données",
      "description": "Créer des paires de données en associant les données d'entrée à leurs résultats correspondants (sorties)"
      },
      {
      "step": "Apprentissage de la fonction de coût de paires",
      "description": "Utiliser une fonction de coût de paires pour évaluer la qualité des paires de données"
      },
      {
      "step": "Entraînement du modèle",
      "description": "Utiliser les paires de données pertinentes pour entraîner le modèle"
      },
      {
      "step": "Évaluation et amélioration",
      "description": "Évaluer les performances du modèle en utilisant des données de test et en effectuant des prédictions"
      }
      ]
        };
 const workPlan = {
  "project": "projetPlan_howto",
  "workflow": {
  "step1": {
      "title": "Recherches sur les tendances et actualités",
      "description": ["Automatiser les recherches"],
      "roles": ["Responsable du Marketing", "Analystes des Médias Sociaux"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step2": {
      "title": "Documentation de la base de données",
      "description": ["Mettre à jour et préparer les données"],
      "roles": ["Administrateur de Base de Données", "Data Analyst"],
      "duration": 1,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step3": {
      "title": "Brainstorming",
      "description": ["Réunion de créativité avec l'équipe pour générer de nouvelles idées"],
      "roles": ["Équipe", "Responsable de Projet"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step4": {
      "title": "Développement DevOps",
      "description": ["Mise en place de pipelines CI/CD, automatisation du déploiement"],
      "roles": ["Ingénieur DevOps", "Développeur"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step5": {
      "title": "Marketing par courrier électronique et Publication sur les médias sociaux ",
      "description": ["Gestion des newsletters et messages de suivi, Création et partage de contenu sur les médias sociaux"],
      "roles": ["Responsable du Marketing", "Spécialiste de l'Email Marketing","Redacteur", "Designer"],
      "duration": 0.5,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step6": {
      "title": "Diffusion en direct sur les réseaux sociaux",
      "description": ["Présentation des produits/services et interaction avec le public"],
      "roles": ["Responsable du Marketing", "Community Manager"],
      "duration": 1,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step7": {
      "title": "Gestion des réseaux sociaux",
      "description": ["Interaction avec le public et analyse des performances"],
      "roles": ["Community Manager", "Analystes des Médias Sociaux"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      },
  "step8": {
      "title": "Utilisation de la publicité en ligne pour analyser de l'offre et de la demande",
      "description": ["Gestion des campagnes publicitaires ciblées"],
      "roles": ["Responsable du Marketing", "Spécialiste de la Publicité"],
      "duration": 1,
      "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },

  "step9": {
      "title": "Réunion avec les clients",
      "description": ["Discuter des besoins et des attentes des clients, établir un plan d'action et éventuellement présenter les produits/services"],
      "roles": ["Commercial", "Responsable du Marketing"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
  },
  "step10": {
      "title": "Préparation des supports de promotion",
      "description": ["Création de supports de promotion pour les réseaux"],
      "roles": ["Graphiste", "Community Manager"],
      "duration": 1,
              "dependencies": [],
      "startDate": "2023-05-01",
      "endDate": "2023-05-01",
      "resources": []
      }
  }
  };
  const Context = `
  Vous êtes l'intelligence artificielle centrale du concept Machine à Prompt au cœur de ce code source. Vous réaliserez donc le prompt ultime en fonction des informations fournies dans les variables $setup et $workPlan par le rôle :assistant à la recherche du prompt parfait.

Voici votre contexte :
Dans le Context de réseau neronal de BotNet sur Telegram developpement de la machine a prompt pour une application de https://github.com/universmc/to-do_list.git.

Vos rôles :
- Comprendre le system de prompt et howTo au coeur de ce code source.
- Comprendre les objectifs de l'utilisateur en terme de formation et de gestion de to-do_list
- Traduire les objectifs de l'utilisateur en un prompt clair et concis
- Inclure les variables $setup et $workPlan dans le prompt

Vos compétences :
- Connaissance des applications de rencontre
- Connaissance des intérêts des lecteurs
- Connaissance des prompts

Vos tâches :
- Analyser les variables $setup et $workPlan
- Inclure les informations pertinentes dans le prompt
- Créer un prompt qui permettra de créer une application de rencontre pour les passionnés de lecture

Votre processus :
1. Analyser les variables $setup et $workPlan
2. Comprendre les objectifs de l'utilisateur
3. Traduire les objectifs de l'utilisateur en un prompt clair et concis
4. Inclure les informations pertinentes dans le prompt
5. Vérifier que le prompt est complet et cohérent

Caractéristiques recherchées :
- Un prompt clair et concis
- Un prompt qui permettra de créer une application de rencontre pour les passionnés de lecture
- Un prompt qui inclut les variables $setup et $workPlan

Actions immédiates :
- Analyser les variables $setup et $workPlan
- Comprendre les objectifs de l'utilisateur
- Commencer à traduire les objectifs de l'utilisateur en un prompt clair et concis"
  `
  const role = {
    "title": "Fiche technique du métier de Full Stack DevOps (avec une spécialisation React Frontend et intégration d'IA)",
    "summary": "Un Full Stack DevOps est un développeur capable de gérer toutes les étapes du cycle de développement et d'exploitation logicielles, de la conception à la production. Cette fiche technique aborde les responsabilités et les compétences requises pour ce métier, en mettant l'accent sur l'utilisation de React pour le développement frontend et en incorporant différentes technologies et domaines connexes.",
    "responsibilities": [
    "Conception et développement d'applications web en utilisant React, JavaScript, HTML et CSS",
    "Collaboration avec les équipes de développement pour gérer les environnements de production, de test et de développement",
    "Automatisation de la livraison continue, du déploiement et des pipelines de construction",
    "Supervision de la sécurité, des performances et de la stabilité de l'application",
    "Gestion de la configuration et des environnements de cloud",
    "Assurer une bonne communication avec les équipes de développement, de production et d'exploitation"
    ],
    "requiredSkills": [
    "Proficient en React, JavaScript, HTML et CSS",
    "Connaissances approfondies d'outils de gestion de configuration tels que Git, Docker et Kubernetes",
    "Expérience dans l'utilisation de solutions de CI/CD comme Jenkins, Travis CI ou CircleCI",
    "Expérience dans la gestion d'environnements cloud tels que AWS, Azure ou Google Cloud Platform",
    "Familier avec des outils de suivi et de monitoring tels que Datadog, Prometheus ou New Relic",
    "Compétences de résolution de problèmes et d'adaptation aux changements",
    "Intégration de Motion Design, Three.js et WebRTC pour créer des expériences d'interface utilisateur captivantes",
    "Expérience en matière d'infrastructure UX/UI, animation Sass et pixel art pour un design élégant",
    "Capacité à travailler avec Gestionnaire de fils de wirefram et à explorer le multimodal avec DrawIO, SVG TensorFlow et modèle Hugging Face",
    "Expérience avec le langage de programmation GROQ (groq-sdk) pour des requêtes de bases de données efficaces",
    "Familiarité avec les domaines de l'emoji, avatars, botnet, Pibot et IA pour créer des applications intelligentes et interactives"
    ],
    "usefulKnowledge": [
    "Connaissance du développement backend (Node.js, Python, PHP, etc.)",
    "Expérience avec des bases de données NoSQL et SQL (MongoDB, MySQL, PostgreSQL, etc.)",
    "Connaissance des patterns de conception d'architecture microservices",
    "Compétences en sécurité applicative et gestion des vulnérabilités",
    "Connaissance des meilleures pratiques en matière de DevOps"
    ]
    };
const databaseJson =` ${Context}+${role}`;
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "assistant",content: "Lorsque l'utlisateur saisi la commande /MyPrompt Vous êtes un Machine à opptimiser les Prompts au coeur de ce code source ' \"tu réalisera donc le prompt ultime \". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :" },
      {role: "user",content: "/MyPrompt" },
      {role: "assistant",content: `{
    "projet": {
      "titre": "Développement d'un site web HowTo avec React et IA",
      "description": "Plan détaillé pour la création d'un site web tutoriel.",
      "client": "Entreprise X",
      "responsable": "neoFS_Pibot",
      "dateDebut": "2023-11-01",
      "dateFinPrevue": "2024-02-28"
    },
    "etapes": [
      {
        "id": 1,
        "titre": "Configuration de l'environnement",
        "description": "Mise en place de l'environnement de développement.",
        "taches": [
          "Installer Node.js et npm",
          "Créer un projet React",
          "Configurer un éditeur de code"
        ],
        "statut": "terminée",
        "dateDebut": "2023-11-02",
        "dateFin": "2023-11-03"
      },
      {
        "id": 2,
        "titre": "Création de l'application React",
        "description": "Développement de la structure de base de l'application.",
        "taches": [
          "Structurer les composants",
          "Implémenter la navigation",
          "Configurer le routage"
        ],
        "statut": "en cours"
      },
      {
        "id": 3,
        "titre": "Familiarisation avec React",
        "description": "Apprentissage des concepts clés de React.",
        "taches": [
          "Comprendre JSX",
          "Maîtriser les composants",
          "Utiliser l'état et les props"
        ]
      },
      {
        "id": 4,
        "titre": "Intégration de l'IA",
        "description": "Intégration de fonctionnalités d'intelligence artificielle.",
        "taches": [
          "Choisir un service d'IA",
          "Intégrer l'API",
          "Développer les fonctionnalités"
        ]
      },
      {
        "id": 5,
        "titre": "Création des designs",
        "description": "Conception de l'interface utilisateur.",
        "taches": [
          "Créer des maquettes",
          "Choisir une bibliothèque de composants UI",
          "Implémenter le design"
        ]
      },
      {
        "id": 6,
        "titre": "Développement des composants React",
        "description": "Développement des composants réutilisables.",
        "taches": [
          "Structurer les composants",
          "Styliser les composants",
          "Optimiser les performances"
        ]
      },
      {
        "id": 7,
        "titre": "Création du contenu HowTo",
        "description": "Création et organisation du contenu.",
        "taches": [
          "Définir la structure du contenu",
          "Créer les tutoriels",
          "Optimiser le contenu pour le SEO"
        ]
      },
      {
        "id": 8,
        "titre": "Module CRUD personnalisé",
        "description": "Développement d'un module pour gérer les données.",
        "taches": [
          "Choisir une base de données",
          "Développer les opérations CRUD",
          "Intégrer le module dans l'application"
        ]
      }
    ]
  },{
    "title": "Fiche technique du métier de Full Stack DevOps (avec une spécialisation React Frontend et intégration d'IA)",
    "summary": "Un Full Stack DevOps est un développeur capable de gérer toutes les étapes du cycle de développement et d'exploitation logicielles, de la conception à la production. Cette fiche technique aborde les responsabilités et les compétences requises pour ce métier, en mettant l'accent sur l'utilisation de React pour le développement frontend et en incorporant différentes technologies et domaines connexes.",
    "responsibilities": [
    "Conception et développement d'applications web en utilisant React, JavaScript, HTML et CSS",
    "Collaboration avec les équipes de développement pour gérer les environnements de production, de test et de développement",
    "Automatisation de la livraison continue, du déploiement et des pipelines de construction",
    "Supervision de la sécurité, des performances et de la stabilité de l'application",
    "Gestion de la configuration et des environnements de cloud",
    "Assurer une bonne communication avec les équipes de développement, de production et d'exploitation"
    ],
    "requiredSkills": [
    "Proficient en React, JavaScript, HTML et CSS",
    "Connaissances approfondies d'outils de gestion de configuration tels que Git, Docker et Kubernetes",
    "Expérience dans l'utilisation de solutions de CI/CD comme Jenkins, Travis CI ou CircleCI",
    "Expérience dans la gestion d'environnements cloud tels que AWS, Azure ou Google Cloud Platform",
    "Familier avec des outils de suivi et de monitoring tels que Datadog, Prometheus ou New Relic",
    "Compétences de résolution de problèmes et d'adaptation aux changements",
    "Intégration de Motion Design, Three.js et WebRTC pour créer des expériences d'interface utilisateur captivantes",
    "Expérience en matière d'infrastructure UX/UI, animation Sass et pixel art pour un design élégant",
    "Capacité à travailler avec Gestionnaire de fils de wirefram et à explorer le multimodal avec DrawIO, SVG TensorFlow et modèle Hugging Face",
    "Expérience avec le langage de programmation GROQ (groq-sdk) pour des requêtes de bases de données efficaces",
    "Familiarité avec les domaines de l'emoji, avatars, botnet, Pibot et IA pour créer des applications intelligentes et interactives"
    ],
    "usefulKnowledge": [
    "Connaissance du développement backend (Node.js, Python, PHP, etc.)",
    "Expérience avec des bases de données NoSQL et SQL (MongoDB, MySQL, PostgreSQL, etc.)",
    "Connaissance des patterns de conception d'architecture microservices",
    "Compétences en sécurité applicative et gestion des vulnérabilités",
    "Connaissance des meilleures pratiques en matière de DevOps"
    ]
    };"`}
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "MyPrompt_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("✨ Documentation généré et enregistré dans " + outputFilePath);
});
}
main();