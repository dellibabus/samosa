import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import Footer from "./Footer";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            category: "FAQ",
            questions: [
                {
                    question: "What types of samosas do you offer?",
                    answer: "We offer a variety of samosas including vegetarian, chicken, and even vegan options. Our menu also changes seasonally with new and exciting flavors!",
                },
                {
                    question: "Do you offer delivery?",
                    answer: "Yes, we deliver our fresh samosas directly to your door! Simply place an order through our website, and we will ensure timely delivery to your location.",
                },
                {
                    question: "Can I customize my samosas?",
                    answer: "Absolutely! You can choose your filling and even spice levels to match your personal taste. Just let us know your preferences when ordering.",
                },
                {
                    question: "Are your samosas gluten-free?",
                    answer: "Yes, we offer gluten-free options! Be sure to check our menu for gluten-free samosas, and feel free to ask if you have any specific dietary requirements.",
                },
                {
                    question: "How can I place an order?",
                    answer: "You can place an order through our website or give us a call. Select the samosas you want, specify your order details, and we will take care of the rest!",
                },
                {
                    question: "What’s the best way to store leftover samosas?",
                    answer: "We recommend storing leftover samosas in an airtight container in the refrigerator. To reheat, place them in the oven for a few minutes to restore their crispy texture.",
                },
            ],
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="m-10 mt-20">
                <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">
                    Samosa FAQ
                </h1>
                <p className="text-center text-lg">
                    We're here to answer all your questions about our delicious samosas! From customization to delivery, we’ve got you covered.
                    If you don't find the answer you're looking for, feel free to reach out to us directly.
                </p>

                <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-20">
                    {faqData.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                                {section.category}
                            </h2>
                            {section.questions.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-300 rounded-md mb-4 p-4 cursor-pointer bg-white hover:shadow-md transition-all flex justify-between items-center"
                                    onClick={() => toggleFAQ(`${sectionIndex}-${index}`)}
                                >
                                    <span className="text-gray-700 font-medium text-lg">
                                        {faq.question}
                                    </span>
                                    <MdArrowDropDown
                                        className={`text-2xl text-orange-600 transform transition-transform ${activeIndex === `${sectionIndex}-${index}` ? "rotate-180" : ""
                                            }`}
                                    />
                                    {activeIndex === `${sectionIndex}-${index}` && (
                                        <p className="mt-2 text-orange-500 w-full">{faq.answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default FAQ;
