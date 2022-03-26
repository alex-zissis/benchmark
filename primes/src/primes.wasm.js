/**
 * Bridge code
 */
globalThis.require = require;
globalThis.fs = require("fs");
globalThis.TextEncoder = require("util").TextEncoder;
globalThis.TextDecoder = require("util").TextDecoder;

globalThis.performance = {
	now() {
		const [sec, nsec] = process.hrtime();
		return sec * 1000 + nsec / 1000000;
	},
};

const crypto = require("crypto");
globalThis.crypto = {
	getRandomValues(b) {
		crypto.randomFillSync(b);
	},
};

require('../_helpers/wasm_exec.js');

/**
 * Package code
 */
const loader = require('@assemblyscript/loader');
const fs = require('fs');

(async () => {
	const go = new Go();
	const wasm = fs.readFileSync('./out/primes.wasm');
	const wasmModule = await loader.instantiateStreaming(wasm, go.importObject);
	go.run(wasmModule.instance);
})();
