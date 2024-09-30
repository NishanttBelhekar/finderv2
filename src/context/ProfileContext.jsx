// ProfileContext.jsx
import React, { createContext, useState, useContext } from "react";
import profilesData from "../mockData/data"; // Make sure this path is correct

const ProfileContext = createContext();

export const useProfiles = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfiles must be used within a ProfileProvider");
  }
  return context;
};

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(profilesData);

  const addProfile = (profile) => {
    setProfiles((prevProfiles) => [...prevProfiles, profile]);
  };

  const updateProfile = (updatedProfile) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
  };

  const deleteProfile = (id) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== id)
    );
  };

  return (
    <ProfileContext.Provider
      value={{ profiles, addProfile, updateProfile, deleteProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
