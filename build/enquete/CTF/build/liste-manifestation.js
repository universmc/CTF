const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();

// Fonction pour récupérer et traiter les flux en temps réel
async function fetchLiveManifestData() {
  // Cette partie sera liée aux flux de données API publiques ou caméras
  const villes = [
    { nom: "Paris", manifestants: 5000 },
    { nom: "Lyon", manifestants: 3000 },
    { nom: "Marseille", manifestants: 2000 },
    { nom: "Rennes", manifestants: 1000 }
  ];

  // Mettre à jour l'HTML avec les données récupérées
  generateHTML(villes);
}

// Fonction pour générer la page HTML
function generateHTML(villes) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Suivi des Manifestations</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; }
        h1 { text-align: center; }
        .ville { margin: 10px auto; padding: 10px; background-color: #fff; border-radius: 8px; width: 80%; }
        .manifestants { font-size: 1.5em; font-weight: bold; color: #FF5722; }
      </style>
    </head>
    <body>
      <h1>Suivi en Direct des Manifestations</h1>
      ${villes.map(ville => `
        <div class="ville">
          <h2>${ville.nom}</h2>
          <p>Nombre de manifestants : <span class="manifestants">${ville.manifestants}</span></p>
        </div>
      `).join('')}
      <script>
        // JS pour mettre à jour en temps réel (à développer selon l'API en temps réel)
      </script>
    </body>
    </html>
  `;

  // Écrire le fichier HTML
  fs.writeFileSync("suivi_manifestations.html", htmlContent);
  console.log("Page HTML générée : suivi_manifestations.html");
}

// Main pour orchestrer les étapes
async function main() {
  console.log("Initialisation du suivi des manifestations...");
  await fetchLiveManifestData();
  console.log("Suivi terminé.");
}

main();
