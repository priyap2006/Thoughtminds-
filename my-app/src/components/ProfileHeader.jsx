import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage, logout } from "../functions/utils";
import getInitials from "../functions/getInitials";
import "../Post.css";
import "../App.css";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const user = getUserFromLocalStorage();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const goToMyPost = () => {
    navigate("/mypost");
  };

  const goToAllPost = () => {
    navigate("/allpost");
  };

  return (
    <header className="profile-header">
      <div className="header-left">
        <div className="small-profile-photo">{getInitials(user?.name)}</div>
        <div className="header-username">{user?.name}</div>
      </div>


      <div className="right-section button-group">
        <button onClick={goToMyPost}>My Post</button>
        <button onClick={goToAllPost}>All Post</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default ProfileHeader;
