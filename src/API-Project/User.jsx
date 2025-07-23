// User.jsx
import React from 'react';
import './User.css';

const User = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <h3>{user.login}</h3>
      <a href={user.html_url} target="_blank" rel="noreferrer">Profile</a>
    </div>
  );
};

export default User;
