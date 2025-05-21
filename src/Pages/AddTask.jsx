import React from 'react';
import { toast } from 'react-toastify';

const AddTask = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(form);
    const taskData = Object.fromEntries(formdata.entries());
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
      })
      .then(res=> res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Task added successfully');
          form.reset();
        }
      });

  };
    return (
        <div className="px-4 py-12 md:px-24">
  <div className="text-center space-y-4 mb-10">
    <h1 className="text-4xl md:text-6xl font-bold">Add Task</h1>
    <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
      Fill out the form below to list your task. Include details like what needs to be done, the category, budget, and deadline.
    </p>
  </div>

      <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Task Title */}
      <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">Task Title</label>
        <input type="text" name="title" className="input w-full" placeholder="Enter task title" required />
      </fieldset>

      {/* Category */}
      <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">Category</label>
        <select name="category" className="select w-full" required>
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>
      </fieldset>

      {/* Description (Full Width) */}
      <fieldset className="md:col-span-2 bg-base-200 border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">Description</label>
        <textarea name="description" rows="4" className="textarea w-full" placeholder="Describe the task in detail" required></textarea>
      </fieldset>

      {/* Deadline */}
      <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">Deadline</label>
        <input type="date" name="deadline" className="input w-full" required />
      </fieldset>

      {/* Budget */}
      <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">Budget ($)</label>
        <input type="number" name="budget" className="input w-full" placeholder="e.g. 200" required />
      </fieldset>

      {/* User Email */}
      <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">User Email</label>
        <input type="email" name="userEmail" value="user@example.com" readOnly className="input w-full bg-gray-100" />
      </fieldset>

      {/* User Name */}
      <fieldset className="bg-base-200 border border-base-300 rounded-lg p-4">
        <label className="block mb-1 font-medium">User Name</label>
        <input type="text" name="userName" value="John Doe" readOnly className="input w-full bg-gray-100" />
      </fieldset>
    </div>

    <div>
      <input type="submit" className="btn bg-green-600  w-full  px-8" value="Add Task" />
    </div>
  </form>
</div>


    );
};

export default AddTask;