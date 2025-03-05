import React, { useState } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import Footer from "../Footer/Footer";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-api-endpoint/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Registration successful!");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login functionality will be implemented.");
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly items-center p-6 bg-gray-100 mt-8 space-y-10 md:space-y-0">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            {isRegister ? "Register" : "Member Login"}
          </h1>

          <form onSubmit={isRegister ? handleRegister : handleLogin}>
            <div className="mb-5">
              <label className="block text-gray-600 text-lg mb-2">Username</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter a username"
                  value={isRegister ? username : undefined}
                  onChange={isRegister ? (e) => setUsername(e.target.value) : undefined}
                  className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <FaUserLarge className="text-gray-500 mx-3" />
              </div>
            </div>

            {isRegister && (
              <div className="mb-5">
                <label className="block text-gray-600 text-lg mb-2">Email</label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            )}

            <div className="mb-5">
              <label className="block text-gray-600 text-lg mb-2">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={isRegister ? password : undefined}
                  onChange={isRegister ? (e) => setPassword(e.target.value) : undefined}
                  className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <CiLock className="text-gray-500 mx-3" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition duration-300"
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <h2
              onClick={() => setIsRegister(!isRegister)}
              className="text-sm text-gray-600 cursor-pointer hover:underline"
            >
              {isRegister ? "Already have an account? Login" : "Forgot password?"}
            </h2>
            {!isRegister && (
              <h2
                onClick={() => setIsRegister(true)}
                className="text-sm text-gray-600 mt-2 cursor-pointer hover:underline"
              >
                Don't have an account? Register
              </h2>
            )}
          </div>
        </div>

        {/* Image and Info Section */}
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Quick Service Shop</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your Perfect Place to Taste Delicious Snacks
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVPtvrT13OyM_cQvM7j1hqAk7LZhzessYEQ&s"
            alt="Restaurant"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
