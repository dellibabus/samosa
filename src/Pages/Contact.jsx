import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../index.css";


const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 13.0827,
  lng: 80.2707,
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-6 mt-20">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">

          <div className="bg-white text-gray-800 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="mt-4 text-lg">Have questions? Reach out to us!</p>
            <div className="mt-6 space-y-4">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-lg" /> 123, Melody Street, Chennai, India
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-lg" /> support@melodybites.com
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="mr-2 text-lg" /> +91 98765 43210
              </p>
            </div>
          </div>


          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800">Send a Message</h2>
            {submitted && <p className="text-green-500 mt-2">Message sent successfully! ✅</p>}
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>


        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ContactPage;
