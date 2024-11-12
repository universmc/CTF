import fs from "fs";
// Importez "groq-sdk" comme un module CommonJS
const { Groq } = await import("groq-sdk");

const groq = new Groq();

// Fonction pour ajouter une tâche à la liste de tâches
function addTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  fs.writeFileSync('./tasks.json', JSON.stringify(tasks));
}

// Fonction principale
function principe(project,Model_ia,context,role,skills,task,process,characteristics,ImmediateActions,feedbackPrediction,date = new Date().toLocaleDateString('fr-FR')) {
  function getTasks() {
    const data = fs.readFileSync('./tasks.json');
    const tasks = JSON.parse(data);
    return tasks || [];
    }
    const tasks = getTasks();

    const Project =`"${project}+devops"`

  const message = `
  ╔════════════════════════════════════╗\n
  ║✨            ${date}:            ✨║ 
  ║.   ${project} Template.response   .║\n
  ║.       Bienvenue ${Model_ia}      .║\n
  ╠════════════════════════════════════╣\n
  ║✨                                ✨║\n   
  ║. ${context}                       .║\n
  ║.  ${skills} ${role}               .║\n
  ║.  ${process}                      .║\n
  ║.  ${task}                         .║\n
  ║.  ${characteristics}              .║\n
  ║.  ${ImmediateActions}             .║\n
  ║.  ${feedbackPrediction}           .║\n
  ║✨                                ✨║\n
  ╚════════════════════════════════════╝
  `;

  console.log(message);
  const response = {
    message,
  };

  return response;
}

// Appel de la fonction principale avec une tâche
const principeResponse = principe('Projet','Model_ia','Context','Role','Skills','Tasks','Process','Characteristics','ImmediateActions','feedbackPrediction' );


// Création de la completion avec groq-sdk
const completion = await groq.chat.completions.create({
  messages: [
    {role: "system", content:"Phase 1: Initialisation de l'instance"},
    {role: "user", content: `"${principeResponse.message}"`},
    {role: "system", content:`Vous êtes une IA qui incarnera le rôle d'enquêteur IA dans le cadre de à la commission nationale des comptes de campagne. Ton ton rôle est donc de rechercher les escrows de la finance sur le Web3.0. Developpez le prompt Ultime, ## votre {contexte}, ## votre {rôle}, ## vos {compétences}, ## vos {tâches}, ## vos {fontions}, ## votre {routine}, ## les {processus}, ## les {caractéristiques}, ## ## les {Actions Immédiates} et ## le {resultat}{feedback} attentdu:`},
  ],
  model: "mixtral-8x7b-32768",
  temperature: 0.6,
  max_tokens: 4096,
}).then((chatCompletion) => {
  const mdContent = chatCompletion.choices[0]?.message?.content;
  const outputFilePath = "Model-ia" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
  fs.writeFileSync(outputFilePath, mdContent);
  console.log("Documentation du constructeur générée et enregistrée dans " + outputFilePath);
});