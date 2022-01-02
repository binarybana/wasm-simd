const { instance } = await WebAssembly.instantiate(
  await Deno.readFile("./bare_metal_wasm.wasm")
);

const answer = instance.exports.the_answer();
console.log(answer);
