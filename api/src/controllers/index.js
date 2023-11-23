const getMenu = require("./ControllerMenu/menuController");
const getEspecialidad = require("./ControllerEspec/especialidadController");
const getTipo = require("./ControllerTipo/tipoController");
const postEspecialidad = require("./ControllerEspec/postEspecialidad");
const postTipo = require("./ControllerTipo/postTipo");
const findMenuById = require("./ControllerMenu/findMenuByIdController");
const createMenu = require("./ControllerMenu/createMenuController");
const updateTipo = require("./ControllerTipo/updateTipoController");
const updateEspecialidad = require("./ControllerEspec/updateEspecialidad");
const deleteEspecialidad = require("./ControllerEspec/deleteEspecialidad");
const registerCtrl = require("./AuthController/registerController");
const loginCtrl = require("./AuthController/loginController");

module.exports = {
  getMenu,
  findMenuById,
  createMenu,
  getEspecialidad,
  getTipo,
  updateTipo,
  postEspecialidad,
  postTipo,
  updateEspecialidad,
  deleteEspecialidad,
  registerCtrl,
  loginCtrl,
};
