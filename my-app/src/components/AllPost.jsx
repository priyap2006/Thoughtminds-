import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserFromLocalStorage } from '../functions/utils';
import getInitials from '../functions/getInitials';
import '../App.css';
import '../Post.css';

const AllPage = () => {
  const user = getUserFromLocalStorage();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users'),
        ]);

        const postsData = await postsRes.json();
        const usersData = await usersRes.json();

        const otherPosts = postsData.filter(post => post.userId !== user.id);
        setPosts(otherPosts);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user.id]);

  
  const getUsername = (userId) => {
    const foundUser = users.find(u => u.id === userId);
    return foundUser ? foundUser.username : "Unknown";
  };

  return (
    <div className="mypost-container">
      <button className="back-button" onClick={() => navigate('/profile')}>
        ← Back to Profile
      </button>
      <h2>All Posts</h2>

      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className="post-grid">
          {posts.map(post => (
           <div className="postcard-allpost" key={post.id}>
              <div className="user-info">
                <div className="small-profile-photo">
                  {getInitials(getUsername(post.userId))}
                </div> 
                <div className="username">
                  {getUsername(post.userId)}
                </div>
              </div>
              <div className="post-title">
                {post.title}
              </div>
              <div className="post-body">
                <p>{post.body.length > 100 ? post.body.slice(0, 150) + '...' : post.body}</p>
              </div>
            </div>

          ))}
        </div>
      )}
    </div>
  );
};

export default AllPage;
