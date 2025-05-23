import React, {  use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const TaskDetails = () => {
  const { user } = use(AuthContext);
  const task = useLoaderData();
  const {
    _id,
    userName,
    userEmail,
    title,
    category,
    description,
    deadline,
    budget,
  } = task;

  const [bidCount, setBidCount] = useState(0);

  // 1️⃣ Load existing bid count for this task
  useEffect(() => {
    fetch(`http://localhost:3000/bids?taskId=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBidCount(data.length); // Count of bids for this task
      })
      .catch((err) => {
        console.error("Failed to load bid count", err);
      });
  }, [_id]);

  // 2️⃣ Handle "Bid" button click
  const handleBid = () => {
    const newBid = {
      taskId: _id,
      userEmail: user?.email,
      userName: user?.displayName || "Anonymous",
      bidTime: new Date().toISOString(),
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Bid stored:", data);
        setBidCount((prev) => prev + 1); // Update local count
      })
      .catch((err) => {
        console.error("Failed to submit bid", err);
      });
  };

  return (
 <div className="bg-gradient-to-r from-[#e0f2ff] to-[#f0f9ff]">
   <h1 className="text-3xl font-bold pt-4 text-center">Task Details</h1>
      <p className="text-center"><span className="font-semibold">📊 Total Bids:</span> <span className="text-blue-700 font-semibold">You bid for {bidCount} opportunities.</span></p>
  <div className=" min-h-screen flex justify-center items-center p-6">
 
  <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-blue-100 hover:shadow-blue-300 transition-all duration-300 p-6">
    <div className="mb-4 text-center">
      <h2 className="text-3xl font-extrabold">🚀 {title}</h2>
      <p className="text-gray-500">Posted by {userName}</p>
    </div>
    
    <div className="space-y-4 text-gray-700">
      <p><span className="font-semibold">📂 Category:</span> {category}</p>
      <p><span className="font-semibold">📝 Description:</span> {description}</p>
      <p><span className="font-semibold">⏰ Deadline:</span> <span className="text-red-500 font-medium">{deadline}</span></p>
      <p><span className="font-semibold">💵 Budget:</span> <span className="text-green-600 font-bold">${budget}</span></p>
      <p><span className="font-semibold">📧 Email:</span> {userEmail}</p>
   
    </div>

    <div className="mt-6 text-center">
      <button
        onClick={handleBid}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
      >
        ✋ Place a Bid
      </button>
    </div>
  </div>
</div>
 </div>


  );
};

export default TaskDetails;

