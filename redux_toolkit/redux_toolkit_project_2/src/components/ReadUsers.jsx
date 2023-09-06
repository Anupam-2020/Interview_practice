import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../store/userSlice";
import "./ReadUsers.css";

function ReadUsers() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      {users.map((user, index) => {
        return (
          <div key={user.id}>
            <div className="userData">
              <p>Name :- {user.name}</p>
              <p>Email :- {user.email}</p>
              <p>Age :- {user.age}</p>
              <p>Gender :-{user.gender}</p>
            </div>
            <div className="userData">
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ReadUsers;
