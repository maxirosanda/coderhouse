import { serve } from "https://deno.land/std@0.100.0/http/server.ts";

const server = serve({port: 5000});
console.log("running");

for await (const req of server) {
    const cleanUrl = req.url.replace(/\//g, '');
    let frase = new URLSearchParams(cleanUrl).get('frase');

    if(frase) {
        req.respond({
            status: 200,
            headers: new Headers({"content-type": "text/html; charset=utf-8"}),
            body: frase.split(' ').reverse().join(' ')
        });
    }
}