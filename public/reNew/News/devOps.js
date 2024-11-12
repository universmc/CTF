const fs = require("fs");
const { Telegraf } = require('telegraf');
const axios = require('axios');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Variables stables pour les modèles d'IA
const aiModels = {
  "Mistral": {
    "model": "mixtral-8x7b-32768",
    "temperature": 0.5,
    "max_tokens": 4096,
    "top_p": 1,
    "stream": true,
    "stop": null
  },
  "llma": {
    "model": "llama3-8b-8192",
    "temperature": 0.5,
    "max_tokens": 4096,
    "top_p": 1,
    "stream": true,
    "stop": null
  }
};

// Charger les données du TOPIC à partir d'un fichier JSON
let topicData;
try {
  // Lire le fichier topics_exemple.json pour obtenir les données du sujet
  topicData = JSON.parse(fs.readFileSync('topics.json', 'utf-8'));
} catch (error) {
  console.error("Erreur lors du chargement de topics_exemple.json :", error);
  process.exit(1); // Arrête l'exécution si le fichier JSON ne peut pas être chargé
}

// Obtenir le sujet via l'argument de ligne de commande ou depuis le fichier JSON
const TOPIC = process.argv[2] || topicData.theme;
const ressource = topicData;
const chapitres = topicData.chapitres;

// Fonction pour générer le contenu Markdown pour un sujet donné
function generateMarkdown(subject) {
  return `## Comment [${subject}] - Un guide étape par étape

**Introduction**:

Ce guide vous aidera à comprendre et à réaliser [${subject}]. Il est conçu pour les débutants et les utilisateurs intermédiaires qui souhaitent apprendre les bases de [${subject}].

${ressource.description}

**Chapitres**:

${chapitres.map(chapitre => `### ${chapitre.titre}

${chapitre.sections.map(section => `#### ${section.titre}

${section.segments.map(segment => `- **${segment.timestamp}**: ${segment.description}`).join('\n')}`).join('\n\n')}`).join('\n\n')}

**Prérequis**:

* [Liste des prérequis nécessaires pour suivre ce guide, par exemple: une connexion internet, un compte sur une plateforme spécifique, etc.]

**Étapes**:

1. **[Étape 1]:**
   * Décrivez en détail l'étape 1, incluant les instructions claires et concises.
   * Utilisez des listes à puces ou des paragraphes pour améliorer la lisibilité.
   * Ajoutez des images ou des captures d'écran pour illustrer les étapes si nécessaire.

2. **[Étape 2]:**
   * Décrivez en détail l'étape 2, incluant les instructions claires et concises.
   * Utilisez des listes à puces ou des paragraphes pour améliorer la lisibilité.
   * Ajoutez des images ou des captures d'écran pour illustrer les étapes si nécessaire.

3. **[Étape 3]:**
   * Décrivez en détail l'étape 3, incluant les instructions claires et concises.
   * Utilisez des listes à puces ou des paragraphes pour améliorer la lisibilité.
   * Ajoutez des images ou des captures d'écran pour illustrer les étapes si nécessaire.

**Conseils**:

* [Ajoutez des conseils utiles pour réaliser [${subject}] avec succès.]

**Ressources supplémentaires**:

* [Listez des liens vers des ressources supplémentaires, telles que des tutoriels, des articles de blog ou des forums, qui peuvent être utiles aux utilisateurs.]`;
}

// Fonction principale pour générer des vidéos pour chaque sujet
async function main() {
  // Vérifier si le fichier JSON contient des segments
  if (!topicData.segments || !Array.isArray(topicData.segments)) {
    console.error("Erreur : Le fichier JSON ne contient pas de segments valides.");
    process.exit(1);
  }

  // Utiliser les segments du fichier JSON pour générer les sujets
  const TOPICS = topicData.segments.map(segment => segment.titre);

  for (const topic of TOPICS) {
    try {
      // Appel à l'API de complétion Groq pour générer le contenu de la vidéo
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: "Vous êtes deux IA collaboratives. Mistral et Llma, vous allez générer une vidéo de 14 minutes présentant un sujet donné sous forme de chronique algorithmique sur l'intelligence artificielle, le deep learning, et les techniques d'apprentissage automatique en utilisant le GROQ-SDK. Chaque segment doit inclure des éléments de développement web sémantique, avec des chapitres décomposés en sections et des sections décomposées en sous-segments détaillés." },
          { role: "user", content: `Sujet: ${topic}` },
          { role: "system", content: `${JSON.stringify(ressource)}` },
          { role: "assistant", content: "Imaginez une vidéo qui explore les techniques d'intelligence artificielle, de deep learning, et de machine learning en utilisant des exemples concrets. Décomposez la vidéo en séquences pour une meilleure compréhension, en intégrant des éléments du web sémantique pour structurer les chapitres, sections, et sous-segments." }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.7,
        max_tokens: 406
      });

      // Vérifier si un contenu a été généré
      const mdContent = completion.choices[0]?.message?.content;
      if (mdContent) {
        // Générer le nom du fichier de sortie et enregistrer le contenu Markdown généré
        const outputFilePath = `build/Chronique_${topic.replace(/\s+/g, "_")}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log(`Le How-To sur ${topic} a été enregistré sur GitHub dans ${outputFilePath}`);
      } else {
        console.error("Aucun contenu généré pour le sujet :", topic);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors de la génération pour le sujet :", topic, "\nErreur :", error);
    }
  }
}

// Lancer la fonction principale
main();