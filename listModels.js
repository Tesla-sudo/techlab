require('dotenv').config(); // Load environment variables from .env file
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function main() {
  const apiKey = process.env.GEMINI_API_KEY; // Ensure this matches your .env variable name

  if (!apiKey) {
    console.error("GEMINI_API_KEY not found in .env file. Please set it.");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  console.log('Fetching available models...');
  try {
    const { models } = await genAI.listModels();
    console.log('Available models:');
    for (const model of models) {
      console.log(`- ID: ${model.name}`);
      console.log(`  Description: ${model.description}`);
      console.log(`  Input Token Limit: ${model.inputTokenLimit}`);
      console.log(`  Output Token Limit: ${model.outputTokenLimit}`);
      console.log(`  Supported Methods: ${model.supportedGenerationMethods.join(', ')}`);
      console.log('---');
    }
  } catch (error) {
    console.error('Error listing models:', error);
    console.error('Please check your GEMINI_API_KEY and network connection.');
  }
}

main();