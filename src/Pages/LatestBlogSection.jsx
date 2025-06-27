import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Ways to Land Clients on QuickGig",
    summary:
      "Discover proven strategies to attract high-quality clients and grow your freelancing career faster.",
    image: "https://i.ibb.co/67CL4Zsg/app-feature.jpg",
    date: "June 22, 2025",
    author: "QuickGig Team",
  },
  {
    id: 2,
    title: "Portfolio Tips That Impress Clients",
    summary:
      "Learn what makes a winning freelance portfolio and how to showcase your skills to stand out.",
    image: "https://i.ibb.co/wFsLk1sZ/payment.jpg",
    date: "June 19, 2025",
    author: "QuickGig Editors",
  },
  {
    id: 3,
    title: "Avoid These 7 Freelancing Mistakes in 2025",
    summary:
      "Save time and protect your reputation by avoiding the most common mistakes freelancers make.",
    image: "https://i.ibb.co/k7GWcdd/translate.jpg",
    date: "June 10, 2025",
    author: "Career Coach @QuickGig",
  },
];

const LatestBlogSection = () => {
  return (
    <section className="py-12" id="blog">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Tips & Insights for Freelancers</h2>
        <p className="text-gray-600 text-lg mb-10">
          Actionable advice, career tips, and industry news curated for your growth on QuickGig.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-50  dark:bg-gray-700 dark:hover:bg-gray-800 shadow-sm hover:shadow-md transition rounded-md dark:hover:border dark:border-green-600 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {post.date} &middot; {post.author}
                </p>
                <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{post.summary}</p>
                <a
                  href="#"
                  className="text-sm text-green-600 hover:text-green-800 font-medium mt-4 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;