const dbmgr = require("./manager.js");
const db = dbmgr.db;

exports.getTestData = () => {
  const sql = "SELECT * FROM 'family_main_data'";
  let stmt = db.prepare(sql);
  let res = stmt.all();
  return res;
};
