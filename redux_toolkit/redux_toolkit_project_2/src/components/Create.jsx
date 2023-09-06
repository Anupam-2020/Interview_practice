import React, { useState } from "react";
import "./Create.css";
import { useDispatch } from "react-redux";
import { createUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function Create() {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        name: '',
        gender: '',
        email: '',
        age: 0
    });
    const navigate = useNavigate();

    

    const addUser = (event) => {
        setUser({...user, [event.target.name] : event.target.value})
        // console.log(user);
    }

    const submitForm = (e) => {
        e.preventDefault();

        // if(user.age === 0 || user.email === '' || user.gender === '' || user.name === '') {
        //     console.log('Field is missing')
        // } else {
        //     dispatch(createUser(user))
        //     navigate('/read')
        // }

        (user.age === 0 || user.email === '' || user.gender === '' || user.name === '') ? console.log('Field is missing') : dispatch(createUser(user)) && setTimeout(() => {navigate('/read')},0)
        setUser({
            name: '',
            gender: '',
            email: '',
            age: 0
        })
    }

  return (
    <div className="create_form">
      <form className="form_parent_class">
        <div className="input_box">
          <label className="name_input" htmlFor="name">
            Name
          </label>
          <input className="input" name="name" type="text" onChange={addUser} value={user.name}/>
        </div>
        <div className="input_box">
          <label className="name_input" htmlFor="email">
            Email
          </label>
          <input className="input" name="email" type="email" onChange={addUser} value={user.email}/>
        </div>
        <div className="input_box age">
          <label className="name_input" htmlFor="age">
            Age
          </label>
          <input className="input" name="age" type="number" onChange={addUser} value={user.age}/>
        </div>
        <div className="input_box gender">
          <input type="radio" name="gender" onChange={addUser} value='m'/>
          <label>Male</label>
        </div>
        <div className="input_box gender">
          <input type="radio" name="gender" onChange={addUser} value='f'/>
          <label>Female</label>
        </div>

        <button className="form_button" type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
