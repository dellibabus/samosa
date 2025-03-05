import React, { useState } from 'react';
import { FaUserLarge } from 'react-icons/fa6';
import { CiLock } from 'react-icons/ci';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    toast.configure();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://your-api-endpoint/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Registration successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });

                setUsername('');
                setEmail('');
                setPassword('');
            } else {
                toast.error('Error: ' + data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
        }
    };

    return (
        <div className="flex justify-center items-center p-6 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Register</h1>

                <div className="mb-4">
                    <label className="block text-gray-600 text-lg">Username</label>
                    <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <FaUserLarge className="text-gray-500 mx-2" />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-lg">Email</label>
                    <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600 text-lg">Password</label>
                    <div className="flex items-center border border-gray-300 rounded-lg mt-2">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <CiLock className="text-gray-500 mx-2" />
                    </div>
                </div>

                <button
                    onClick={handleRegister}
                    className="w-full py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-400 transition duration-300"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;
