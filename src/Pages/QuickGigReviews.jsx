import React from "react";
import { FaStar } from "react-icons/fa";

const QuickGigReviews = () => {
    return (
        <div className="pb-10 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-10">
                <h1 className="text-2xl md:text-3xl font-bold py-2 md:py-4">
                    What Our <span className="text-pink-500">Users</span> Say About QuickGig
                </h1>
                <p className="text-gray-600 text-sm md:text-base dark:text-white">
                    Hear from clients and freelancers who’ve found success through our platform.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white dark:text-white dark:bg-gray-800 border p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
                    <img
                        className="w-24 h-24 rounded-full mb-4"
                        src="https://i.ibb.co/DPLDrXs2/amood-oyindamola-r1e-Ws-Gi8-Aw0-unsplash.jpg"
                        alt="Maria Khan"
                    />
                    <p className="text-lg font-semibold">Maria Khan</p>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                            QuickGig helped me land my first few freelance gigs with ease. The task filtering and secure messaging are super helpful!
                        </p>
                    </blockquote>
                    <div className="flex justify-center items-center py-3">
                        {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" />)}
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white dark:text-white dark:bg-gray-800 border p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
                    <img
                        className="w-24 h-24 rounded-full mb-4"
                        src="https://i.ibb.co/mCjMTg4p/IMG-20250508-WA0003.jpg"
                        alt="Ashik Chowdhury"
                    />
                    <p className="text-lg font-semibold">Ashik Chowdhury</p>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                            As a small business owner, QuickGig makes it easy to find reliable help fast. It saved me both time and effort!
                        </p>
                    </blockquote>
                    <div className="flex justify-center items-center py-3">
                        {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" />)}
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white dark:text-white dark:bg-gray-800 border p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
                    <img
                        className="w-24 h-24 rounded-full mb-4"
                        src="https://i.ibb.co/8DLLMRdV/IMG-20250508-WA0005.jpg"
                        alt="Rubel Biswas"
                    />
                    <p className="text-lg font-semibold">Rubel Biswas</p>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                            I love the transparency of the platform. I get paid on time and can build long-term relationships with clients.
                        </p>
                    </blockquote>
                    <div className="flex justify-center items-center py-3">
                        {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" />)}
                    </div>
                </div>

                {/* Testimonial 4 */}
                <div className="bg-white dark:text-white dark:bg-gray-800 border p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
                    <img
                        className="w-24 h-24 rounded-full mb-4"
                        src="https://i.ibb.co/bRX6KNzX/IMG-20250508-WA0002.jpg"
                        alt="Jahangir Alom"
                    />
                    <p className="text-lg font-semibold">Jahangir Alom</p>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                            The platform is smooth, and I was able to hire a local designer within hours. Communication and payments are seamless!
                        </p>
                    </blockquote>
                    <div className="flex justify-center items-center py-3">
                        {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickGigReviews;