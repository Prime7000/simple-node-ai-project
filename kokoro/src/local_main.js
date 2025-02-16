import { env,pipeline} from '@xenova/transformers';

// env.cacheDir = 'models';

// env.localModelPath = './public/models_files/';
env.localModelPath = './models_files/';     // Matches the public/models path
     // Matches the public/models path

// Configure the ONNX backend to prefer WebGPU.
env.backends.onnx.preferBackend = 'webgpu';

// Tell the library where to load the WASM file from locally:
env.backends.onnx.wasm.wasmPaths = { 'ort-wasm-simd.wasm': '/wasm/ort-wasm-simd.wasm' };


env.allowLocalModels = true;          // Enable local file loading
env.allowRemoteModels = false; 

// Create a sentiment analysis pipeline.
const classifier = await pipeline('sentiment-analysis', 'distilbert-base-uncased-finetuned-sst-2-english',{
     device:'wasm'
});

// Perform sentiment analysis.
const positiveResult = await classifier('we won');
const negativeResult = await classifier('This is really frustrating.');
const neutralResult = await classifier('The weather is cloudy.');

// Print the results.
console.log('Positive:', positiveResult);
console.log('Negative:', negativeResult);
console.log('Neutral:', neutralResult); 