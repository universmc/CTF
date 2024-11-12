const fs = require('fs');
const OpenAI = require('openai');
const axios = require('axios');
const Groq = require('groq-sdk');
const inquirer = require('inquirer');
const openai = new OpenAI();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  // Demande d'informations à l'utilisateur
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'subject',
      message: 'Quel est le sujet du projet (ex: GPT-Wallet, Algorithmique, etc.) ?',
      default: 'HOWTO_IA_GENERATOR.js',
    },
    {
      type: 'list',
      name: 'environment',
      message: 'Choisissez un environnement:',
      choices: ['development', 'staging', 'production'],
    },
    {
      type: 'list',
      name: 'algorithm',
      message: 'Sélectionnez un algorithme à utiliser:',
      choices: ['Frontend Generator', 'Backend Generator', 'Fullstack', 'API Rest'],
    }
  ]);

  console.log(`Démarrage de la génération pour le sujet : ${answers.subject}`);
  await generateWebPage(answers.subject, answers);
}

async function generateWebPage(subject, answers) {
  console.log("Démarrage de la génération de la page Web pour le sujet : ", subject);

  // Boucle 1: Génération du contenu basé sur le sujet/thème
  const content = await generateContent(subject);
  
  // Boucle 2: Génération de la structure HTML/CSS/JS et de l'image
  await generateStructure(content, subject, answers);

  console.log(`Page Web générée avec succès pour le sujet : ${subject}`);
}

// Génération du contenu basé sur le sujet/thème
async function generateContent(subject) {
  console.log("Génération du contenu pour le sujet :", subject);

  // Générer le texte via un modèle de langage (OpenAI/Groq)
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      { role: "system", name: "Pi.ai", content: `PI devOps ${subject} :` },
      { role: "assistant", name: "gemini", content: `Gemini devOps : ${subject}` },
      { role: "user", name: "userInput", content: `GPT scrap Telegram $userIpunt 'https://t.me/+bFu6G-ETw7diNjk0'` },
      { role: "assistant", name: "GPT", content: ` : ${subject}` },
      { role: "user", name: "Mickael", content: ` : ${subject}` },
    ],
    model: "gemma2-9b-it",
    temperature: 0.7,
    max_tokens: 2048
  });

  const contentText = chatCompletion.choices[0]?.message?.content || '';
  
  // Générer une image pour le sujet via OpenAI DALL-E
  const imageUrl = await generateImage(subject);

  return { text: contentText, image: imageUrl };
}

// Générer une image via OpenAI DALL-E
async function generateImage(subject) {
  console.log("Génération d'image pour le sujet :", subject);

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Une image descriptive pour le sujet : ${subject}`,
    n: 1,
    size: "1024x1024"
  });

  const imageUrl = response.data[0].url;
  const imageFile = `src/img/image_${subject}_${new Date().toISOString()}.webp`;
  const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  fs.writeFileSync(imageFile, imageResponse.data);

  console.log(`Image générée et sauvegardée sous ${imageFile}`);
  return imageFile;
}

// Génération de la structure HTML/CSS/JS et Pipeline JSON
async function generateStructure(content, subject, answers) {
  console.log("Génération de la structure index.HTML, style.css et pipeline.JS, pipeline.JSON");

  // Générer HTML
  const html = generateHTML(content, subject);
  const htmlFile = `src/html/page_${subject}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.html`;
  fs.writeFileSync(htmlFile, html);
  console.log(`HTML sauvegardé dans ${htmlFile}`);

  // Générer CSS
  const css = generateCSS();
  const cssFile = `src/css/style_${subject}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.css`;
  fs.writeFileSync(cssFile, css);
  console.log(`CSS sauvegardé dans ${cssFile}`);

  // Générer JS pour le sommaire
  const js = generateJavaScript(subject);
  const jsFile = `src/js/pipeline_${subject}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.js`;
  fs.writeFileSync(jsFile, js);
  console.log(`JavaScript sauvegardé dans ${jsFile}`);

  // Générer JSON pour pipeline de données
  const json = generatePipelineJSON(subject);
  const jsonFile = `src/json/pipeline_${subject}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.json`;
  fs.writeFileSync(jsonFile, json);
  console.log(`Pipeline JSON sauvegardé dans ${jsonFile}`);
}

// Générateur HTML
function generateHTML(content, subject) {
  return `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page sur ${subject}</title>
    <link href="style_${subject}.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <h1 class="title">${subject}</h1>
      <div class="image">
        <img src="${content.image}" alt="Image descriptive de ${subject}">
      </div>
      <div class="content">
        ${content.text}
      </div>
      <div id="sommaire"></div>
      <div id="content"></div>
    </div>
    <script src="pipeline_${subject}.js"></script>
  </body>
  </html>
  `;
}

// Générateur CSS
function generateCSS() {
  return `
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  }
  .title {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 20px;
  }
  .image {
    margin-bottom: 20px;
    text-align: center;
  }
  .image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .content {
    font-size: 1.2em;
    line-height: 1.6;
    color: #555;
  }
  .sommaire-link {
    display: block;
    margin-bottom: 10px;
    color: #0056b3;
    text-decoration: none;
  }
  `;
}

// Générateur JavaScript (Sommaire dynamique avec pipeline JSON)
function generateJavaScript(subject) {
  return `
  document.addEventListener('DOMContentLoaded', function() {
    fetch('src/json/pipeline_${subject}.json')
        .then(response => response.json())
        .then(cours => {
            const sommaire = document.getElementById('sommaire');
            const contenuCours = document.getElementById('content');

            cours.forEach((section, index) => {
                let sommaireItem = document.createElement('a');
                sommaireItem.href = \`#section\${index}\`;
                sommaireItem.textContent = section.titre;
                sommaireItem.classList.add('sommaire-link');
                sommaire.appendChild(sommaireItem);

                let sectionDiv = document.createElement('div');
                sectionDiv.id = \`section\${index}\`;
                sectionDiv.classList.add('section');

                let titreSection = document.createElement('h2');
                titreSection.textContent = section.titre;
                sectionDiv.appendChild(titreSection);

                section.sousSections.forEach(sousSection => {
                    let sousSectionDiv = document.createElement('div');
                    sousSectionDiv.classList.add('sous-section');

                    let sousTitre = document.createElement('h3');
                    sousTitre.textContent = sousSection.sousTitre;
                    sousSectionDiv.appendChild(sousTitre);

                    if (sousSection.contenuMarkdown) {
                        fetch(sousSection.contenuMarkdown)
                            .then(responseMd => responseMd.text())
                            .then(markdown => {
                                let contenu = document.createElement('div');
                                contenu.className = 'markdown-contenu';
                                contenu.innerHTML = marked.parse(markdown);
                                sousSectionDiv.appendChild(contenu);
                            });
                    } else {
                        let contenu = document.createElement('p');
                        contenu.innerHTML = sousSection.contenu;
                        sousSectionDiv.appendChild(contenu);
                    }

                    sectionDiv.appendChild(sousSectionDiv);
                });

                contenuCours.appendChild(sectionDiv);
            });
        });
  });
  `;
}

// Générateur JSON pour pipeline
function generatePipelineJSON(subject) {
  const pipeline = [
    {
      titre: "Introduction",
      sousSections: [
        { sousTitre: "Contexte", contenu: "Description du contexte." },
        { sousTitre: "Objectifs", contenuMarkdown: "src/md/objectif.md" }
      ]
    },
    {
      titre: "Développement",
      sousSections: [
        { sousTitre: "Étape 1", contenuMarkdown: "src/md/etape1.md" },
        { sousTitre: "Étape 2", contenuMarkdown: "src/md/etape2.md" }
      ]
    }
  ];

  return JSON.stringify(pipeline, null, 2);
}

main();
