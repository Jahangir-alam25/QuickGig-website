import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About QuickGig</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            QuickGig is a trusted freelancing platform built to connect talented freelancers with businesses and individuals in need of their skills. Whether you’re looking to hire or get hired, QuickGig makes the process fast, safe, and easy.
          </p>
          <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-2 mb-6">
            <li>🧑‍💻 Empowering freelancers to showcase their talent globally</li>
            <li>🚀 Fast and flexible hiring process for clients</li>
            <li>🔒 Secure payments & trusted service for all users</li>
          </ul>
          <a
            href="/auth/register"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Join QuickGig Today
          </a>
        </div>

        {/* Image */}
        <div className="text-center">
          <img
            src="https://illustrations.popsy.co/gray/freelancer-working-remotely.svg"
            alt="About QuickGig"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
