import React from 'react';
import { FaSearch, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaSearch className="text-4xl text-white" />,
    title: "Find Tasks Easily",
    description: "Search and filter through gigs that match your skills and schedule—quickly and intuitively.",
    bgColor: "from-indigo-500 to-purple-600"
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-4xl text-white" />,
    title: "Safe & Secure Platform",
    description: "Built-in trust and safety features to ensure secure transactions and peace of mind.",
    bgColor: "from-green-500 to-emerald-600"
  },
  {
    id: 3,
    icon: <FaHandshake className="text-4xl text-white" />,
    title: "Verified Task Posters",
    description: "All tasks come from verified users so you can work with confidence and clarity.",
    bgColor: "from-yellow-400 to-amber-500"
  }
];

const QuickGigServices = () => {
  return (
    <section className=" w-11/12 mx-auto py-12 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold dark:text-white drop-shadow-sm">Why Choose QuickGig?</h2>
        <p className="text-lg dark:text-white text-gray-600 mt-3">
          A smarter freelance marketplace built for speed, trust, and flexibility.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {services.map(service => (
          <div
            key={service.id}
            className={`rounded-2xl p-6 shadow-xl bg-gray-50 dark:bg-gray-700  transform hover:-translate-y-2 transition duration-300`}
          >
            <div className="mb-4 bg-green-200 p-4 rounded-full w-fit">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className=" mt-2 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickGigServices;

