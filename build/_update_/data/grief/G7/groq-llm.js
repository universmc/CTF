const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Project plan object
const projectPlan = {
  projectName: "Développement du gantt-chart pour la plate-forme UMC (univers-mc.cloud)avec le SystemDream Groq ,",
  phases: [
    { 
      phaseId:"phase0",  
      description:"model gantt-chart",
      phaseName: "step_1: Initialisation",
      duration:"minimum",
      tasks: [
        titre="Initialisation",
        taskStep= [
          steps= [
            {
              "title": "Exploration de la plateforme",
              "description": "Naviguer sur l'interface utilisateur et découvrir toutes les fonctionnalités offertes par la plateforme. Consulter la documentation et les ressources en ligne pour obtenir une compréhension détaillée des capacités de la plateforme."
            },
          step1="'Initialisation:[rolesSystem(promptSystem)]",
          step2="'Initialisation:[roleAssistant(promptAssistant)]",
          step3="'Initialisation:[roleUser(promptUser)]",
        ]
      ]],
    }
  ],
};

// Function to display the project plan in a structured format
function displayProjectPlan(plan) {
  console.log(`Project Name: ${plan.projectName}`);
  plan.phases.forEach(phase => {
    console.log(`\nPhase: ${phase.phaseName} - Duration: ${phase.duration}`);
    phase.tasks.forEach(task => {
      console.log(`- ${task}`);
    });
  });
}
async function main() {

  // Contenus pour les différents rôles dans le dialogue
const systemContent = "Enquête en Cours et regulièrement mis à jours sur https://github.com/universmc/affaire_910.git"
const assistantContent = "Vous êtes Pi`role: assistant en vue des élections européennes ,name:'✨_pi'`une intelligence artificielle à haute potentialité générative. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés à Campagne électorale européenne de la Macronie parti Administrer aux comptes de campagne intitulé ensemble majorité présidentielle sous le sigle eux EMP (1378) anciennement Rennaissance(910) 'en marche(910)' telles que le G7 en Italy, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'enquête instruite par la cnccfp.fr Commission national  - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est de menée l'enquête grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement";


  // Create a chat completion using the Groq SDK
  await groq.chat.completions.create({
    // Required parameters
    messages: [
        {role: "system", content: systemContent },
        {role: "system", content: assistantContent },
        {role: "system", content: projectPlan },
         // Utilisation de l'entrée de l'utilisateur
        {role: "user", name:"systemDream",content:"phase0:initialisation de l'instance gantt-chart pour le projet singlePage (html,css,js,json)"},
        {role: "assistant",name:"✨_pi", content: "Création d'un guide complet étate par étape avec des exemples script sur la language de programmation groq"},
        {role: "system",name:"Groq", content: "message(phase_).response"},
        {role: "user", name:"systemDream",content:"le guide devrait être rédigé au format Markdown avec la fonction createAsciiFrame ASCII dev response"},
        {role: "system", name:"systemDream",content:"phase1:Conceptualisation"},
        {role: "assistant",name:"✨_pi", content: "init création d'une single page etape par etape au format index.html stylus.css scripts.js async-script_js.json"},
        {role: "system",name:"groq", content: "generation du script .response en HTML index.html"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase2:Configuration"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase3: entraînement modèle IA"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase4: Itération & Des scripts Frontend"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase5: Itération & Des scripts Backend"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase6: Test & Debugage"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase7: Validation & Documentation"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase8: Deployement system Version"},
     // {role: "assistant",name:"✨_pi", content: "init"},
     // {role: "user",name:"Groq", content: ""},
     // {role: "system", name:"systemDream",content:"phase8: Annonce affiliation contribution"},
     // {role: "assistant",name:"✨_pi", content: "init"},
    //  {role: "user",name:"Groq", content: "Elaboration du bilan bilan avec le model de Gant"},
    //  {role: "system", content: ProjectPlan },
    //  {role: "assistant",name:"✨_pi", content: "groq -L"},
    //  {role: "system", name:"systemDream",content:"création de la documentation du 'ProjectPlan' de la phase(0)"},
    ],
    
    // The language model which will generate the completion.
    model: "mixtral-8x7b-32768",
    // Optional parameters
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false,
  }).then((chatCompletion)=>{
    // Write the completion to a markdown file
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "G7-bilan_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("(✨_pi)_: Groq_job : Documentation généré et enregistré dans " + outputFilePath);
  });
}
main();