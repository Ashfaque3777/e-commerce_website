let db = require("../databaseConfig.js");

exports.saveCart = (req, res) => {
  let userName = req.params.userName;
  let productType = req.body.productType;
  let productBrand = req.body.productBrand;
  let productPrice = req.body.productPrice;
  let productRating = req.body.productRating;
  let image = req.body.image;
  let value = [[productType, productBrand, productPrice, productRating, image]];
  let sql = `insert into ${userName}(productType, productBrand, productPrice, productRating, image) values ?`;
  db.query(sql, [value], (err, result) => {
    if (err) throw err;
    else {
      res.send("Cart Saved");
    }
  });
};

exports.getCart = (req, res) => {
  let userName = req.params.userName;
  let sql = `select * from ${userName}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    else {
      res.json(result);
    }
  });
};

exports.deleteCart = (req, res) => {
  let userName = req.params.userName;
  let id = req.params.id;
  let sql = `delete from ${userName} where id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    else {
      res.send("Product Deleted");
    }
  });
};
