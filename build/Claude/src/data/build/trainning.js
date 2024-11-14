// training.js
const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const natural = require('natural');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const fs = require("fs");

const subjects = [
  "how-to-build_react.composant_header",
  "how-to-build_react.composant_navBar",
];

async function generateMarkdown(subject, description, prerequisites, steps, tips) {
  // ... (Keep the same code from previous versions)
}

async function main(
) {
  for (const subject of subjects) {
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: "Phase 0: initialisation" },
        ],
        model: "gemma2-9b-it",
        temperature: 0.5,
        max_tokens: 4096,
      });
      
      const mdContent = chatCompletion.choices[0]?.message?.content;

      // Use the tokenizer to analyze the text structure
      const tokenizer = new natural.WordTokenizer();
      const tokenizedText = tokenizer.tokenize(mdContent);

      // Analyze the structure and extract relevant sections
const sections = {
        subject: subject,
        description: '',
        prerequisites: [],
        steps: [],
        tips: [],
      };

      for (const token of tokenizedText) {
        const trimmedTokenText = token.text.trim();
    
        if (
          trimmedTokenText.length === 1 &&
          ['=', '-', '#'].includes(trimmedTokenText) &&
          tokenizedText[tokenizedText.indexOf(token) + 1].text.trim().startsWith(' ')
        ) {
          const sectionContent = '';
          while (token) {
            sectionContent += token.toLowerCase() + ' ';
            token = token.next();
          }

          switch (token.text.trim()) {
            case 'description:':
              sections.description = sectionContent.trim();
              break;
            case 'prérequis:':
              sections.prerequisites = extractListItems(sectionContent);
              break;
            case 'étapes:':
              sections.steps = extractListItems(sectionContent);
              break;
            case 'conseils:':
              sections.tips = extractListItems(sectionContent);
              break;
          }
        }
      }
      
      // Generate Markdown content from the extracted structure
const markdownContent = generateMarkdown(sections.subject, sections.description, sections.prerequisites, sections.steps, sections.tips);

      // Create the output file path using `build/how-to_${subject}_timestamp.md`
      const outputFilePath = `build/how-to_${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        // Write Markdown content to the output file
        fs.writeFileSync(outputFilePath, mdContent);
        console.log(`Le How-To sur ${subject} a été enregistrée sur github dans ${outputFilePath}`); 
        } catch (error) {
        console.error(`Une erreur est survenue lors de la génération du How-To sur ${subject}: ${error.message}`);
        }
        }
        }
        function extractListItems(sectionContent) {
        return sectionContent
        .split('\n')
        .map((item) => item.trim())
        .filter((item) => item.startsWith('-'))
        .map((item) => item.replace(/^-/, ''));
        }
        main();