const express = require("express");
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Primeira rota
app.get("/", (req, res) => {
  res.send("API com Express funcionando!");
});

// Porta de execução
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
