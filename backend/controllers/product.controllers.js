import Product from "../models/product.models.js";

const productController = async(req, res) =>{
    try {
        const allProducts = await Product.find();
        res.status(200).send(allProducts);
    } catch (error) {
        console.log(error);
    }
}

export default productController;