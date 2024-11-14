const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// URL de la boutique Élysée à analyser
const url = "https://boutique.elysee.fr";

// Charger le fichier JSON pour l'investigation de la politique du prix
const pricePolicyData = JSON.parse(fs.readFileSync("politique_du_prix.json", "utf8"));

// Charger les détails de l'enquêteur
const manifest = JSON.parse(`
{
    "title": "Investigation de la boutique de l'Élysée : Analyse des flux financiers",
    "description": "Enquête sur les liens financiers entre les entités politiques et la vente de produits sur la boutique Elysee pour identifier des pratiques de détournement de fonds publics.",
    "objectifs": [
      "Suivre les flux financiers sur le site https://boutique.elysee.fr pour les articles vendus.",
      "Établir la traçabilité de la TVA et des marges sur les produits.",
      "Examiner la structure des marques associées (Elysee X, etc.) et les possibles affiliations politiques."
    ],
    "legal_references": [
      { "code": "Code électoral", "articles": ["L53"], "description": "Répression des abus financiers et manipulation pour intérêts personnels." },
      { "code": "Code pénal", "articles": ["313"], "description": "Sanctions contre les escroqueries morales et la corruption." }
    ],
    "conclusion": "Présenter les éléments de preuve des marges excessives, de la gestion des fonds publics et des ventes illégitimes par des hauts fonctionnaires."
}
`);

// Fonction pour extraire les informations des produits de la boutique
async function extractProductData(url) {
    try {
        const response = await axios.get(url);
        const htmlContent = response.data;

        const $ = cheerio.load(htmlContent);
        let productData = [];

        // Extraction des informations sur les produits
        $('.product-item').each((index, element) => {
            const productName = $(element).find('.product-item-name').text().trim();
            const productPrice = $(element).find('.product-item-price').text().trim();
            const productDescription = $(element).find('.product-item-description').text().trim();

            productData.push({
                name: productName || "Nom du produit non trouvé",
                price: productPrice || "Prix non disponible",
                description: productDescription || "Description non disponible",
                tva: extractTVA(productDescription)
            });
        });

        return productData;
    } catch (error) {
        console.error("Erreur lors de l'extraction des informations des produits :", error);
        return [];
    }
}

// Fonction pour extraire la TVA à partir de la description du produit
function extractTVA(description) {
    const tvaMatch = description.match(/tva\s*(\d{1,2})%/i);
    return tvaMatch ? `${tvaMatch[1]}%` : "TVA non mentionnée";
}

// Modèle de question pour les témoins
function generateInvestigationQuestion(question, options) {
  return {
    question: question,
    options: options,
    answer_prompt: "Veuillez choisir une option pour continuer l'enquête."
  };
}

// Fonction pour générer la documentation de l'enquête
function generateDocumentation(questions, manifest, productData) {
    const content = `
# Documentation de l'investigation : Boutique Elysee.fr et entités politiques

## Objectifs de l'enquête
${manifest.objectifs.join("\n")}

## Références légales
${manifest.legal_references.map(ref => `${ref.code}, Articles : ${ref.articles.join(", ")}, Description : ${ref.description}`).join("\n")}

## Questions d'enquête et réponses
${questions.map(q => `### Question : ${q.question}\nOptions : ${q.options.join(", ")}\n`).join("\n")}

## Données des produits extraits
${productData.map(p => `- **Produit** : ${p.name}\n  - **Prix** : ${p.price}\n  - **Description** : ${p.description}\n  - **TVA** : ${p.tva}`).join("\n\n")}

## Détails supplémentaires
- Date de génération : ${new Date().toLocaleString()}
`;

    const outputFilePath = `Documentation_Investigation_${new Date().toISOString().replace(/[-:TZ]/g, "")}.md`;
    fs.writeFileSync(outputFilePath, content);
    console.log("Documentation d'investigation sauvegardée dans " + outputFilePath);
}

// Fonction principale pour exécuter l'analyse et générer le rapport
async function main() {
    // Phase 1 : Extraire les informations des produits
    const productData = await extractProductData(url);
    console.log("Données des produits extraites :", productData);

    // Phase 2 : Générer les questions d'enquête pour les témoins
    const investigationQuestions = [
        generateInvestigationQuestion("Quels produits de la boutique sont associés à des marges élevées ?", productData.map(p => p.name)),
        generateInvestigationQuestion("Quel est le pourcentage de TVA appliqué aux produits ?", ["5.5%", "10%", "20%", "Non spécifié"]),
        generateInvestigationQuestion("Les entités politiques suivantes sont-elles impliquées ?", pricePolicyData.investigation.entites_politique.liste_entites)
    ];

    // Phase 3 : Interagir avec l'IA pour générer un rapport complet de l'enquête
    const completion = await groq.chat.completions.create({
        messages: [
            { role: "assistant", content: "Phase d'enquête : analyse des flux financiers et traçabilité de la TVA sur boutique.elysee.fr." },
            { role: "system", content: JSON.stringify(manifest) },
            { role: "user", name: "investigateur", content: "Commencer l'analyse des marges et des prix pour les articles vendus par les hauts fonctionnaires." }
        ],
        model: "gemma2-9b-it",
        temperature: 0.7,
        max_tokens: 4096,
    }).then((chatCompletion) => {
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "Investigation_Report_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Rapport d'investigation généré et enregistré dans " + outputFilePath);
    });

    // Phase 4 : Générer la documentation finale
    generateDocumentation(investigationQuestions, manifest, productData);
}

main().catch(console.error);
