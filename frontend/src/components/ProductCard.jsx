/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({ _id, image, name, description, price }) => {
  return (
    <Link
      to={`/product/${_id}`}
      className="block border border-gray-500 rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-400">{name}</h3>
      <p className="text-sm text-gray-300 mt-2 line-clamp-2">{description}</p>
      <span className="text-lg font-bold text-red-500 mt-4 block">
        ${price}
      </span>
    </Link>
  );
};

export default ProductCard;
