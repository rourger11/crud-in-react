import React, { useState, useEffect} from "react";
// import Home from '../Homepage/Home'
import axios from "axios";
import "./Newusr.css";
import { useNavigate } from "react-router-dom";

export default function Newuser() {
  let history = useNavigate();

   const initialValue ={ id:"", name:"", username:"", email:"" } 
   const [user, setUser] = useState(initialValue);
   const [usererror, setUsererror] = useState({});
   const [submitted, setsubmitted] = useState(false);



  const newInput = (e) => {
    const{name,value}=e.target;
    setUser({...user,[name]:value});
    setUsererror(initialValue)

  };

 
  const addNewUser = (e) => {
    e.preventDefault();

setUsererror(validation(user))
    setsubmitted(true)

  };
  

  useEffect( ()=>{
    if(Object.keys(usererror).length === 0 && submitted ){
      async function data (){
      await  axios.post("http://localhost:3003/user",user);
        history("/Home");
      }
      data()
    }
   
  },[usererror])

  const validation=(values)=>{
    const errors={};
    if(!values.id ){
      errors.id="*id is required"
    }
    
  
    if(!values.name){
      errors.name="*name is required"
    }
    if(!values.username){
      errors.username="*username is required"
    }
    if(!values.email){
      errors.email="*email is required"
    }
    return errors;
  }

  return (
    <div className="userform">
      <form onSubmit={addNewUser}>
        <h1 className="head">ADD NEW USER</h1>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            name="id"
            value={user.id}
            placeholder="Enter id"
            onChange={newInput}
          />
          <p>{usererror.id}</p>

        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            placeholder="Enter name"
            onChange={(e) => newInput(e)}
          />
          <p>{usererror.name}</p>
        </div>
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            placeholder="Enter User name"
            onChange={(e) => newInput(e)}
          />
          <p>{usererror.username}</p>

        </div>
        <div className="form-group">
          <input
            type="text"
            class="form-control"
            name="email"
            value={user.email}
            placeholder="Enter email"
            onChange={(e) => newInput(e)}
          />
          <p>{usererror.email}</p>
        </div>
        <button type="submit" id="userbutton" className="btn btn-success">
          Add User
        </button>
      </form>
    </div>
  );
}
