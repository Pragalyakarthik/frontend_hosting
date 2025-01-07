import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './User.css';
import { Link } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('https://hosting-backend-1-b3ho.onrender.com/api/user/fetch')
      .then(result => {
        setUser(result.data.users);
      })
      .catch(err => { console.log(err) });
  }, []);

  const del = (id) => {
    axios.delete(`https://hosting-backend-1-b3ho.onrender.com/api/user/delete/${id}`)
      .then(result => {
        console.log("User deleted");
      });
  };

  return (
    <div className="background-container">
      <div className="content">
        <div className="header-container">
          <h1>User List</h1>
          <Link to="/create" className="create-user-link">Create Users</Link>
        </div>

        <div className="cards-container">
          {user.map((users) => (
            <div key={users._id} className="card">
              <h2>{users.name}</h2>
              <p>Email: {users.email}</p>
              <p>Address: {users.address}</p>
              <Link to={`/update/${users._id}`}>Update</Link>
              <button onClick={(e) => del(users._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default User;
