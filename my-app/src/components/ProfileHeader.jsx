import React from 'react';
import { useNavigate } from 'react-router-dom';
import { clearUserFromStorage } from '../functions/Storage';

function ProfileHeader({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserFromStorage();
    navigate('/');
  };

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="profile-header">
      <div className="header-left">
        <div className="small-profile-photo">{initials}</div>
        <div className="header-username">{user.username}</div>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ProfileHeader;