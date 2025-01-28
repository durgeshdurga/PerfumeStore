import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams(); // Extract _id from URL parameters
  const [product, setProduct] = useState(null); // State for the product
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {
    // fetching from API
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000`);
        const products = response.data;
        const product = products.find((p) => p._id == id);

        if (product) {
          setProduct(product);
        } else {
          setError("Product not found!");
        }
      } catch (err) {
        setError("An error occurred while fetching the product.");
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out this product: ${product.name} - ${product.description}`,
          url: window.location.href, // Current page URL
        });
        console.log("Product shared successfully!");
      } catch (err) {
        console.error("Error while sharing:", err);
      }
    } else {
      alert("Sharing is not supported on this device. Copy the URL to share!");
    }
  };

  if (error) {
    return <div className="text-white text-center p-4">{error}</div>;
  }

  if (!product) {
    return <div className="text-white text-center p-4">Loading...</div>;
  }

  return (
    <div className="bg-gray-800 text-white p-6 min-h-screen">
      <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-lg p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-300 mt-4">{product.description}</p>
        <p className="text-lg text-gray-300 mt-2">
          Review: {product.review} ⭐
        </p>
        <p className="text-2xl font-bold text-red-500 mt-4">${product.price}</p>
        <button
          onClick={handleShare}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 flex ml-88 rounded-lg shadow-lg"
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
