import React, { useState } from 'react';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://your-api-endpoint/forget-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                }),
            });

            const data = await response.json();

            if (data.success) {
                alert('Password reset link sent to your email');
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center p-6 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Forget Password</h1>

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

                <button
                    onClick={handleResetPassword}
                    className="w-full py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-400 transition duration-300"
                >
                    Reset Password
                </button>
            </div>
        </div>
    );
};

export default ForgetPassword;
