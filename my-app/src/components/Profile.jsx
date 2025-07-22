import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../functions/utils";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="profile-page">
      <ProfileHeader />

      <div className="profile-container">
        <div className="profile-left">
          <div className="initial-circle">{user.name?.charAt(0)}</div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>

        <div className="profile-right">
          <h3>Account Details</h3>
          <div className="form-grid">
            <div>
              <label>Name</label>
              <input type="text" value={user.name} disabled />
            </div>
            <div>
              <label>Email</label>
              <input type="text" value={user.email} disabled />
            </div>
            <div>
              <label>Phone</label>
              <input type="text" value={user.phone || ""} disabled />
            </div>
            <div>
              <label>Department</label>
              <input type="text" value={user.department || ""} disabled />
            </div>
            <div>
              <label>Role</label>
              <input type="text" value={user.role || ""} disabled />
            </div>
            <div>
              <label>Address</label>
              <input type="text" value={user.address || ""} disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
