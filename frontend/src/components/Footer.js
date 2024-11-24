import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; 2024 E-commerce site</p>
                <p>
                    <a href="/privacy" className="hover:underline mx-4">Privacy Policy</a>
                    <a href="/terms" className="hover:underline mx-4">Terms of Service</a>
                    <a href="/about" className="hover:underline mx-4">About</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
