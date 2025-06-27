import React, { useEffect, useState } from 'react';




const FeaturedTasks = () => {
  const [allTasks, setAkkTasks] = useState([]);
  useEffect(() => {
    fetch('https://a10-freelance-task-marketplace-server-ph.vercel.app/features-tasks')
      .then(res => res.json())
      .then(data => setAkkTasks(data));
  }, []);
  return (
    <div className='w-11/12 mx-auto my-12'>
      <div className=" text-center">
        <h2 className="text-3xl font-bold dark:text-white  text-gray-800 mb-3">Featured Tasks</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Explore top freelance tasks you can apply to today.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>


        {allTasks.map((task) => (
          <div key={task._id} className="bg-white dark:bg-gray-800 hover:border-green-500 dark:text-white rounded-2xl shadow-lg border hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-1">{task.title}</h2>
              <span className="inline-block text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full mb-3 font-semibold">
                {task.category}
              </span>

            </div>
            <div className="flex items-center text-sm text-gray-600 mb-3">
                  <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                 ${task.budget}
                </div>

                <p className='mb-4'>🗓Deadline : {task.deadline}</p>

            <div className="mt-auto">
            

              <Link to={`/task-details/${task._id}`}>
              <button className=" bg-green-600 text-white btn btn-block rounded hover:bg-green-700">
                See more
              </button>
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FeaturedTasks;




;




// import React from "react";
import { Briefcase, DollarSign, User } from "lucide-react";
import { Link } from 'react-router';

const tasks = [
  {
    id: 1,
    title: "Landing Page UI Design (Figma)",
    company: "Startup Hive",
    budget: "$120 - Fixed",
    skills: ["Figma", "UI Design", "Prototyping"],
  },
  {
    id: 2,
    title: "React Developer Needed for Dashboard",
    company: "FinTechPro",
    budget: "$25/hr",
    skills: ["React", "REST API", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "SEO-Optimized Blog Writing",
    company: "BlogVerse",
    budget: "$60 - Per Article",
    skills: ["SEO", "Content Writing", "WordPress"],
  },
  {
    id: 4,
    title: "Social Media Ads for Product Launch",
    company: "BrandLift",
    budget: "$150 - Campaign",
    skills: ["Facebook Ads", "Instagram", "Copywriting"],
  },
];

const FeaturedTaskss = () => {
  return (
    <section className="bg-gray-50 py-16" id="tasks">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Featured Tasks</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Explore top freelance tasks you can apply to today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-left">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white border hover:border-green-500 rounded-xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h3>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <User className="w-4 h-4 mr-1" />
                  {task.company}
                </div>

                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                  {task.budget}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {task.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="mt-auto bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default FeaturedTasks;



