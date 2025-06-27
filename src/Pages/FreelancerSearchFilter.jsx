import React, { useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";

// Sample Freelancer Data
const freelancers = [
  {
    id: 1,
    name: "Ariana Smith",
    skills: ["UI/UX", "Figma", "Web Design"],
    category: "Designers",
    rating: 5,
    hourlyRate: "$25/hr",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "James Lee",
    skills: ["React", "Node.js", "MongoDB"],
    category: "Developers",
    rating: 4,
    hourlyRate: "$30/hr",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    name: "Fatima Noor",
    skills: ["SEO", "Content Writing", "WordPress"],
    category: "Writers",
    rating: 5,
    hourlyRate: "$20/hr",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 4,
    name: "Daniel Kim",
    skills: ["Marketing", "Email", "Strategy"],
    category: "Marketers",
    rating: 3,
    hourlyRate: "$22/hr",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

const categories = ["All", "Designers", "Developers", "Writers", "Marketers"];
const ratings = [5, 4, 3, 2];

const FreelancerSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState(null);

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const matchesSearch =
      freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelancer.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || freelancer.category === selectedCategory;

    const matchesRating =
      !selectedRating || freelancer.rating >= Number(selectedRating);

    return matchesSearch && matchesCategory && matchesRating;
  });

  return (
    <section className="w-11/12 mx-auto py-12 ">
      <div className=" bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md">
        {/* Filter UI */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by skill or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border dark:bg-gray-700 rounded-lg focus:ring-2 focus:ring-green-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Rating */}
          <select
            value={selectedRating || ""}
            onChange={(e) => setSelectedRating(e.target.value || null)}
            className="px-4 dark:bg-gray-700 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">Any Rating</option>
            {ratings.map((r) => (
              <option key={r} value={r}>
                {r}+ Stars
              </option>
            ))}
          </select>
        </div>

        {/* Result Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFreelancers.length > 0 ? (
            filteredFreelancers.map((freelancer) => (
              <div
                key={freelancer.id}
                className="bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <img
                  src={freelancer.image}
                  alt={freelancer.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-center font-semibold text-lg">{freelancer.name}</h3>
                <p className="text-center text-sm text-gray-500 mb-2">
                  {freelancer.category}
                </p>
                <div className="flex justify-center flex-wrap gap-1 mb-2">
                  {freelancer.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-center font-medium">{freelancer.hourlyRate}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(freelancer.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-sm" />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No freelancers matched your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FreelancerSearchFilter