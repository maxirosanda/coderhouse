// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();


app.handle('/', async (req) => {
    const cleanUrl = req.url.replace(/\//g, '');
    let frase = new URLSearchParams(cleanUrl).get('frase');

    if(frase) {
        await req.respond({
            status: 200,
            headers: new Headers({
              "content-type": "text/html; charset=UTF-8",
            }),
            body: ReactDOMServer.renderToString(
                <html>
                  <head>
                    <meta charSet="utf-8" />
                    <title>servest</title>
                  </head>
                  <body>
                    {frase.split(' ').reverse().join(' ')}
                  </body>
                </html>
              ),
          });
    }
})


app.listen({port: 5000});