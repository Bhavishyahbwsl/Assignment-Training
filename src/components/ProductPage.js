import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description of Product 4",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Description of Product 5",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    name: "Product 6",
    description: "Description of Product 6",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
  },
];

const ProductPage = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8 lg:px-16 xl:px-20">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 bg-gray-300 p-10 rounded-lg shadow-xl ring ring-gray-300">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
