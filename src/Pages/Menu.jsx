import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Footer from "../Footer/Footer";
import CrispySamosa from "../assets/Image4.jpg"
import ChickenSamosa from "../assets/Chicken Samosa.jpeg";
import OnionSamosa from "../assets/Onion Samosa.jpg";
import MasalaSamosa from "../assets/Masala Samosa.jpg";
import CheeseSamosa from "../assets/Cheese Samosa.jpg";
import MushroomSamosa from "../assets/Mushroom Samosa.jpg";

const menuItems = [
  { id: 1, name: "Crispy Samosa", description: "Spiced potato-filled samosas.", price: "₹10", image: CrispySamosa },
  { id: 2, name: "Chicken Samosa", description: "Delicious chicken-filled samosas.", price: "₹10", image: ChickenSamosa },
  { id: 3, name: "Onion Samosa", description: "Crispy samosas with spiced onion filling.", price: "₹10", image: OnionSamosa },
  { id: 4, name: "Masala Samosa", description: "Tangy masala-filled crispy samosas.", price: "₹10", image: MasalaSamosa },
  { id: 5, name: "Cheese Samosa", description: "Cheesy samosas for a creamy delight.", price: "₹20", image: CheeseSamosa },
  { id: 6, name: "Mushroom Samosa", description: "Samosas with a rich mushroom filling.", price: "₹20", image: MushroomSamosa },
];

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Our Menu</h1>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-200 ease-in-out"
          />
        </div>

        {filteredMenu.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/384")}
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-blue-500">{item.price}</span>
                    <a
                      href="https://wa.me/7010427770?text=Hi%20Melody%20Bites%2C%20I%20would%20like%20to%20place%20an%20order."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg mt-6">
            No items found 😞
            <button
              onClick={() => setSearchTerm("")}
              className="ml-2 text-blue-500 hover:underline"
            >
              Reset
            </button>
          </div>
        )}
      </div>
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default MenuPage;
