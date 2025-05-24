import React, { use } from 'react';

import { AuthContext } from "../Provider/AuthContext";
import { useLoaderData, useNavigate } from 'react-router';
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';

const UpdatedTask = () => {
  const {user} = use(AuthContext);
  const task = useLoaderData()
  const navigate = useNavigate();
const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;

  const taskData = {
    title: form.title.value,
    category: form.category.value,
    description: form.description.value,
    deadline: form.deadline.value,
    budget: form.budget.value,
    // Do NOT include userEmail or userName
  };

  fetch(`https://a10-freelance-task-marketplace-server-ph.vercel.app/tasks/${task._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  })
    .then(res => res.json())
    .then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Task updated successfully!",
        });
        navigate("/my-posted-tasks");
      }
    });
};

    return (
        <div className="px-4 py-12 md:px-24 bg-amber-50 dark:bg-gray-800 ">
          <Helmet>
                <title>Update Task - QuickGig</title>
            </Helmet>
  <div className="text-center space-y-4 mb-10">
    <h1 className="text-4xl md:text-6xl font-bold dark:text-white">Update Task</h1>
    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
       You can update the task title, description, deadline, and budget here. Make sure to save the changes after editing.
    </p>
  </div>

      <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Task Title */}
      <fieldset className="bg-base-200 border dark:bg-gray-600 dark:text-white border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">Task Title</label>
        <input type="text" name="title" className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white w-full" placeholder="Enter task title" defaultValue={task.title} required />
      </fieldset>

      {/* Category */}
      <fieldset className="bg-base-200 border border-base-300 dark:bg-gray-600 dark:text-white rounded-lg p-4">
        <label className="block mb-1 font-medium">Category</label>
        <select name="category" className="select dark:bg-gray-800 dark:text-white dark:border dark:border-white w-full" defaultValue={task.category} required>
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>
      </fieldset>

      {/* Description (Full Width) */}
      <fieldset className="md:col-span-2 dark:bg-gray-600 dark:text-white bg-base-200 border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">Description</label>
        <textarea name="description" rows="4" className="textarea dark:bg-gray-800 dark:text-white dark:border dark:border-white w-full" placeholder="Describe the task in detail" defaultValue={task.description} required></textarea>
      </fieldset>

      {/* Deadline */}
      <fieldset className="bg-base-200 dark:bg-gray-600 dark:text-white border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">Deadline</label>
        <input type="date" name="deadline" className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white w-full" defaultValue={task.deadline} required />
      </fieldset>

      {/* Budget */}
      <fieldset className="bg-base-200 dark:bg-gray-600 dark:text-white border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">Budget ($)</label>
        <input type="number" name="budget" className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white w-full" placeholder="e.g. 200" defaultValue={task.budget} required />
      </fieldset>

      {/* User Email */}
      <fieldset className="bg-base-200 dark:bg-gray-600 dark:text-white border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">User Email</label>
        <input type="email" name="userEmail" value={user?.email} readOnly className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white w-full bg-gray-100" />
      </fieldset>

      {/* User Name */}
      <fieldset className="bg-base-200 dark:bg-gray-600 dark:text-white border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">User Name</label>
        <input type="text" name="userName" value={user?.displayName} readOnly className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white w-full bg-gray-100" />
      </fieldset>
    </div>

    <div>
      <input type="submit" className="btn bg-green-600  w-full  px-8" value="Add Task" />
    </div>
  </form>
</div>


    );
};

export default UpdatedTask;

