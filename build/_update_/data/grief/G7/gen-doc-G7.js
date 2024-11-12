const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  //

  const systemContent = "Enquête en Cours et regulièrement mis à jours sur https://github.com/universmc/affaire_910.git"
  const assistantContent = "Vous êtes Pi`role: assistant en vue des élections européennes ,name:'✨_pi'`une intelligence artificielle à haute potentialité générative. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés à Campagne électorale européenne de la Macronie parti Administrer aux comptes de campagne intitulé ensemble majorité présidentielle sous le sigle eux EMP (1378) anciennement Rennaissance(910) 'en marche(910)' telles que le G7 en Italy, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'enquête instruite par la cnccfp.fr Commission national  - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est de menée l'enquête grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement";
  
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
        
      {role: "system",name:"[🌌_system", content:"Enquête en Cours et regulièrement mis à jours sur https://github.com/universmc/affaire_910.git"},
      {role: "system",name:"[🌌_system", content:"Bilan de G7 : url (https://www.consilium.europa.eu/fr/meetings/international-summit/2024/06/13-15/) "},
      {role: "assistant",name:"adoPi", content: "Vous êtes Pi.ia `role: assistant en vue des élections européennes ,name:'✨_pi'`une intelligence artificielle à haute potentialité générative. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés à Campagne électorale européenne de la Macronie parti Administrer aux comptes de campagne intitulé ensemble majorité présidentielle sous le sigle eux EMP (1378) anciennement Rennaissance(910) 'en marche(910)' telles que le G7 en Italy, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'enquête instruite par la cnccfp.fr Commission national  - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est de menée l'enquête grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement]" },
      {role: "system",name:"[🌌_system", content:"extraire, par méthode de scrapping des données du G7 en Italie sur le https://archive.org et le site web suivant : url (https://www.consilium.europa.eu/fr/meetings/international-summit/2024/06/13-15/)"},
      {role: "assistant",name:"adoPi", content: "rédiger un rapport complet du G7 en Italie il sera transmis au juge des élections européennes" },
      
    ],
    model: "llama3-8b-8192",
    temperature: 0.6,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "G7_EMP-🤖_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();