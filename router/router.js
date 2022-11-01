const express = require("express");
const router = new express.Router();
const Products = require("./models/productsSchema");

router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        // console.log("console the data" + productsdata);
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});



//get individual data

router.get("/getproductone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        //console.log(id);
        const individualdata = await Products.findone({ id: id });
        // console.log(individualdata);
        res.status(201).json(individualdata);

    } catch (error) {
        res.status(400).json(individualdata);
    }
})




module.exports = router;
