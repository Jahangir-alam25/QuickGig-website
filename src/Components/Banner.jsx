

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {

    const slides = [
        {
            image: "https://i.ibb.co/rfmQLSLz/shot-young-male-uses-laptop-computer-checking-exchange-rate-internet-works-with-financial-documents.jpg",
            title: "Welcome to QuickGig",
            subtitle: "Find or post short-term gigs in minutes.",
        },
        {
            image: "https://i.ibb.co/NgcvZqQW/medical1.webp",
            title: "Post Your Task Today",
            subtitle: "Need help? Post a gig and get instant offers from skilled workers.",
        },
        {
            image: "https://i.ibb.co/SDsSj33Q/IMG-20250507-WA0009.jpg",
            title: "Get Paid for Your Skills",
            subtitle: "Browse tasks, offer your services, and earn on your terms.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-6">
            <div className="flex  sm:flex-row justify-center items-center mb-10 ">
                <input
                    className="bg-white w-full lg:w-5/12 sm:w-80 px-4 py-2 rounded-l-2xl border border-gray-300 shadow-sm"
                    type="text"
                    placeholder="Search "
                />
                <button className="bg-secondary text-white text-lg px-10 py-2 rounded-r-2xl  transition">
                    Search
                </button>
            </div>

            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Empowering You Through Every Gig</h2>
                <p className="text-gray-600 mt-2">
                   Explore a smarter way to hire help or earn from your skills. QuickGig connects people and tasks—fast, flexible, and reliable.
                </p>
            </div>
            <Slider {...settings}>
                {slides.map(slide => (
                    <div key={slide.id} className="p-4">
                        <div className="rounded-xl shadow-lg overflow-hidden bg-white relative">
                            <img src={slide.image} alt={slide.title} className="w-full h-96 object-cover" />

                            <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center  text-center px-4">
              <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">{slide.title}</h2>
              <p className="mt-3 text-md md:text-xl font-medium drop-shadow">{slide.subtitle}</p>
            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;

