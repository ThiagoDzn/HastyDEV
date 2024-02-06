const User = require("../models/user.model");
const verifyToken = require("../protected_route/verify.token.controller");

const readUser = async (req, res) => {
  const userId = req.params.id;
  const token = req.headers.authorization;

  try {
    await verifyToken(token, res);

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Erro ao ler o usuário:", error);
    res.status(500).json({ message: "Erro ao processar a solicitação" });
  }
};

module.exports = readUser;