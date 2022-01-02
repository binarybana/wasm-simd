const { instance } = await WebAssembly.instantiate(
  await Deno.readFile("./bare_metal_wasm.wasm")
);

const answer = instance.exports.the_answer();
console.log(answer);

function handler(_req: Request): Response {
  return new Response("Hello, World" + instance.exports.the_answer());
}