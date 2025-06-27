// import React from "react";
// import { FaStar } from "react-icons/fa";

// const QuickGigReviews = () => {
//     return (
//         <div className="pb-10 px-4 md:px-8 lg:px-16">
//             <div className="text-center mb-10">
//                 <h1 className="text-2xl md:text-3xl font-bold py-2 md:py-4">
//                     What Our <span className="text-pink-500">Users</span> Say About QuickGig
//                 </h1>
//                 <p className="text-gray-600 text-sm md:text-base dark:text-white">
//                     Hear from clients and freelancers who’ve found success through our platform.
//                 </p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {/* Testimonial 1 */}
//                 <div className="bg-white dark:text-white dark:bg-gray-800 border p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
//                     <img
//                         className="w-24 h-24 rounded-full mb-4"
//                         src="https://i.ibb.co/DPLDrXs2/amood-oyindamola-r1e-Ws-Gi8-Aw0-unsplash.jpg"
//                         alt="Maria Khan"
//                     />
//                     <p className="text-lg font-semibold">Maria Khan</p>
//                     <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
//                         <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
//                             QuickGig helped me land my first few freelance gigs with ease. The task filtering and secure messaging are super helpful!
//                         </p>
//                     </blockquote>
//                     <div className="flex justify-center items-center py-3">
//                         {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" />)}
//                     </div>
//                 </div>

//                 {/* Testimonial 2 */}
//                 <div className="bg-white dark:text-white dark:bg-gray-800 border p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
//                     <img
//                         className="w-24 h-24 rounded-full mb-4"
//                         src="https://i.ibb.co/mCjMTg4p/IMG-20250508-WA0003.jpg"
//                         alt="Ashik Chowdhury"
//                     />
//                     <p className="text-lg font-semibold">Ashik Chowdhury</p>
//                     <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
//                         <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
//                             As a small business owner, QuickGig makes it easy to find reliable help fast. It saved me both time and effort!
//                         </p>
//                     </blockquote>
//                     <div className="flex justify-center items-center py-3">
//                         {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" />)}
//                     </div>
//                 </div>

//                 {/* Testimonial 3 */}
//                 <div className="bg-white dark:text-white dark:bg-gray-800 border p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
//                     <img
//                         className="w-24 h-24 rounded-full mb-4"
//                         src="https://i.ibb.co/8DLLMRdV/IMG-20250508-WA0005.jpg"
//                         alt="Rubel Biswas"
//                     />
//                     <p className="text-lg font-semibold">Rubel Biswas</p>
//                     <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
//                         <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
//                             I love the transparency of the platform. I get paid on time and can build long-term relationships with clients.
//                         </p>
//                     </blockquote>
//                     <div className="flex justify-center items-center py-3">
//                         {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" />)}
//                     </div>
//                 </div>

//                 {/* Testimonial 4 */}
//                 <div className="bg-white dark:text-white dark:bg-gray-800 border p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
//                     <img
//                         className="w-24 h-24 rounded-full mb-4"
//                         src="https://i.ibb.co/bRX6KNzX/IMG-20250508-WA0002.jpg"
//                         alt="Jahangir Alom"
//                     />
//                     <p className="text-lg font-semibold">Jahangir Alom</p>
//                     <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mt-4">
//                         <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
//                             The platform is smooth, and I was able to hire a local designer within hours. Communication and payments are seamless!
//                         </p>
//                     </blockquote>
//                     <div className="flex justify-center items-center py-3">
//                         {[...Array(5)].map((_, i) => <FaStar key={i} color="orange" />)}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default QuickGigReviews;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Martin Cope",
    role: "Design Director at Pixel",
    rating: 5,
    image: "https://i.ibb.co/8DLLMRdV/IMG-20250508-WA0005.jpg", // You can replace this
    text: `I am absolutely thrilled with the exceptional service I received! 
           The team went above and beyond to meet my needs, demonstrating a high level 
           of professionalism and expertise. The quality of their work exceeded my expectations, 
           and I would highly recommend their services to anyone.`,
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Freelancer at QuickGig",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e", // Replace as needed
    text: `QuickGig made it super easy to connect with clients. I love the platform's simplicity 
           and how quickly I landed projects. Great for freelancers starting out!`,
  },
    {
    id: 3,
    name: "Samantha Lee",
    role: "Marketing Specialist",
    rating: 4,
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    text: `I've worked with many platforms before, but QuickGig truly impressed me with its support and client quality. 
           I've built long-term partnerships here and grown my freelance business faster than I expected.`,
  },
];

const QuickGigReviews = () => {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const nextSlide = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
   <div className="w-11/12  mx-auto py-12">
    <h1 className="text-3xl font-bold mb-10 text-center">We Love Our Client Feedback</h1>
     <section className="py-12 bg-gray-50 rounded-md dark:bg-gray-700">
        
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Side Preview */}
        <div className="hidden md:block w-1/4">
          <img
            src={reviews[(index + 1) % reviews.length].image}
            alt="Next reviewer"
            className="w-24 h-24 rounded-xl object-cover opacity-50 mx-auto"
          />
        </div>

        {/* Main Reviewer */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={review.image}
            alt={review.name}
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </div>

        {/* Review Content */}
        <div className="w-full md:w-2/3 text-left">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-5">{review.text}</p>

          <div className="flex items-center mb-2">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <h4 className="font-semibold text-lg">{review.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-300">{review.role}</p>

          {/* Navigation */}
          <div className="mt-6 flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-white dark:text-gray-800 border rounded-md hover:bg-gray-100"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-green-500 text-white dark:text-gray-800 rounded-md hover:bg-green-600"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default QuickGigReviews;