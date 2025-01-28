import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const Products = () => {
  const [val, setVal] = useState([]);
  useEffect( () =>{
    const fun = async () => {
      const response = await axios.get("http://localhost:8000");
      setVal(response.data);
    };
    fun();
  })
  const products = val;

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
