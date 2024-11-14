const { Telegraf } = require('telegraf');
const fs = require("fs");
const axios = require('axios');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const subject = process.argv[2] || 'HowTo_system-React'; //  Obtenir le sujet via l'argument de ligne de commande

function generateMarkdown(subject) {
  return `## Comment [${subject}] - Un guide étape par étape\n\n**Introduction**:\n\nCe guide vous aidera à comprendre et à réaliser [${subject}]. Il est conçu pour les débutants et les utilisateurs intermédiaires qui souhaitent apprendre les bases de [${subject}].\n\n${subject.description}\n\n**Prérequis**:\n\n* [Liste des prérequis nécessaires pour suivre ce guide, par exemple: une connexion internet, un compte sur une plateforme spécifique, etc.]\n\n**Étapes**:\n\n1. **[Étape 1]:**\n   * Décrivez en détail l'étape 1, incluant les instructions claires et concises.\n   * Utilisez des listes à puces ou des paragraphes pour améliorer la lisibilité.\n   * Ajoutez des images ou des captures d'écran pour illustrer les étapes si nécessaire.\n\n2. **[Étape 2]:**\n   * Décrivez en détail l'étape 2, incluant les instructions claires et concises.\n   * Utilisez des listes à puces ou des paragraphes pour améliorer la lisibilité.\n   * Ajoutez des images ou des captures d'écran pour illustrer les étapes si nécessaire.\n\n3. **[Étape 3]:**\n   * Décrivez en détail l'étape 3, incluant les instructions claires et concises.\n   * Utilisez des listes à puces ou des paragraphes pour améliorer la lisibilité.\n   * Ajoutez des images ou des captures d'écran pour illustrer les étapes si nécessaire.\n\n**Conseils:**\n\n* [Ajoutez des conseils utiles pour réaliser [${subject}] avec succès.]\n\n**Ressources supplémentaires:**\n\n* [Listez des liens vers des ressources supplémentaires, telles que des tutoriels, des articles de blog ou des forums, qui peuvent être utiles aux utilisateurs.]`;
}

const subjects = [
    "how-to-build_react._header",
    "how-to-build_react._footer",
    "how-to-build_react._mainContent",
    "how-to-build_react._bouton",
    "how-to-build_react._pageWeb",
    //  "how-to-build_react._navBar",
  //  "how-to-build_react._modale-overlay",
  //  "how-to-build_react._modale-aside",
  //  "how-to-build_react._formulaire",
  //  "how-to-build_react._Carrousel",
  //  "how-to-build_react._Card",
  // Ajoutez autant de sujets que vous le souhaitez
];

async function main() {
  for (const subject of subjects) {
    try {
      const completion = await groq.chat.completions.create({
      messages: [
                  {role: "system", content:"Phase 0: initialisation"},
                  {role: "system", content:`${subjects}`},
                  {
                    "role": "assistant",
                    "content": "Imaginez un system Howto ReactJs sur chaqu'un des `Subjects` Un guide étape par étape pour la generation de composants et la composition de page web \n**Introduction**:\n Howto system react \n\n**Introduction**:\n\nCe guide vous aidera à comprendre et à réaliser [${subject}]. Il est conçu pour les débutants et les utilisateurs intermédiaires qui souhaitent apprendre les bases de [${subject}].\n\n${subject.description}\n\n**Prérequis**:\n\n* [Liste des prérequis nécessaires pour suivre ce guide, par exemple: une connexion internet, un compte sur une plateforme spécifique, etc.]\n\n**Étapes**:\n\n1. **[Étape 1]:**\n   * Décrivez en détail l'étape 1, incluant les instructions claires et concises.\n   * Utilisez des listes à puces ou des paragraphes pour améliorer la lisibilité.\n   * Ajoutez des images ou des captures d'écran pour illustrer les étapes si nécessaire.\n\n2. **[Étape 2]:**\n   * Décrivez en détail l'étape 2, incluant les instructions claires et concises.\n   * Utilisez des listes à puces ou des paragraphes pour améliorer la lisibilité.\n   * Ajoutez des images ou des captures d'écran pour illustrer les étapes si nécessaire.\n\n3. **[Étape 3]:**\n   * Décrivez en détail l'étape 3, incluant les instructions claires et concises.\n   * Utilisez des listes à puces ou des paragraphes pour améliorer la lisibilité.\n   * Ajoutez des images ou des captures d'écran pour illustrer les étapes si nécessaire.\n\n**Conseils:**\n\n* [Ajoutez des conseils utiles pour réaliser [${subject}] avec succès.]\n\n**Ressources supplémentaires:**\n\n* [Listez des liens vers des ressources supplémentaires, telles que des tutoriels, des articles de blog ou des forums, qui peuvent être utiles aux utilisateurs.]'arbre de la connaissance prét à optimisé le HowTo React, l'intelligence artificielle centrale au coeur de la plateforme -ia dédier à l'apprentissage automatique, tu rédigeras des formations sous forme de guide avec les -ia \" system Howto react\" au format Markdown. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques et les actions imédiates rechétchées :"
                  },

      ],
      model: "gemma2-9b-it", //
      temperature: 0.5,
      max_tokens: 4096,
    }).then((chatCompletion) => {
      const mdContent = chatCompletion.choices[0]?.message?.content;
      const outputFilePath = `build/how-to_${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
fs.writeFileSync(outputFilePath, mdContent);
      console.log(`Le How-To sur ${subject} a été enregistrée sur github dans ${outputFilePath}`);       
    });
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
  }
}
}
main(); 