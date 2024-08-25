let db = require("../databaseConfig.js");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

function generateToken(data) {
  return jwt.sign({ id: data.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

exports.saveClient = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let hash = await bcrypt.hash(password, 10);
  let phone = req.body.phone;
  let image = req.file.filename;
  let value = [[name, email, hash, phone, image]];
  let sql =
    "insert into clientlist(name, email, password, phone, image) values ?";
  db.query(sql, [value], (err, result) => {
    if (err) throw err;
    else {
      res.send("Client Saved", result);
    }
  });
};

function createClientTable(userName) {
  let cartTableQuery = `CREATE TABLE if not exists ${userName} (
      id INT NOT NULL AUTO_INCREMENT,
      productType VARCHAR(255) NULL,
      productBrand VARCHAR(255) NULL,
      productPrice VARCHAR(255) NULL,
      productRating VARCHAR(255) NULL,
      image VARCHAR(255) NULL,
      PRIMARY KEY (id));`;
  db.query(cartTableQuery, (err, result) => {
    if (err) throw err;
    else {
      console.log("client table created");
    }
  });
}

exports.loginClient = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let sql = "select * from clientlist where email = ?";
  db.query(sql, [email], (err, result) => {
    if (err) throw err;
    else {
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, async (err, isMatch) => {
          if (err) throw err;
          else {
            if (isMatch == true) {
              let userName = email.split("@")[0];
              createClientTable(userName);
              let token = await generateToken(result[0]);
              res.json({ isMatch, token, result });
            } else {
              res.send(false);
            }
          }
        });
      }
    }
  });
};

exports.verify = (req, res) => {
  let token = req.headers["authorization"].split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) throw err;
      else {
        let sql = "select * from clientlist where id = ?";
        db.query(sql, [decode.id], (err, result) => {
          if (err) throw err;
          else {
            res.json(result);
          }
        });
      }
    });
  }
};
