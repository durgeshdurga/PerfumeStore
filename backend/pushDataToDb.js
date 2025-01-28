import Product from "./models/product.models.js"
import products from "./products.js"
const pushDataToDb = async() =>{
    // console.log("pushDatatodb");
    
    try {
        const isDataPushed =await Product.insertMany(products);
        // console.log(isDataPushed);
    } catch (error) {
        console.log(error);
    }
}

export default pushDataToDb;