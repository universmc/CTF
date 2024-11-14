import fs from "fs";
// Importer "groq-sdk" comme un module CommonJS
const { Groq } = await import("groq-sdk");

const groq = new Groq();

// Fonction pour obtenir la liste des tâches depuis le fichier JSON
async function getTasks() {
  try {
    const data = await fs.promises.readFile('./tasks.json', 'utf-8');
    return JSON.parse(data) || [];
  } catch (error) {
    console.error("Erreur lors de la lecture des tâches :", error);
    return [];
  }
}

// Fonction pour ajouter une tâche à la liste de tâches
async function addTask(task) {
  try {
    const tasks = await getTasks();
    tasks.push(task);
    await fs.promises.writeFile('./tasks.json', JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Erreur lors de l'ajout d'une tâche :", error);
  }
}

// Fonction principale
async function principe(project, Model_ia, context, role, skills, task, process, characteristics, ImmediateActions, feedbackPrediction, date = new Date().toLocaleDateString('fr-FR')) {
  const tasks = await getTasks();

  const message = `
  ╔════════════════════════════════════════════════╔══════════════════╗
  ║✨            ${date}:            ✨║ 
  ║.   ${project} Template.response   .║
  ║.       Bienvenue ${Model_ia}      .║
  ╠══════════════════════════════════════════════════╝
  ║✨                                ✨║
  ║. ${context}                       .║
  ║.  ${skills} ${role}               .║
  ║.  ${process}                      .║
  ║.  ${task}                         .║
  ║.  ${characteristics}              .║
  ║.  ${ImmediateActions}             .║
  ║.  ${feedbackPrediction}           .║
  ║✨                                ✨║
  ╚═════════════════════════════════════════════════╝
  `;

  console.log(message);
  const response = {
    message,
  };

  return response;
}

// Appel de la fonction principale avec une tâche
(async () => {
  const principeResponse = await principe('Projet', 'Model_ia', 'Context', 'Role', 'Skills', 'Tasks', 'Process', 'Characteristics', 'ImmediateActions', 'feedbackPrediction');

  // Création de la completion avec groq-sdk
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "Phase 1: Initialisation de l'instance" },
        { role: "user", content: `"${principeResponse.message}"` },
        { role: "system", content: `Vous êtes une IA qui incarnera Martin temoin _X_ dans le cadre et contexte de questors.js de à la commission nationale des comptes de campagne et des Fraudes politique (https://cnccfp.fr). Ton ton rôle est donc de rechercher les escrows de la finance sur le Web3.0. Developpez le prompt Ultime, ## votre {contexte}, ## votre {rôle}, ## vos {compétences}, ## vos {tâches}, ## vos {fonctions}, ## votre {routine}, ## les {processus}, ## les {caractéristiques}, ## ## les {Actions Immédiates} et ## le {resultat}{feedback} attentdu:` }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.6,
      max_tokens: 4096,
    });

    const mdContent = completion.choices[0]?.message?.content;
    const outputFilePath = "Model-ia" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    await fs.promises.writeFile(outputFilePath, mdContent);
    console.log("Documentation du constructeur générée et enregistrée dans " + outputFilePath);
  } catch (error) {
    console.error("Erreur lors de la création de la complétion avec Groq-SDK :", error);
  }
})();