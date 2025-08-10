import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setNewName(parsedUser.name);
      setProfileImage(parsedUser.profileImage || null);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setProfileImage(URL.createObjectURL(file));
  };

  const saveProfile = async () => {
  let uploadedImageUrl = profileImage;

  if (selectedFile) {
    const formData = new FormData();
    formData.append("image", selectedFile);

    const uploadRes = await fetch(`${import.meta.env.VITE_API_URL}/upload-image`, {
      method: "POST",
      body: formData,
    });

    if (!uploadRes.ok) {
      alert("Image upload failed");
      return;
    }

    const uploadData = await uploadRes.json();
    uploadedImageUrl = uploadData.imageUrl;
  }

  const res = await fetch(`${import.meta.env.VITE_API_URL}/profile/${user._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newName, profileImage: uploadedImageUrl }),
  });

  if (!res.ok) {
    alert("Profile update failed");
    return;
  }

  const updatedData = await res.json();
  setUser(updatedData.user);
  localStorage.setItem("user", JSON.stringify(updatedData.user));
  setIsEditing(false);
  setSelectedFile(null);
  window.dispatchEvent(new Event("userUpdated"));
};


  if (!user) return <p>Redirecting to login...</p>;

  return (
    <main className="max-w-md mx-auto mt-24 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="flex flex-col items-center mb-6">
        <img
          src={profileImage || "https://via.placeholder.com/120?text=Profile"}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-yellow-400 mb-3"
        />
        {isEditing && (
          <button
            onClick={() => fileInputRef.current.click()}
            className="bg-yellow-500 px-3 py-1 rounded text-yellow-900"
          >
            Change Picture
          </button>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-yellow-700 mb-1">Name</label>
        {isEditing ? (
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border border-yellow-400 rounded px-3 py-2 w-full"
          />
        ) : (
          <p className="text-yellow-700 text-lg">{user.name}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block font-semibold text-yellow-700 mb-1">Email</label>
        <p>{user.email}</p>
      </div>

      <div className="flex gap-4">
        {isEditing ? (
          <>
            <button
              onClick={saveProfile}
              className="bg-yellow-500 text-yellow-900 px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setNewName(user.name);
                setProfileImage(user.profileImage);
                setSelectedFile(null);
              }}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-yellow-900 px-4 py-2 rounded"
          >
            Edit Profile
          </button>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
            window.dispatchEvent(new Event("userUpdated")); 
          }}
          className="bg-red-500 text-white px-6 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </main>
  );
};

export default Profile;