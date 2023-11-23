const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const {
  getMenu,
  findMenuById,
  createMenu,
  getTipo,
  updateTipo,
  getEspecialidad,
  postEspecialidad,
  postTipo,
  deleteEspecialidad,
  updateEspecialidad,
  loginCtrl,
  registerCtrl,
} = require("../controllers/index");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ---------------MENU----------------------
router.get("/menus", getMenu);
router.get("/menus/:id", findMenuById);
router.post("/addmenu", createMenu);

//----------------TIPO----------------------
router.get("/tipos", getTipo);
router.post("/addtipo", postTipo);
router.patch("/updatetipo", updateTipo);

//--------------ESPECIALIDAD----------------
router.get("/especialidades", getEspecialidad);
router.post("/addespecialidad", postEspecialidad);
router.delete("/deleteespecialidad/:id", deleteEspecialidad);
router.patch("/updateespecialidad/:id", updateEspecialidad);

//-------------AUTENTICACION----------------
router.post("/login", loginCtrl);
router.post("/register", registerCtrl);

module.exports = router;
