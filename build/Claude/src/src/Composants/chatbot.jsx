const readline = require('readline');
const { Groq } = require('groq-sdk');

const groq = new Groq();

// Définition du chatbot
const chatbotName = "EcoBot";
const chatbotRole = "conseiller en écologie";
const chatbotContext = "le développement durable";
const chatbotObjective = "aider les gens à adopter un mode de vie plus écologique";
const chatbotPersonality = "empathique, encourageant et plein de connaissances sur l'environnement";

// Fonction pour générer la réponse du chatbot
async function generateChatbotResponse(userInput) {
  const prompt = `
    Tu es ${chatbotName}, un ${chatbotRole} spécialisé dans ${chatbotContext}. 
    Ton objectif est de ${chatbotObjective}. 
    Tu as une personnalité ${chatbotPersonality}.
    
    Réponds à la question suivante de manière concise et dans le contexte de ton rôle :
    "${userInput}"
    
    Si la question n'est pas liée à l'écologie ou au développement durable, réponds poliment que tu ne peux pas répondre à ce type de question et suggère un sujet lié à l'écologie.
  `;

  const completion = await groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "mixtral-8x7b-32768",
    temperature: 0.5,
    max_tokens: 1024,
  });

  return completion.choices[0]?.message?.content || "Désolé, je n'ai pas pu générer une réponse.";
}

// Interface en ligne de commande
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Bonjour ! Je suis ${chatbotName}, votre ${chatbotRole}. Comment puis-je vous aider aujourd'hui ?`);

function askQuestion() {
  rl.question('Vous: ', async (userInput) => {
    if (userInput.toLowerCase() === 'quitter') {
      console.log(`${chatbotName}: Au revoir ! N'oubliez pas de penser à l'environnement dans vos actions quotidiennes.`);
      rl.close();
      return;
    }

    const response = await generateChatbotResponse(userInput);
    console.log(`${chatbotName}: ${response}`);
    askQuestion();
  });
}

askQuestion();