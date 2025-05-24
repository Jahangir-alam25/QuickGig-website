import { useState, useEffect, use } from "react";
import { updateProfile } from "firebase/auth";


import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import { Helmet } from "react-helmet-async";


const MyProfile = () => {

  const { user } = use(AuthContext);

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");


  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();


    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!user) return <p>Please log in to view your profile.</p>;

  return (
    <div className="bg-amber-50 dark:bg-gray-800 py-12">
      <div className="max-w-md mx-auto p-4 shadow-lg rounded-lg border dark:bg-gray-800 dark:text-white bg-white space-y-4">
      <Helmet>
        <title>My Profile - QuickGig</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center">My Profile</h2>

      <div className="text-center">
        <img
          className="w-28 h-28 mx-auto rounded-full"
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt={user.displayName || "User"}
        />
        <p className="mt-2 text-lg font-semibold">{user.displayName}</p>
        <p className="text-sm dark:text-gray-300 text-gray-600">{user.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            className="w-full border px-3 py-2 rounded"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Save Changes
        </button>
      </form>


    </div>
    </div>
  );
};

export default MyProfile;
