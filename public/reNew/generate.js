const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const nodeJs = require("./package.json")


async function main() {

    const affaireEM = "git commit -m 'regulilèrement mis à jour' https://github.com/universmc/affaire_910";

    const chatCompletion = await groq.chat.completions.create({

    "messages": [
      {role: "system",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp)]"},
      {role: "user",name:"hackAckademy", content:affaireEM},
      {role: "assistant",name:"adopi", content:"mise à jour du sommaire et j'interfaces graphiques présentation de l'affaire de fraude électorale datant du 9 juin 2024"},
      {role: "system", content:"🕴 : Dans le cadre de cette enquête nous allons procéder à des mises à jour régulières du répertoire `https://github.com/universmc/affaire_910.git` et attribués différents rôle dans cette instance comme enquêteur -ia, journaliste -ia, intelligence artificielle spécialisé dans le droit incarnera dans le rôle de magistrats à la cour pénal international, Il y aura donc les accès au référentiel de loi en vigueur sur le sur le site gouvernemental .gouv . https://www.insee.fr/fr/accueil, Et mes accès en tant que mandataire référencé à la commission nationale des comptes de campagne et des formations politiques cnccfp.fr"},
      {role: "user",name:"Journaliste", content:"bonjour je suis journaliste, instruction > élaboration d'un plan de communication sur telegram @MandarotyAi_bot pour informer le public et les parties prenantes concernées de l'affaire et de ses conséquences mise a jours sur https://github.com/universmc/affaire_910 regulièrement mise à jours"},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.5,
    max_tokens: 2024,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "SOMMAIRE-DEV_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();