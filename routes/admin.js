const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("In Another the middleware");
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
  });
  
  router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.send("<h1>Product Added!</h1>");
  });

module.exports = router;