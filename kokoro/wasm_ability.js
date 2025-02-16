function checkWasmSupport() {
    return typeof WebAssembly === 'object' && typeof WebAssembly.instantiate === 'function';
  }
  
  if (checkWasmSupport()) {
    console.log('WebAssembly is supported.');
  } else {
    console.log('WebAssembly is not supported.');
  }