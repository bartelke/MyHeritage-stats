const familyMgr = require("./DB/family.js");
const { contextBridge } = require("electron");

const getNames = () => {
  return familyMgr.getTestData();
};
contextBridge.exposeInMainWorld("api", {
  getNames: getNames,
});
