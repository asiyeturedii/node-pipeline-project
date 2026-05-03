const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Node Pipeline Project</title>
        <style>
          body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f2f5; }
          .container { text-align: center; padding: 50px; background: white; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
          h1 { color: #2ecc71; }
          p { color: #7f8c8d; }
          .status { font-weight: bold; color: #3498db; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Merhaba!</h1>
          <p>CI/CD Webhook testimiz başarıyla tamamlandı.</p>
          <p class="status">Jenkins bu build'i senin için otomatik başlattı! 🚀</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} adresinde çalışıyor`);
});
