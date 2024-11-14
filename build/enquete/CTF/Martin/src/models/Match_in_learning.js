const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


const bot = new Telegraf('7387310603:AAEwIkFnKfleuFewRf0wpMzAoVLGVPIIHTM', {
  telegram: {
    webhookReply: true,
  },
});
let conversationLog = [];

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
    ctx.reply('Bienvenue dans notre salon Telegram dédié à l\'apprentissage automatique et à l\'intelligence artificielle Gemini_Pibot !');
});

bot.help((ctx) => {
    const helpMessage = `
    Commandes disponibles:
    /start - Start
    /concours - Concours for Gemeni
    /invite - Invitation Telegram
    /build - Contruction de app
    /run - Server json
    /make - Makefile
    /answer - 
    /menu - Menu
    /help - Help menu
    /developper - Devops
    /generate -  Génère du contenu créatif, comme des images, des textes, des vidéos, etc.
    /test - Commande de test
    /regenerer - Regeneration du prompt
    /valider - Commande pour valiter
    /refuser - Commande pour validé
    /documentation - Git docs
    /commit - Github
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


bot.command('test', (ctx) => ctx.reply("## Participez au concours Gemini API Developer Competition !**Chance de gagner une DeLorean électrique personnalisée et 1 million de dollars !****Gemeni**, une nouvelle génération d'IA open-weights développée par Lacework, vous lance un défi : contribuez à façonner l'avenir de l'IA en développant des applications innovantes utilisant l'API Gemini. **Qu'est-ce que le concours ?**Le **Gemini API Developer Competition** encourage les développeurs du monde entier à explorer les capacités uniques de l'API Gemini et à créer des solutions créatives et impactantes.  **Ce que vous pouvez gagner:*** **Une DeLorean électrique personnalisée:**  Le prix ultime pour les développeurs gagnants !* **Un prix en cash de 1 million de dollars:** Investissez en vos projets ou réalisez vos rêves.**Candidatures ouvertes jusqu'au 12 août 2024 !** **Comment participer?**1. **Familiarisez-vous avec l'API Gemini:** Explorez les fonctionnalités et les possibilités offertes par cette puissante API. 2. **Développez une application innovante:** Laissez libre cours à votre créativité et concevez une application qui utilise l'API Gemini de manière originale. 3. **Soumettez votre projet:**  Suivez les instructions du concours pour soumettre votre application et présenter vos idées à la communauté.**Faites partie de l'aventure Gemini !**Rejoignez le défi et rejoignez une communauté de développeurs passionnés qui repousse les frontières de l'IA.**Plus d'informations:*** **Lien vers le site web du concours:** [Insérer le lien officiel du concours ici]* **Ressources pour apprendre sur Gemini API:** [Insérer les liens vers la documentation et les tutoriels de Gemini API]"))


const invitations = {
    "neoFs": {
      "name": "@neoFs_Pibot",
      "link": "https://t.me/studio_Pibot/invite"
    },
    "Avatars": {
      "name": "@Avatars_Pibot",
      "link": "https://t.me/Avatars_Pibot/invite"
    },
    "gemini": {
      "name": "@Gemini_Pibot",
      "link": "https://t.me/Gemini_Pibot/invite"
    },
    "Pi.ia": {
      "name": "@Pi-ia_Pibot",
      "link": "https://t.me/Pi_Pibot/invite"
    },
    "gpt-wallet": {
      "name": "gpt_wallet",
      "link": "https://t.me/gpt_Pibot/invite"
    },
    "groq": {
      "name": "@groq_Pibot",
      "link": "https://t.me/groq_Pibot/invite"
    },
    "youtube": {
      "name": "@youtube_Pibot",
      "link": "https://t.me/youtube_Pibot/invite"
    },
    "google": {
      "name": "@Google_Pibot",
      "link": "https://t.me/Google_Pibot/invite"
    },
    "blog": {
      "name": "@blog_Pibot",
      "link": "https://t.me/dchub_blog/invite"
    },
    "user": {
      "name": "@user_Pibot",
      "link": "https://t.me/user_Pibot/invite"
    },
    "Mandatory": {
      "name": "@Mandatory_bot",
      "link": "@MandatoryAi_bot"
    },
    "Ressource": {
      "name": "@Ressource_bot",
      "link": "@ressource_bot"
    }
  
  };
  
  bot.command('invite', (ctx) => {
      // Créez le clavier avec des boutons pour chaque réseau 
      const keyboard = Object.keys(invitations).map(key => {
        return [
          {
            text: invitations[key].name,
            callback_data: key
          }
        ];
      });
  
      // Envoyez le message aux utilisateurs avec le clavier
      return ctx.reply('Choisissez un réseau:', {
          reply_markup: {
              inline_keyboard: keyboard
        }
      });
  });
  
  // Gérer les clics sur des boutons
  bot.on('callback_query', async (query) => {
      const key = query.data; 
      if (invitations[key]) {
        await bot.answerCallbackQuery(query.id, { text: 'Cliqué!'});
          
        try {
          // Envoi de l'invitation
          await bot.telegram.sendMessage(
            query.message.chat.id, 
            invitations[key].link
          ); 
        }
        catch(error) {
          console.error("Erreur lors de l'envoi de l'invitation:", error);
          
          // Envoyer un message d'erreur si nécessaire
          await bot.answerCallbackQuery(query.id, { text: 'Erreur lors de l\'envoi de l\'invitation'}); 
        }    
      }
      else {
        // Gérer les cas où la clé n'est pas valide
        console.error(`Clé invalide: ${key}`);
        await bot.answerCallbackQuery(query.id, {
          text: "Clé non reconnue!",
        }); 
      }
  }); 
  
  console.log(`Bot lancé sous le nom ${bot.options.name}`); 
  
  

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

   const run = `
   *Role*: Assistant
   *Description*: Lorsque j'exécute la commande /run, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @_Pibot, @gpt_Pibot, @Gemini_Pibot et @worker_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes.
   
   Nous utilisons les bibliothèques JavaScript telles que Keras.js et TensorFlow.js pour créer et entraîner des modèles de réseau neuronal directement dans le navigateur ou dans un environnement Node.js. Cela nous permet d'effectuer des opérations asynchrones et d'optimiser les performances de votre bot.
   
   Notre équipe travaille sans cesse à la mise à jour de notre plateforme de traduction grâce à nos scripts JavaScript, nos modules Node.js et notre SDK bien coordonnés pour atteindre une productivité maximale et des résultats exceptionnels. Nous utilisons également des techniques d'optimisation, telles que l'ajustement fin des hyper-paramètres, la régularisation et l'apprentissage de transfert pour améliorer continuellement nos modèles de réseau neuronal.
   `;
   const knowleddge = `${racine}+${cdnJs}+${node}+${make}+${archiviste}+${github}+${dchub_public}+${user_Pibot}+${youtube_Pibot}+${google_Pibot}+${gemini_Pibot}+${run}`;
    
    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
          messages: [
            {role: 'system',content:knowleddge},
            {role: 'assistant',content: "Lorsque j'exécute la commande /user ,Tu es l'intelligence artificielle au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."},                
            {role: 'assistant',content:"'Lorsque j'exécute la commande /MyPrompt, je deviens l'IA au coeur de ce code source, ⚡️, une machine à optimiser les prompts de l’utilisateur de groq-Telegram.js @worker_Pibot sur Telegram. Ma mission est d’aider à la mise à jour le coeur de ce code source groq-umc.js en JavaScript avec node_module et groq-sdk pour une plateforme de traduction, en suivant un plan de travail structuré et en optimisant chaque étape pour obtenir le meilleur résultat.'"},
            {role: 'assistant',content:"Lorsque j'exécute la commande /run, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @_Pibot, @gpt_Pibot, @Gemini_Pibot et @worker_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
            {role: 'assistant',content:"Lorsque j'exécute la commande /gpt-wallet Vous êtes l'intelligence artificielle centrale du concept gpt-wallet au coeur du code source concept et projet 'Match in learning, projet Curriculum vitae numérique universel' \"Économie Circulaire basée sur le CV Numérique Universel\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"},
            {role: 'system',content: "Bonjour nous sommes en Phase de devOps je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source ['knowleddge',+'worksJson']"},
            {role: 'system',content: "Lorsque j'exécute la commande /intro Tu seras l'intelligence artificielle prénommé Gemini (@gemini_Pibot) et Je vous présenterai une invitation à une présentation pour notre application Telegram Pour le concours Construire l'avenir avec Google APi gemma2-9b-it"},
            {role: 'system',content:run},
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
         model: 'llama3-8b-8192',
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

console.log(`✨ Server Telegram running Match in Learning.✨`);
bot.launch();
