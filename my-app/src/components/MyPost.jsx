import React, { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "../functions/utils";
import { useNavigate } from "react-router-dom";
import "../App.css";

const MyPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const user = getUserFromLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const userPosts = data.filter((post) => post.userId === user.id);
        setPosts(userPosts);
        setLoading(false); 
      })
      .catch(() => {
        setPosts([]);
        setLoading(false); 
      });
  }, [user]);

  const goBack = () => {
    navigate("/profile");
  };

  return (
    <div className="mypage-container">
      <button onClick={goBack} className="back-button">
        ← Back to Profile
      </button>

      <h2>{user?.name}'s Posts</h2>

      {loading ? (
        <p>Loading posts...</p> 
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className="post-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPage;
