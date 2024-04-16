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
];

const page = ({ params }) => {
  const product = products.find((p) => {
    return p.id === +params.slug;
  });
  console.log(product);
  return (
    <div className="flex bg-gray-700 items-center justify-center min-h-screen">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-xl">
        <img src={product.image} alt={product.name} className="rounded-t-xl" />
        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-800">
              ${product.price}
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
