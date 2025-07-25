import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage, logout } from "../functions/utils";
import getInitials from "../functions/getInitials";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const user = getUserFromLocalStorage();
  const initials = getInitials(user?.name);

  const handleLogout = () => {
    logout();       
    navigate("/"); 
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
