import app from "./app.js";
import sequelize from "./config/db.js";

const PORT = 4000;

sequelize.sync({ force: true })
  .then(() => {
    console.log("Banco SQLite recriado com sucesso");
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch(err => console.error("Erro ao sincronizar banco:", err));
