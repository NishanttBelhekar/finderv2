import React, { useEffect, useState } from "react";
import { useProfiles } from "../context/ProfileContext";

const ManageEmp = () => {
  const { profiles, addProfile, updateProfile, deleteProfile } = useProfiles();
  console.log("Profiles initialized:", profiles);
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [profilePic, setProfilePic] = useState(""); // Renamed to profilePic
  const [coordinates, setCoordinates] = useState("");
  const [editingProfile, setEditingProfile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const coords = coordinates
      .split(",")
      .map((coord) => parseFloat(coord.trim()));

    const profileData = {
      id: editingProfile ? editingProfile.id : Math.random(),
      name,
      info,
      profilePic, // Updated to use profilePic
      address: coords.length === 2 ? coords : [0, 0],
    };

    if (editingProfile) {
      updateProfile(profileData);
      setEditingProfile(null);
    } else {
      addProfile(profileData);
    }

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setInfo("");
    setProfilePic(""); // Reset profilePic
    setCoordinates("");
  };

  const handleEdit = (profile) => {
    setName(profile.name);
    setInfo(profile.info);
    setProfilePic(profile.profilePic); // Use profilePic for editing
    setCoordinates(profile.address.join(", "));
    setEditingProfile(profile);
  };

  return (
    <div className="p-7 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">
        {editingProfile ? "Edit Profile" : "Add Employee"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block">Info</label>
          <input
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            required
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block">Profile Picture URL</label>
          <input
            value={profilePic} // Use profilePic here
            onChange={(e) => setProfilePic(e.target.value)}
            required
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block">Coordinates (lat, long)</label>
          <input
            value={coordinates}
            onChange={(e) => setCoordinates(e.target.value)}
            placeholder="e.g., 12.9716, 77.5946"
            required
            className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editingProfile ? "Update Profile" : "Add Profile"}
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6">Employee List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {profiles.map((profile) => (
          <li
            key={profile.id}
            className="bg-gray-100 p-4 rounded-lg shadow transition duration-200 hover:bg-gray-200"
          >
            <img
              src={profile.profilePic}
              alt={profile.name}
              className="h-32 w-32 rounded-full mb-2 object-cover"
            />
            <h3 className="font-semibold">{profile.name}</h3>
            <p className="text-sm text-gray-600">{profile.info}</p>
            <p className="text-sm text-gray-500">
              Coordinates: {profile.address.join(", ")}
            </p>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => handleEdit(profile)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProfile(profile.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageEmp;
