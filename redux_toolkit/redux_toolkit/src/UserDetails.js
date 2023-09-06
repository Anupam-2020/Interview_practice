import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/userSlice";
import Chance from "chance";
import './UserDetails.css'

function UserDetails() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const fakeUserData = () => {
    // console.log(Chance().name({middle: true}))
    return Chance().name({ middle: true });
  };

  const addUser = () => {
    dispatch(actions.addUser(fakeUserData()));
  };

  const removeUser = (index) => {
    console.log(index)
    dispatch(actions.remove(index))
  }

  const deleteAllUsers = () => {
    dispatch(actions.deleteUsers());
  }

  return (
    <>
      <p>List of users</p>
      <button onClick={addUser}>Add User</button>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index} className="list_div">
            <li>{user}</li>
            <button onClick={() => removeUser(index)}>delete</button>
            </div>
          )
        })}
      <hr />
      <button onClick={deleteAllUsers}>Clear all users</button>
    </>
  );
}

export default UserDetails;
