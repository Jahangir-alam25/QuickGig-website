import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';

const PostedTasks = () => {
  const allTasks = useLoaderData();
  const [tasks, setTasks] = useState([]);
  const { user } = use(AuthContext);
  useEffect(() => {
    if (user?.email) {
      const userTasks = allTasks.filter(
        (task) => task.userEmail === user.email
      );
      setTasks(userTasks);
    }
  }, [user?.email, allTasks]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:3000/tasks/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {

              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success"
              });
              const remainingTasks = tasks.filter((task) => task._id !== _id);
              setTasks(remainingTasks);
            }
          })


      }
    });


  }
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">My Posted Tasks</h2>
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">User Name</th>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Task Title</th>
            <th className="px-4 py-2 border">Budget ($)</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id} className="text-center">
                <td className="px-4 py-2 border">{task.userName}</td>
                <td className="px-4 py-2 border">{task.category}</td>
                <td className="px-4 py-2 border">{task.title}</td>
                <td className="px-4 py-2 border">${task.budget}</td>
                <td className="px-4 py-2 border space-x-2">
                  <Link to={`/update-task/${task._id}`}

                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 cursor-pointer"
                  >
                    Update
                  </Link>
                  <button onClick={() => handleDelete(task._id)}

                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 cursor-pointer"
                  >
                    Delete
                  </button>
                  <button

                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 cursor-pointer"
                  >
                    Bids
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="px-4 py-4 border text-center text-gray-500"
              >
                No tasks posted yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PostedTasks;

