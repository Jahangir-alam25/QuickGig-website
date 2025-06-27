import React from "react";
import { Code, PenTool, Megaphone, BookText, Film } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Web Development",
    description: "Build responsive websites, web apps & more.",
    icon: <Code className="w-8 h-8 text-green-600" />,
  },
  {
    id: 2,
    name: "Graphic Design",
    description: "Logos, branding, UI/UX and visual assets.",
    icon: <PenTool className="w-8 h-8 text-green-600" />,
  },
  {
    id: 3,
    name: "Digital Marketing",
    description: "SEO, ads, email campaigns & more.",
    icon: <Megaphone className="w-8 h-8 text-green-600" />,
  },
  {
    id: 4,
    name: "Writing & Translation",
    description: "Content, copywriting, editing & localization.",
    icon: <BookText className="w-8 h-8 text-green-600" />,
  },
  {
    id: 5,
    name: "Video & Animation",
    description: "Video editing, explainer animations, intros.",
    icon: <Film className="w-8 h-8 text-green-600" />,
  },
];

const TopCategories = () => {
  return (
    <section className="py-12 " id="categories">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold dark:text-white text-gray-800 mb-3">Top Service Categories</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Explore the most in-demand categories on QuickGig.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-800 border hover:border-green-500 transition-all rounded-xl p-6 text-left shadow-sm hover:shadow-md"
            >
              <div className="mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold dark:text-white text-gray-800">{cat.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;