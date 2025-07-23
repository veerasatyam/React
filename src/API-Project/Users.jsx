// Users.jsx
import React, { useEffect, useState } from 'react';
import User from './User'; // import the separate User component
import './Users.css'; // optional styling

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  if (isLoading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <section className="users-container">
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
