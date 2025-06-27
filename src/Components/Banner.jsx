

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {

    const slides = [
        {
            image: "https://i.ibb.co/rfmQLSLz/shot-young-male-uses-laptop-computer-checking-exchange-rate-internet-works-with-financial-documents.jpg",
            title: "Welcome to QuickGig",
            subtitle: "We connect talented freelancers with clients worldwide for diverse, quality-driven remote work opportunities.",
        },
        {
            image: "https://i.ibb.co/0yVZRDsw/handsome-man-laughing-while-working-laptop-living-room-girlfriend-background-talks-phone.jpg",
            title: "QuickGig - Connect, Work, Grow Online",
            subtitle: "We link global freelancers with clients, offering secure, flexible, and professional work opportunities.",
        },
        {
            image: "https://i.ibb.co/1G0RP2Ch/happy-male-with-satisfied-expression.jpg",
            title: "QuickGig - Where Talent Meets Opportunity Online",
            subtitle: "We connect skilled freelancers with clients worldwide for secure, flexible, and rewarding remote jobs..",
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
        <div className="pb-6">
          

           
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div className="relative container mx-auto overflow-hidden">
                        <img
                            className=" w-full h-120"
                            src={slide.image}
                            alt="Slide 1"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white">
                            <h2 className="text-3xl font-bold">{slide.title}</h2>
                            <p className="text-center my-4">{slide.subtitle}</p>
                            <button className="btn text-white bg-[#009fff]">Learn More</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;





