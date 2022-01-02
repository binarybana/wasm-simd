import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
const { instance } = await WebAssembly.instantiate(
  await Deno.readFile("./bare_metal_wasm.wasm")
);

const answer = instance.exports.the_answer();
console.log(answer);

function handler(_req) {
  return new Response("Hello, World. WASM SIMD computation = " + instance.exports.the_answer());
}

console.log("Now listening on http://localhost:8000");
serve(handler);