import { env,pipeline } from '@xenova/transformers';

env.cacheDir = 'models';

// Create a sentiment analysis pipeline.
const classifier = await pipeline('sentiment-analysis', 'distilbert/distilbert-base-uncased-finetuned-sst-2-english');

// Perform sentiment analysis.
const positiveResult = await classifier('I love using transformers.js!');
const negativeResult = await classifier('This is really frustrating.');
const neutralResult = await classifier('The weather is cloudy.');

// Print the results.
console.log('Positive:', positiveResult);
console.log('Negative:', negativeResult);
console.log('Neutral:', neutralResult); 