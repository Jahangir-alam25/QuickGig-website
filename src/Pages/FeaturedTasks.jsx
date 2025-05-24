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
            <h1 className='text-2xl text-center font-bold text-gray-800 mb-3 dark:text-white'>Featured Tasks</h1>
            <p className='text-lg text-center text-gray-600 mb-12 dark:text-white'>Design and implement key marketplace features for job posting, bidding, profiles, reviews, and secure payments.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

        
                {allTasks.map((task) => (
                    <div key={task._id} className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-lg border hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold dark:text-white text-gray-800 mb-1">{task.title}</h2>
                            <span className="inline-block text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-3 font-semibold">
                                {task.category}
                            </span>
                           
                        </div>

                        <div className="mt-auto">
                            <div className="flex justify-between text-sm text-gray-500 font-medium mb-4">
                                <span>💰 ${task.budget}</span>
                                <span>🗓Deadline : {task.deadline}</span>
                            </div>

                            <button
                                
                                className="w-full bg-gradient-to-r from-green-500 to-indigo-600 text-white py-2 rounded-lg hover:from-green-600 hover:to-indigo-700 transition"
                            >
                                See Details
                            </button>
                        </div>
                    </div>
                ))}
         
        </div>
        </div>
    );
};

export default FeaturedTasks;