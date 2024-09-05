const familyMgr = require("./DB/family.js");
const { contextBridge } = require("electron");

const getNamesRep = () => {
  return familyMgr.countNamesRepetition();
};
contextBridge.exposeInMainWorld("api", {
  getNamesRepetition: getNamesRep,
});
