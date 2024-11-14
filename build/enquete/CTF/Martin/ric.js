// Importation des modules nécessaires
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import { Groq } from 'groq-sdk';
import OpenAI from 'openai';

// Initialisation des instances requises
const app = express();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const openai = new OpenAI();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Liste des citoyens (base de données fictive pour test)
let citoyens = [
  { id: 1, nom: 'Jean Dupont', email: 'jean.dupont@example.com' },
  { id: 2, nom: 'Marie Martin', email: 'marie.martin@example.com' },
  { id: 3, nom: 'Pierre Dubois', email: 'pierre.dubois@example.com' }
];

// Phase 1 : Initialisation du serveur et affichage du formulaire de proposition RIC
app.get('/formulaire-initiative', (req, res) => {
  res.send(`
    <form action="/soumettre-initiative" method="post">
      <h1>Proposition de Référendum d'Initiative Citoyenne (RIC)</h1>
      <label for="titre">Titre de l'initiative :</label>
      <input type="text" id="titre" name="titre" required><br><br>
      <label for="description">Description :</label><br>
      <textarea id="description" name="description" rows="4" cols="50" required></textarea><br><br>
      <label for="auteur">Auteur (votre nom) :</label>
      <input type="text" id="auteur" name="auteur" required><br><br>
      <button type="submit">Soumettre l'initiative</button>
    </form>
  `);
});

// Phase 2 : Soumission des initiatives citoyennes (ajout au fichier JSON)
app.post('/soumettre-initiative', (req, res) => {
  const { titre, description, auteur } = req.body;
  const initiative = {
    id: crypto.randomUUID(),
    titre,
    description,
    auteur,
    soutiens: 0,
    statut: 'En cours de validation'
  };

  const initiativesPath = './initiatives.json';
  let initiatives = [];
  if (fs.existsSync(initiativesPath)) {
    initiatives = JSON.parse(fs.readFileSync(initiativesPath));
  }
  initiatives.push(initiative);
  fs.writeFileSync(initiativesPath, JSON.stringify(initiatives, null, 2));

  res.send(`<h2>Merci, votre initiative a été soumise avec succès.</h2><a href="/">Retour à l'accueil</a>`);
});

// Phase 3 : Affichage des initiatives RIC
app.get('/initiatives', (req, res) => {
  const initiativesPath = './initiatives.json';
  let initiatives = [];
  if (fs.existsSync(initiativesPath)) {
    initiatives = JSON.parse(fs.readFileSync(initiativesPath));
  }

  let html = '<h1>Liste des initiatives RIC</h1><ul>';
  initiatives.forEach(initiative => {
    html += `<li>
      <strong>${initiative.titre}</strong> par ${initiative.auteur}<br>
      ${initiative.description}<br>
      Soutiens : ${initiative.soutiens}<br>
      <form action="/soutenir-initiative" method="post">
        <input type="hidden" name="id" value="${initiative.id}">
        <button type="submit">Soutenir cette initiative</button>
      </form>
    </li><br>`;
  });
  html += '</ul><a href="/">Retour à accueil</a>';

  res.send(html);
});

// Phase 4 : Soutien aux initiatives RIC
app.post('/soutenir-initiative', (req, res) => {
  const { id } = req.body;
  const initiativesPath = './initiatives.json';
  let initiatives = [];
  if (fs.existsSync(initiativesPath)) {
    initiatives = JSON.parse(fs.readFileSync(initiativesPath));
  }

  const initiative = initiatives.find(initiative => initiative.id === id);
  if (initiative) {
    initiative.soutiens += 1;
    fs.writeFileSync(initiativesPath, JSON.stringify(initiatives, null, 2));
    res.send(`<h2>Merci pour votre soutien !</h2><a href="/initiatives">Retour à la liste des initiatives</a>`);
  } else {
    res.status(404).send('Initiative non trouvée');
  }
});

// Phase 5 : Génération des composants React via Groq
const components = ["Next_Js", "header_react", "mainContent_react", "formulaire_react"];

async function generateComponents() {
  for (const componentReact of components) {
    try {
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "user", content: `Créez le code source pour un composant React : ${componentReact}` },
          { role: "system", content: "Le composant doit être exporté par défaut et prêt à être utilisé dans une application React existante." }
        ],
        model: "gemma2-9b-it",
        temperature: 0.6,
        max_tokens: 4096
      });
      const mdContent = completion.choices[0]?.message?.content;
      const outputFilePath = `./Composants/${componentReact}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".jsx";
      fs.writeFileSync(outputFilePath, mdContent);
      console.log(`Composant React ${componentReact} généré et enregistré dans ${outputFilePath}`);
    } catch (error) {
      console.error("Erreur lors de la génération du composant React :", error);
    }
  }
}

// Phase 6 : Génération de la page de présentation via OpenAI
async function generateWebPage(subject) {
  console.log("Démarrage de la génération de la page Web pour le sujet : ", subject);

  // Générer le contenu basé sur le sujet/thème
  const content = await generateContent(subject);
  // Générer la structure HTML/CSS/JS et de l'image
  await generateStructure(content, subject);

  console.log(`Page Web générée avec succès pour le sujet : ${subject}`);
}

async function generateContent(subject) {
  console.log("Génération du contenu pour le sujet :", subject);
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      { role: "user", content: `Génère un contenu détaillé pour une page Web sur le sujet : ${subject}` }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.7,
    max_tokens: 2048
  });

  const contentText = chatCompletion.choices[0]?.message?.content || '';
  const imageUrl = await generateImage(subject);
  return { text: contentText, image: imageUrl };
}

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
  generateComponents();
});