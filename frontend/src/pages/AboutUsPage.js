import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUsPage = () => {
    return (
        <>
            <Header/>

            <div className="bg-gray-100 py-10">
                <div className="container mx-auto px-6 md:px-12 lg:px-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">About Us</h1>
                    
                    <div className="max-w-4xl mx-auto">
                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            Welcome to <strong>DressNest</strong>, your one-stop shop for stylish and affordable fashion for both men and women.
                            Our journey began with a simple idea: to make fashion accessible to everyone, without compromising on quality.
                        </p>
                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            At <strong>DressNest</strong>, we believe in offering a wide variety of products that help you express your unique style. 
                            From everyday essentials to statement pieces, our collection includes clothes and accessories designed to meet your needs, 
                            whether you're dressing for work, a casual day out, or a special occasion.
                        </p>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-10 mb-4">Our Mission</h2>
                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            Our mission is to provide high-quality fashion that empowers everyone to look and feel their best, at prices that make sense.
                            We’re committed to making your shopping experience as seamless as possible, with a user-friendly website, fast shipping, and
                            customer service that’s here to help.
                        </p>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-10 mb-4">What We Offer</h2>
                        <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mb-6">
                            <li><strong>Clothing:</strong> From casual wear to formal outfits, we offer the latest trends for both men and women.</li>
                            <li><strong>Accessories:</strong> Elevate your look with our selection of jewelry, bags, belts, and more.</li>
                            <li><strong>New Arrivals:</strong> Stay ahead of the curve with our constantly updated catalog of the newest trends and must-have items.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-10 mb-4">Why Shop With Us?</h2>
                        <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mb-6">
                            <li><strong>Quality You Can Trust:</strong> Each product in our store is handpicked for its quality and style.</li>
                            <li><strong>Inclusive Fashion:</strong> We offer a wide range of sizes and styles to ensure everyone finds something they love.</li>
                            <li><strong>Seamless Shopping Experience:</strong> Our website, built with cutting-edge technologies like Laravel and React, provides a smooth, secure, and enjoyable shopping experience.</li>
                            <li><strong>Exceptional Customer Service:</strong> We’re dedicated to making sure you’re 100% satisfied with your purchase, with easy returns and a helpful support team.</li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-10 mb-4">Join Our Community</h2>
                        <p className="text-base md:text-lg text-gray-700 mb-6">
                            More than just a store, <strong>[Your Brand Name]</strong> is a community of fashion lovers who appreciate great design and value.
                            Follow us on social media for style inspiration, exclusive deals, and the latest product drops.
                        </p>
                        
                        <div className="text-center mt-10">
                            <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-blue-600">
                                Start Shopping
                            </a>
                        </div>
                    </div>
                </div>
            </div>

           <Footer/>
        </>
    );
};

export default AboutUsPage;
