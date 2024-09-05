const dbmgr = require("./manager.js");
const db = dbmgr.db;

exports.getTestData = () => {
  const querry = "SELECT * FROM 'family_main_data'";
  let stmt = db.prepare(querry);
  let res = stmt.all();
  return res;
};

exports.countNamesRepetition = () => {
  const querry =
    "SELECT first_name, COUNT(*) AS occurrences FROM individual_lang_data GROUP BY first_name ORDER BY occurrences DESC";
  let stmt = db.prepare(querry);
  return stmt.all();
};
