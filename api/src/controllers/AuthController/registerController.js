const { User } = require("../../db");
const { encrypt, compare } = require("./Helpers/handleBcrypt");

const registerCtrl = async (req, res) => {
  try {
    const { nameUser, email, password } = req.body;

    const passwordHash = await encrypt(password);
    const registerUser = await User.create({
      nameUser,
      email,
      password: passwordHash,
    });

    res.status(200).json(registerUser);
  } catch {
    res.status(500).json({ error: "Error al registrar el usuario" });
  }
};

module.exports = registerCtrl;
