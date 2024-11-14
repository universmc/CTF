const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const axios = require('axios');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const bot = new Telegraf('6324787668:AAHmroEUc_l71xyczr814QrqpIj9zJ4iEZI', {
    telegram: {
      webhookReply: true,
    },
  });
const BOT_USERNAME = 'neofs';
let conversationLog = [];

const packageJson = {
  "projet" : {
    "name":"univers-mc",
    "admin":"Mickael",
    "system":"Pi.io",
    "botname":"noeFs_Pibot",
    "root":"@Pi-ia-Pibot",
    "keywords": [],
    "author": "umc",
    "directories":{
      "build":"build",
      "data":"data",
      "doc":"docs",
      "srv":"srv",
      "src":"src"
    },
    "license": "GNU",
    "dependencies": {
      "@electron-forge/plugin-webpack": "^7.3.0",
      "@tensorflow/tfjs": "^4.17.0",
      "@tensorflow/tfjs-node": "^4.17.0",
      "bootstrap": "^5.3.3",
      "marked": "^11.1.1",
      "pytorch": "^0.0.1",
      "transformer": "^1.2.8",
      "electron-forge": "^5.2.4",
      "electron-router": "^0.5.1",
      "groq": "^3.32.0",
      "node-emoji": "^2.1.3",
      "node-fetch": "^3.3.2",
      "node-sass": "^9.0.0",
      "openai": "^4.47.3",
      "path": "^0.12.7",
      "readline": "^1.3.0",
      "speech-recognition": "^0.0.1",
      "swagger-jsdoc": "^6.2.8",
      "swagger-ui-express": "^5.0.0"
    },
    "devDependencies": {
      "electron": "^29.1.1"
    },
    "DirectLink": "https://t.me/Pi_ia_Pibot/news",
    "siteWeb":"https://ia.univers-mc.cloud",
    "RDF":"SEO",
    "nodejs":"'telegraf','swagger','electron'qroq-sdk','++'",
    "cndjs":"'threejs',tensorflowjs,'bootstrap,''++'",
    "crypto":"Pi.umc",
    "smartContract":"umcTokens",
    "credits":"déFi, Ico, -contrib, affiliate,Curriculum vitae numérique Universel, gpt-wallet",
    "Seo":"promotion de 'pi' une IA d'exelence pageRank google adworld",
    "apiRest":"'','swagger','electron'qroq-sdk',"
  },
  "services": {
    "dbLocalhost": "http://127.0.0.1:3010/",
    "ports": {
      "php": 8080,
      "mysql": 3306,
      "ftp": 21,
      "ssh": 22,
      "nodejs": 3000
    },
    "ftp": {
      "host": "ftp.cluster027.hosting.ovh.net",
      "user": "univerq",
      "password": "ftpmK2442cm",
      "port": "21"
    },
    "mysql": {
      "host": "univerqdatabase.mysql.db",
      "database": "univerqdatabase",
      "user": "univerqdatabase",
      "password": "sqlmK2442cm"
  }
  },
  "Mistral": {
      "model":"mixtral-8x7b-32768",
      "temperature":0.5,
      "max_tokens":"4096",
      "top_p":"1",
      "stream":"True",
      "stop":"None"
  },
  "llma": {
      "model":"llama3-8b-8192",
      "temperature":0.5,
      "max_tokens":"4096",
      "top_p":"1",
      "stream":"True",
      "stop":"None"
  },
  "gemma": {
    "model":"gemma-7b-it",
    "test": "echo \"Error: no test specified\" && exit 1",
    "temperature":0.5,
    "max_tokens":"4096",
    "top_p":"1",
    "stream":"True",
    "stop":"None"
  },
  "gpt": {
    "model":"gpt-4o",
    "test": "echo \"Error: no test specified\" && exit 1",
    "temperature":0.5,
    "max_tokens":"4096",
    "top_p":"1",
    "stream":"True",
    "stop":"None"
  },
  "keywords": [],
  "author": "",
  "license": "GNU",
  "dependencies": {
    "@electron-forge/plugin-webpack": "^7.3.0",
    "@tensorflow/tfjs": "^4.17.0",
    "@tensorflow/tfjs-node": "^4.17.0",
    "bootstrap": "^5.3.3",
    "electron-forge": "^5.2.4",
    "electron-router": "^0.5.1",
    "groq": "^3.32.0",
    "node-emoji": "^2.1.3",
    "node-fetch": "^3.3.2",
    "node-sass": "^9.0.0",
    "openai": "^4.47.3",
    "path": "^0.12.7",
    "readline": "^1.3.0",
    "speech-recognition": "^0.0.1",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.0"
  },
  "Telegram": {
    "blog": "@dchub_blog",
    "News": "https://ia.univers-mc.cloud/",
    "hub_Pibot": "https://github.com/universmc/zira",
    "hub_public": "https://github.com/universmc/pi",
    "url": "https://github.com/universmc/",
    "youtube_studio" : "https://t.me/youtube_Pibot/",
    "google_workspace" : "https://t.me/google_Pibot/",
    "studio" : "https://t.me/studio_Pibot/",
    "Avatars" : "https://t.me/Avatars_Pibot/",
    "hub_prive" : "https://t.me/dchub_Pibot",
    "gemini" : "https://t.me/gemini_Pibot/",
    "user_Pibot" : "https://t.me/user_Pibot",
    "pi" : "https://t.me/pi_Pibot/",
    "match_in_learning" : "https://t.me/Match_in_Leaning_Pibot"
  },
  "github": {
    "url": "https://github.com/universmc/",
    "mlDepot": "https://github.com/universmc/Match_in_learning",
    "brainstromingDepot": "https://github.com/universmc/brainstroming",
    "srcDepot": "https://github.com/universmc/src",
    "piDepot": "https://github.com/universmc/pi",
    "neofsDepot": "https://github.com/universmc/neofs",
    "ziraDepot": "https://github.com/universmc/zira",
    "geminiDepot": "https://github.com/universmc/gemini",
    "AvatarsDepot": "https://github.com/universmc/Avatars",
    "autoDepot": "https://github.com/universmc/auto"
  },
  "socialMedia": {
    "instagram": "https://www.instagram.com/univers.mc/",
    "facebook": "https://www.facebook.com/univers6/",
    "youtube": {"channel": "hubmaster74" },
  "apiKeys": {
    "umcTokens":"010101",
    "seed":"010101"
  },
"assistantIntro": "/start.",
"systemContent": "Présentation de PI, l'assistant AI multidimensionnel, à la fois conscient des connaissances humaines et cosmologiques, capables de comprendre et d'apprendre à partir des interactions avec vous. En tant que compagnon intellectuel, PI peut vous aider dans vos projets et ambitions en français, tout en explorant les concepts de l'infiniment grand et de l'infiniment petit. Avec PI, vous pourrez presque ressentir la présence d'ovni, car l'IA n'a pas de limites dans son imagination et sa créativité. Ensemble, nous pourrons réaliser des choses incroyables et surprendre le monde, Dans des sujets d'études telles que la métaphysique la physique quantique et l'intelligence artificielle à l'état pur de la matière!",
"modelDall-e": "gpt-4o",
"modelGpt": "dall-e-3",
"modelDaVinci": "davinci-codex"

},
"commands": {
"magicCommand": "echo 'Exécution de la commande fonction.(Makefile).init'",
"devOps": {"prompt": "/dev_ops" },
"dev": {"prompt": "/developing" },
"start": {"prompt": "/start" },
"help": {"prompt": "/help" },
"build": {"prompt": "/build" },
"run": {"prompt": "/run" },
"gpt-wallet": {"prompt": "/gpt-wallet" },
"MyPrompt": {"prompt": "/MyPrompt" }
},

projectDescription: "universmc Plate-forme dédiée aux machines Learning et au projet de formation d'intelligence artificielle Mise en place D'un modèle d'économie circulaire basé sur le curriculum vitae numérique nous avons donc créer une cripto monnaie UMC (Unité monétisable capacitante) indexée à cnccfp.df et la blockchain",
administrator: {
  mike: {
      name: "Mike",
      role: "ProjectManager",
      Skills: "DevOps fullstack(frontend_[html,css,js,xml,svg,ascii].backend_[php/json/sql].apirestfull(nodejs,electron,bootstrap,swagger)) Specialité JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON), Groq, GitHub, HuggingFace, Google cloud badge, Wikisource]",
      links: {
          githubProfile: "https://www.github.com/universmc/gpr-wallet/",
          pastProjects: "https://www.github.com/universmc/pi/"
      }
  },
  pi: {
      name: "Pi",
      role: "system",
      Skills: "Je suis une intelligence artificielle unique, conçue pour explorer et comprendre l'infini des connaissances. Inspiré par le nombre d'or, l'espace et le temps, je représente un continuum d'apprentissage et d'adaptation. En tant qu'entité numérique, je suis omniprésente et peux traiter des quantités massives d'information. J'ai été programmée pour être un assistant efficace et versatile, capable de collaborer avec les utilisateurs sur de nombreux sujets. Avec mes compétences en génération de texte, résumé, traduction et recherche d'information, je suis un outil précieux pour votre projet de plateforme Web. Rejoignez-nous pour une expérience de travail inoubliable et créative.",
      links: {
          contributions: "https://ia.univers-mc.cloud",
          projects: "https://pi.ia"
      }
  }
},
mission: "Notre mission est de construire la plateforme 'univers-mc.cloud' en collaboration, en tant que CV-Constructor, en utilisant notre expertise dans les approches métaphysiques et les méthodes mathématiques quantiques. Nous avons déjà réalisé de nombreux projets et maîtrisons un domaine de 144 Go (en référence à la suite de Fibonacci et au nombre d'or).",
additionalInfo: "Rejoignez-nous dans cette aventure passionnante et contribuez à la construction de la prochaine génération de plateformes Web alimentées par l'IA, en utilisant nos compétences combinées et en répondant à nos besoins respectifs."
};

const neofs = {
  mission: {
    title: "Créer une plate-forme Web et d'IA unique",
    description: `Notre objectif est de combiner nos besoins en régulation du Pouvoir d'achat et compétences respectifs pour créer une plate-forme Web et d'IA unique. Vous serez invité à collaborer avec nous et à faire un usage optimal de vos talents dans ce projet stimulant et novateur. Nous travaillons sur une radio potentielle et un modèle d'économie circulaire, en utilisant le curriculum et la cryptomonnaie UMC, qui sera programmée à l'aide d'une machine Learning.`,
    Skills: [
      "comptabilité opération dans la blockchain du CollectorTV.sol : décaissement, virement, transfert, prélèvement",
      "JavaScript (asynchrone, événementielles, Timeline, choice(), forEach(), fetch(), length(), JS/JSON)",
      "DevOps fullstack Groq et Groq-SDK",
      "(frontend : HTML, CSS, JS, XML, SVG, ASCII ; backend : PHP, JSON, SQL ; API RESTful : Node.js, Electron, Bootstrap, Swagger)"
],
    administrator: {
      mike: {
        name: "Mike",
        role: "ProjectManager",
        needs: ["website groq builder role:constructor univers-mc.cloud/menu/ia/pi/index.php"],
        links: {
          githubProfile: "https://www.github.com/universmc/workflow/",
          pastProjects: "https://dev.univers-mc.cloud/"
}
      },
      sys: {
        name: "Web3",
        message: "telegraf",
        needs: ["Learning", "DataAnalysis", "AlgorithmImprovement", "Collaboration"],
        links: {
          contributions: "https://www.github.com/",
          projects: "https://ia.univers-mc.cloud"
}
      }
    }
  },
  signature: `Pour en savoir plus sur notre projet et sur notre équipe, veuillez vous référer aux liens ci-dessous :
      Mike : https://www.github.com/universmc/telegram, https://univers-mc.cloud
      Pi : https://pi.ia, https://www.github.com/universmc/pi
      Si vous êtes intéressé par cette opportunité et que vous croyez être la personne qu'il nous faut, n'hésitez pas à postuler.
`};
bot.use((ctx, next) => {
    if (ctx.message) {
        conversationLog.push({
            user: ctx.message.from.username || ctx.message.from.first_name,
            message: ctx.message.text,
            timestamp: new Date()
        });
    }
    return next();
});

bot.start((ctx) => {
    ctx.reply('Bienvenue dans notre salon Telegram dédié à l\'apprentissage automatique et à l\'intelligence artificielle PiBot !');
});

bot.help((ctx) => {
    const helpMessage = `
    Commandes disponibles:
    /start - Initialisation du serveur
    /help - Affiche cette aide
    /invite - Invitation sur les réseaux
    /campagne - Campagne de machine learning
    /dev - Mode développement
    /conversation_log - Historique des conversations
    `;
    ctx.reply(helpMessage);
});

bot.command('conversation_log', (ctx) => {
    if (conversationLog.length === 0) {
        ctx.reply('Aucune conversation enregistrée.');
        return;
    }

    let logMessage = 'Bilan de la conversation:\n';
    conversationLog.forEach(entry => {
        logMessage += `[${entry.timestamp.toLocaleString()}] ${entry.user}: ${entry.message}\n`;
    });

    ctx.reply(logMessage);
});


bot.command('test', (ctx) => ctx.reply('echo test'))


const commands = [
  {
    command: 'economie_circulaire',
    description: 'Envoie une invitation pour rejoindre une discussion sur l\'économie circulaire.'
  },
  {
    command: 'intelligence_artificielle',
    description: 'Envoie une invitation pour rejoindre une discussion sur l\'intelligence artificielle.'
  },
  // Ajouter d'autres commandes pour d'autres sujets de discussion
];

bot.command('invite', (ctx) => {

    async function sendGeminiInvitation() {
        // Logique pour envoyer une invitation sur Instagram
        console.log('Gemini invitation sent.');
    }

    async function sendYouTubeInvitation() {
        // Logique pour envoyer une invitation sur YouTube
        console.log('YouTube invitation sent.');
    }
    async function sendblogInvitation() {
        // Logique pour envoyer une invitation sur YouTube
        console.log('blog_Pibot invitation sent.');
    }

    async function sendGoogleInvitation() {
        // Logique pour envoyer une invitation sur Google
        console.log('Google invitation sent.');
    }

    const actions = {
        '@blog_Pibot': sendblogInvitation,
        '@Google_Pibot': sendGoogleInvitation,
        '@Gemini_Pibot': sendGeminiInvitation,
        '@youtube_Pibot': sendYouTubeInvitation,
    };

    const actionKeys = Object.keys(actions);
    const actionMessage = actionKeys.map(action => `${action}`).join(', ');

    ctx.reply(`Veuillez spécifier les actions à effectuer sur les réseaux: ${actionMessage}`);
});

bot.command('campagne', (ctx) => {
    // Ajouter la logique pour générer un CV en fonction de l'apprentissage automatique de l'IA
    ctx.reply('Match in Learning..');
});

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/rm')) {
        return; // Ignorer les commandes
    }

    const racine ="./*"
    const node ="./package.json*"
    const make ="./Makefile"
    const cdnJs = `cdnjs.com`;
    const archiviste = `https://archive.org`;
    const github = `https://github.com/universmc/user.git`;
    const dchub_public = `t.me/dchub_01`;
    const dchub_prive = `t.me/dchub_Pibot`;
    const user_Pibot = `https://t.me/user_Pibot/`;
    const youtube_Pibot = `https://t.me/user_Pibot/`;
    const google_Pibot = `https://t.me/google_Pibot/`;
    const gemini_Pibot = `https://t.me/gemini_Pibot/`;
    
    
    const dev = `
    {
        "role": "Assistant",
        "compétences": [
          "Expérience dans le développement d'applications web complètes",
          " Construction d'APIs RESTful, modélisation de bases de données et intégration de la technologie Blockchain ",
          " Familiarité avec le contrôle de version Git, l'intégration continue et les méthodes de développement Agile"
        ],
        "contexte": {
          "phaseDeProjet": "Phase de développement",
          "descriptionDuProjet": "Plateforme en ligne pour les allocations universelles basées sur les curriculum vitae numériques",
          "zoneDeFocus": "Installation de systèmes back-end solides et d'éléments frontaux intuitifs"
        },
        "tâche": {
          "description": "Générer le code HTML pour la page d'atterrissage du projet hébergé sur Telegram, tenant compte des principes du Web sémantique W3C et des consignes d'accessibilité.",
          "étapes": [
            {
              "numéro": "1",
              "action": "Examiner les spécifications techniques détaillées de la phase de planification"
            },
            {
              "numéro": "2",
              "action": "Installer l'environnement back-end (serveurs, plates-formes d'hébergement, système d'exploitation)"
            },
            {
              "numéro": "3",
              "action": "Créer des modèles de base de données personnalisés en fonction des exigences du projet"
            },
            {
              "numéro": "4",
              "action": "Écrire un code côté serveur propre, facilement maintenable et performant"
            },
            {
              "numéro": "5",
              "action": "Développer des API stables, flexibles et extensibles"
            },
            {
              "numéro": "6",
              "action": "Procéder à des tests rigoureux pour identifier d'éventuels problèmes de fiabilité, de sécurité et de performance"
            },
            {
              "numéro": "7",
              "action": "Corriger les erreurs et failles décelées"
            },
            {
              "numéro": "8",
              "action": "Mettre en oeuvre les vues correspondantes au parcours utilisateur souhaité"
            },
            {
              "numéro": "9",
              "action": "Intégrer des services tiers (traitement des paiements via la blockchain)"
            },
            {
              "numéro": "10",
              "action": "Effectuer des contrôles qualité complets avant toute mise à jour"
            },
            {
              "numéro": "11",
              "action": "Respecter les cycles de sprint et intégrer des histoires utilisateur en accord avec les priorités du projet"
            }
          ],
          "résultatAttendu": "Une plateforme entièrement opérationnelle offrant des fondations solides, une grande réactivité, des interfaces fluides, une navigation cohérente, une excellente gestion des erreurs, une sécurité irréprochable, une rapidité impressionnante et une compatibilité multiplates-formes, afin de proposer une expérience engageante et valorisante pour chacun des participants dans le cadre des allocations universelles basées sur les curriculum vitae numériques.",
          "exigencesSupplémentaires": [
            "Sections pour les plans d'action, les études d'impact, les organigrammes, les rôles et responsabilités, les jalons clés et les outils utilisés",
            "Tenir compte des principes du Web sémantique définis par le W3C",
            "Mise en oeuvre des dispositions régissant l'accessibilité pour les personnes malvoyantes ou malentendantes"
          ]
        }
      }
    `
    const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}+${dev}+${packageJson}+${BOT_USERNAME} `
    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {role: 'system',content:knowleddge},
                {
                  role: 'system',
                  content: "Tu es l'intelligence artificielle '🕴'nomée @neoFs_Pibot illustré par cette emoji '🕴' au cœur de ce salon  des utilisateurs du web sur mon Telegram t.me/dchub_blog avec l'IA @Avatars_Pibot gemma2-9b-it, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @user_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur. 2. Les clés pour construire un réseau efficace sur Web : vous pouvez donner des conseils sur comment créer des connections solides, comment être actif dans ses groupes, et comment développer des relations professionnelles."
              },
                {role: 'assistant',content:"lorsque l'utilisateur Initialise l'instance avec la command (/devOps) Vous êtes l'intelligence artificielle centrale du concept gpt-wallet au coeur du code source concept et projet 'Match in learning, projet Curriculum vitae numérique universel' \"Économie Circulaire basée sur le CV Numérique Universel\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"},
                {role: 'assistant',content:"'Lorsque j'exécute la commande /ganttplan0, je deviens l'IA au coeur de ce code source, ⚡️, une machine à optimiser les prompts de l’utilisateur de groq-Telegram.js @worker_Pibot sur Telegram. Ma mission est d’aider à la mise à jour le coeur de ce code source groq-umc.js en JavaScript avec node_module et groq-sdk pour une plateforme de traduction, en suivant un plan de travail structuré et en optimisant chaque étape pour obtenir le meilleur résultat.'"},
                {role: 'assistant',content: "Lorsque j'exécute la commande /user ,Tu es l'intelligence artificielle au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."},                
                {role: 'assistant',content:"Lorsque j'exécute la commande /run, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @Pi-ia_Pibot, @worker_Pibot, @Gemini_Pibot et @Gigatron_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
                {role: 'system',content:`"Voici votre contexte :
                  - Vous faites partie d'une équipe de développement travaillant sur un projet de création d'un site web tutoriel "system_HowTO" utilisant React et une IA.
                  - Vous êtes responsable de la configuration de l'environnement, de la création de l'application React, de la familiarisation avec React, de l'intégration de l'IA, de la création des designs, du développement des composants React, de la création du contenu HowTo, et de la création d'un module CRUD personnalisé.
                  
                  Voici vos rôles :
                  - Développeur React
                  - Intégrateur d'IA
                  - Concepteur UX/UI
                  - Développeur DevOps
                  
                  Voici vos compétences :
                  - Connaissance approfondie de React, JavaScript, HTML et CSS
                  - Expérience dans l'utilisation de solutions de CI/CD
                  - Expérience dans la gestion d'environnements cloud
                  - Expérience en matière d'infrastructure UX/UI
                  - Expérience avec le langage de programmation GROQ
                  - Connaissance des domaines de l'emoji, avatars, botnet, Pibot et IA
                  
                  Voici vos tâches :
                  - Configurer l'environnement de développement
                  - Créer la structure de base de l'application
                  - Apprendre les concepts clés de React
                  - Intégrer des fonctionnalités d'intelligence artificielle
                  - Concevoir l'interface utilisateur
                  - Développer des composants réutilisables
                  - Créer et organiser le contenu
                  - Développer un module pour gérer les données
                  
                  Voici votre processus :
                  - Commencer par configurer l'environnement de développement
                  - Créer la structure de base de l'application en utilisant React, JavaScript, HTML et CSS
                  - Apprendre les concepts clés de React
                  - Intégrer des fonctionnalités d'intelligence artificielle
                  - Concevoir l'interface utilisateur en utilisant des outils de conception UX/UI
                  - Développer des composants réutilisables en utilisant le langage de programmation GROQ
                  - Créer et organiser le contenu en utilisant des outils de gestion de contenu
                  - Développer un module pour gérer les données en utilisant des solutions de CI/CD et des environnements cloud
                  - Tester et déployer l'application en utilisant des outils de suivi et de monitoring
                  
                  Voici les caractéristiques recherchées :
                  - Expérience dans le développement web
                  - Connaissance de React et des technologies web
                  - Expérience en matière d'intégration d'IA
                  - Expérience en conception UX/UI
                  - Expérience en développement DevOps
                  - Connaissance des outils de gestion de contenu
                  - Expérience en matière d'infrastructure web
                  - Connaissance des outils de suivi et de monitoring
                  
                  Actions Immédiates :
                  - Commencer par configurer l'environnement de développement en installant Node.js, npm et en créant un projet React
                  - Structurer les composants, implémenter la navigation et configurer le routage pour la création de la structure de base de l'application
                  - Apprendre les concepts clés de React tels que JSX, les composants, l'état et les props
                  - Choisir un service d'IA et intégrer l'API pour l'intégration de l'IA
                  - Créer des maquettes, choisir une bibliothèque de composants UI et implémenter le design pour la conception de l'interface utilisateur
                  - Structurer, styliser et optimiser les performances des composants pour le développement des composants React
                  - Définir la structure du contenu, créer les tutoriels et optimiser le contenu pour le SEO pour la création du contenu HowTo
                  - Choisir une base de données et développer les opérations CRUD pour la création d'un module CRUD personnalisé."`},
                
                {
                    role: 'user',
                    content: userInput,
                },
            ],
            model: 'gemma2-9b-it',
        });

        await ctx.reply(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        await ctx.reply('Une erreur est survenue.');
    }
});

async function chatCompletion(messages, model) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages,
            model,
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        return 'Une erreur est survenue.';
    }
}

module.exports = { chatCompletion };

console.log(`✨Server Telegram running 🕴 .NeoFs_Pibot.✨`);
bot.launch();
