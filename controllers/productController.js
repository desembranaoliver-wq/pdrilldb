//SQL
const connection = require("../config/db");
//get all products
exports.getAllGadgets = (req, res) => {
  connection.query("SELECT * FROM students", (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });
};

exports.createProducts = (req, res) => {
  const {fullname, course, yearlevel, email, dateenrolled} = req.body;
  connection.query(
    "INSERT INTO students (fullname, course, yearlevel, email, dateenrolled) VALUES (?, ?, ?, ?, ?, ?)",
    [fullname, course, yearlevel, email, dateenrolled],
    (err, result) => {
      if (err) throw err;
      res.json({
        message: "Student created successfully",
        id: result.insertId,
      });
    },
  );
};









