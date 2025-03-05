import React from "react";
import Footer from "./Footer";

const Privacypolicy = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 px-4 mt-8">
                <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg max-w-4xl w-full">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">PRIVACY POLICY</h1>
                    <div className="text-gray-700 space-y-6">
                        <p>
                            Our privacy policy (Policy) is designed to ensure your comfort and transparency about how we handle your
                            personal information when you visit or make orders on our website. This policy is intended to make it easier
                            for you to navigate, read, and understand how we collect, use, and protect your data.
                        </p>
                        <p>
                            This Policy explains the collection and use of information provided or collected through our website and
                            services. The term "website" in this policy refers to the website you access for ordering delicious samosas and
                            other food items from our restaurant, as well as any related services we provide.
                        </p>
                        <ol className="list-decimal list-inside space-y-4">
                            <li className="font-semibold">Information We Collect</li>
                            <p>
                                We collect certain personal information such as your name, email address, phone number, and delivery address
                                to process your orders. You are free to browse our website without providing any personal information, but to
                                place an order, we will need you to provide some necessary details.
                            </p>
                            <li className="font-semibold">Why We Collect Your Information</li>
                            <p>
                                Your information helps us fulfill your orders, deliver your samosas hot and fresh, send promotional offers,
                                and improve your experience with us. We collect your name, email, and address primarily for processing orders
                                and providing updates regarding your delivery. Your contact information will also help us notify you about
                                new offers, discounts, and upcoming events like "Samosa Fest!"
                            </p>
                            <li className="font-semibold">How We Protect Your Information</li>
                            <p>
                                We take your privacy seriously. Your data is protected by industry-standard encryption and secure access to
                                our systems. We will never sell or share your personal information with third parties without your consent,
                                except as necessary for processing your orders or complying with applicable laws.
                            </p>
                            <li className="font-semibold">Changes to this Privacy Policy</li>
                            <p>
                                From time to time, we may update this Policy to better reflect changes in our services, technology, or legal
                                obligations. If there are any significant changes, we will notify you through an updated notice on the website
                                or through email if you are a customer of ours.
                            </p>
                            <li className="font-semibold">Your Consent</li>
                            <p>
                                By using our website and placing an order, you consent to the collection and use of your personal information
                                as described in this policy. If you have any concerns about how we handle your data, feel free to reach out to
                                us via the contact details provided on our website.
                            </p>
                        </ol>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Privacypolicy;
