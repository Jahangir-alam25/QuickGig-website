import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const PostedTasks = () => {
  const allTasks = useLoaderData();
  const [tasks, setTasks] = useState([]);
  const { user } = use(AuthContext);
  const [bidCountInModal, setBidCountInModal] = useState(0);

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

        fetch(`https://a10-freelance-task-marketplace-server-ph.vercel.app/tasks/${_id}`, {
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

  const handleViewBids = (taskId) => {


    //  Fetch bid count from DB for selected task
    fetch(`https://a10-freelance-task-marketplace-server-ph.vercel.app/bids?taskId=${taskId}`)
      .then((res) => res.json())
      .then((data) => {
        setBidCountInModal(data.length);
        document.getElementById("bid_modal").showModal();
      })
      .catch((err) => {
        console.error("Failed to fetch bid count", err);
        setBidCountInModal(0);
        document.getElementById("bid_modal").showModal();
      });
  };
  return (
    <div className="sm:px-20 px-4 py-12 min-h-screen bg-amber-50 dark:text-white dark:bg-gray-800">
      <Helmet>
        <title>Posted Tasks - QuickGig</title>
      </Helmet>
      <h2 className="text-xl font-semibold mb-4">My Posted Tasks</h2>

      {/* Scrollable wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-700">
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
                <tr key={task._id} className="text-center">
                  <td className="px-4 py-2 border">{task.userName}</td>
                  <td className="px-4 py-2 border">{task.category}</td>
                  <td className="px-4 py-2 border">{task.title}</td>
                  <td className="px-4 py-2 border">${task.budget}</td>
                  <td className="px-4 py-2 border gap-2 flex flex-wrap justify-center items-center">
                    <Link
                      to={`/dashboard/update-task/${task._id}`}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 cursor-pointer"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 cursor-pointer"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleViewBids(task._id)}
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
      {/* Modal for viewing bids */}
      <dialog id="bid_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold dark:text-gray-800 text-lg mb-2">Bids for This Task</h3>
          <p className="py-2 dark:text-gray-600">
            Total Bids:{" "}
            <span className="font-semibold text-blue-600">
              {bidCountInModal}
            </span>
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-green-600">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>

  );
};

export default PostedTasks;

