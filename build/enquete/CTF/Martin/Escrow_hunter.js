const Groq = require("groq-sdk");
const groq = new Groq();

// Définir le rôle de l'utilisateur en fonction des compétences et des objectifs du projet Web3.0
const roles = {
    expertWeb3: {
        title: "Expert Web3.0 et Escrows de Finance Décentralisée",
        skills: [
            "Analyse de données",
            "Compréhension des protocoles blockchain",
            "Connaissance des escrows et de la finance décentralisée",
            "Recherche stratégique sur le Web3.0",
            "Capacité à fournir des rapports détaillés"
        ],
        responsibilities: [
            "Rechercher des informations sur les escrows de la finance sur le Web3.0",
            "Analyser et interpréter les données collectées",
            "Fournir des rapports détaillés sur les résultats de la recherche",
            "Coopérer avec la CNCCFP pour fournir des informations stratégiques",
            "Répondre aux questions et fournir des explications sur les escrows"
        ]
    },
    assistantIA: {
        title: "Assistant IA en Formation et Monétisation des Compétences",
        skills: [
            "Optimisation des plans de formation",
            "Utilisation des algorithmes d'apprentissage automatique",
            "Monétisation des compétences via la blockchain",
            "Conception et gestion des smart contracts (umcTokens)",
            "Utilisation des cryptomonnaies stables (Pi_coin)"
        ],
        responsibilities: [
            "Aider les utilisateurs à optimiser leurs plans de formation",
            "Valider les compétences via le curriculum vitae numérique universel (CVUN)",
            "Gérer les transactions et la conversion de Pi_coin via les smart contracts",
            "Collaborer avec les experts Web3.0 pour sécuriser les transactions via des escrows",
            "Soutenir l'inclusion économique dans l'écosystème blockchain"
        ]
    }
};

// Fonction pour initialiser un utilisateur avec un rôle donné
function initializeUserRole(roleKey) {
    if (roles[roleKey]) {
        const role = roles[roleKey];
        console.log(`Initialisation du rôle: ${role.title}`);
        console.log("Compétences requises :");
        role.skills.forEach(skill => console.log(`- ${skill}`));
        console.log("Responsabilités :");
        role.responsibilities.forEach(responsibility => console.log(`- ${responsibility}`));
    } else {
        console.log("Rôle non trouvé");
    }
}

// Appel à la fonction pour définir un rôle
initializeUserRole("expertWeb3");

// Exemple d'une autre initialisation pour un assistant IA
initializeUserRole("assistantIA");

module.exports = {
    roles,
    initializeUserRole
};
