import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Exercise2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5').then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      {users.map((user, index) => (
        <div key={index}>
          <span>
            {user.name.title} {user.name.first} {user.name.last}
          </span>
          <p></p>
          <img
            src={user.picture.thumbnail}
            alt={user.first}
            width="40"
            height="40"
          />
        </div>
      ))}
    </div>
  );
}
