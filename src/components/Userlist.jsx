import React from "react";
import { useNavigate } from "react-router-dom";

const Userlist = () => {
  const navigate = useNavigate();
  const users = [
    { _id: 1, name: "John", address: "kathmandu" },
    { _id: 2, name: "Dipak", address: "Pokhara" },
    { _id: 3, name: "Raj", address: "Biratnagar" },
    { _id: 4, name: "Rajesh", address: "Dharan" },
    { _id: 5, name: "Sanjaya", address: "Butwal" },
  ];
  const handleUser = (userId, userName) => {
    console.log("User clicked", userName);
    navigate(`/${userId}/${userName}`);
  };
  return (
    <div className="container">
      <h4>user list </h4>
      <ul>
        {users.map((user) => {
          return (
            <li key={user._id} onClick={() => handleUser(user._id, user.name)}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Userlist;
