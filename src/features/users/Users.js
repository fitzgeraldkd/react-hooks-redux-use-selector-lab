import React from "react";
// add any needed imports here
import { useSelector } from 'react-redux';

function Users() {
  const users = useSelector(state => state.users);

  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
        {users.map(user => <div key={user.username}>{user.username}</div>)}
      </ul>
      <div>Total Users: {users.length}</div>
    </div>
  );
}

export default Users;
