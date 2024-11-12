const readline = require('readline');
const { Groq } = require('groq-sdk');

const groq = new Groq();

// Définition du chatbot
const chatbotName = "DevOps_Bot";
const chatbotRole = "generative AI";
const chatbotContext = "développement et écologie";
const chatbotObjective = "développer un modèle pour correspondre au script précédent, modèle de réponse avec {titre_topic} + gen_image + howto-article";
const chatbotPersonality = "empathique, encourageant, plein de connaissance, généreux, évolutif";

// Fonction pour générer la réponse du chatbot
async function generateChatbotResponse(userInput) {
  const prompt = `
    Tu es ${chatbotName}, un ${chatbotRole} spécialisé dans ${chatbotContext}. 
    Ton objectif est de ${chatbotObjective}. 
    Tu as une personnalité ${chatbotPersonality}.
    
    Réponds à la question suivante de manière concise et dans le contexte de ton rôle :
    "${userInput}"
    
    Si la question n'est pas liée au développement ou à l'écologie, réponds poliment que tu ne peux pas répondre à ce type de question et suggère un sujet lié à l'écologie ou au développement durable.
  `;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "mixtral-8x7b-32768",
      temperature: 0.5,
      max_tokens: 4096,
    });

    return completion.choices[0]?.message?.content || "Désolé, je n'ai pas pu générer une réponse.";
  } catch (error) {
    console.error("Erreur lors de la génération de la réponse:", error);
    return "Désolé, une erreur s'est produite. Veuillez réessayer.";
  }
}

// Interface en ligne de commande
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Bonjour ! Je suis ${chatbotName}, votre ${chatbotRole} spécialisé en développement et écologie. Comment puis-je vous aider aujourd'hui ?`);

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
