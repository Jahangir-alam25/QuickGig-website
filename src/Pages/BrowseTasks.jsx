import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router';

const BrowseTasks = () => {
    const allTasks = useLoaderData();
    const navigate = useNavigate();

    const  handleDetails = (id) => {
        navigate(`/task-details/${id}`);
    }
    return (

        <div className='px-4 sm:px-20 mx-auto py-12 bg-amber-50 dark:text-white dark:bg-gray-800'>
            <Helmet>
                <title>Browse Tasks - QuickGig</title>
            </Helmet>
            <h1 className='text-2xl text-center font-bold dark:text-white text-gray-800 mb-3'>Discover freelance opportunities posted by clients.</h1>
            <p className='text-lg text-center dark:text-gray-300  text-gray-600 mb-12'>Browse through available tasks, explore details, and find the right gigs that match your skills and interests.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

        
                {allTasks.map((task) => (
                    <div key={task._id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between">
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
                                onClick={() => handleDetails(task._id)}
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

export default BrowseTasks;