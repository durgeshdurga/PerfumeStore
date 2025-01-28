import Navbar from "./Navbar";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
// import products from '../datas/products';

const HomePage = () => {
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
    <div className="bg-gray-800">
      <Navbar />
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
