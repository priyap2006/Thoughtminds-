import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage, logout } from "../functions/utils";

const getInitials = (name) => {
  if (!name) return "";
  const names = name.trim().split(" ");
  return names.map(n => n[0].toUpperCase()).join("").slice(0, 2);
};

const ProfileHeader = () => {
  const navigate = useNavigate();
  const user = getUserFromLocalStorage();
  const initials = getInitials(user?.name);

  const handleLogout = () => {
    logout();       
    navigate("/login"); 
  };

  return (
    <div className="profile-header">
      <div className="header-left">
        <div className="small-profile-photo">{initials}</div>
        <div className="header-username">{user?.name}</div>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfileHeader;

