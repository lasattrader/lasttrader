const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta property="og:title" content="Rocket Game 🚀" />
        <meta property="og:image" content="https://i.imgur.com/7Vp7bPS.png" />
       <meta name="fc:frame:post_url" content="https://lasttrader-production.up.railway.app/game" />
        <meta name="fc:frame:image" content="https://i.imgur.com/7Vp7bPS.png" />
        <meta name="fc:frame:button:1" content="Launch Rocket 🚀" />
        <meta name="fc:frame:post_url" content="https://YOUR_RAILWAY_URL.up.railway.app/game" />
    </head>
    <body>
    </body>
    </html>
  `;
  res.send(html);
});

<meta name="fc:frame:post_url" content="https://lasttrader-production.up.railway.app/" />
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta property="og:title" content="Rocket Launched! 🎯" />
        <meta property="og:image" content="https://i.imgur.com/gT2SXq8.png" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://i.imgur.com/gT2SXq8.png" />
        <meta name="fc:frame:button:1" content="Play Again" />
        <meta name="fc:frame:post_url" content="https://YOUR_RAILWAY_URL.up.railway.app/" />
    </head>
    <body>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
