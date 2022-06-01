import React,{useState,useEffect} from 'react'
// import Home from '../Homepage/Home'
import axios from "axios";
import "./Newusr.css"
import {useNavigate,useParams} from 'react-router-dom'

export default function Edituser() {

  let history=useNavigate();
  const {Id} = useParams();
  const[user,setUser]=useState({
    id:"",
    name:"",
    username:"",
    email:""
  });
 
const {id,name,username,email}=user;

  const newInput= e =>{
    setUser({...user,[e.target.name]:e.target.value})
  };

  useEffect( () => {
    userData();
},[]);

const addNewUser= async e=>{

  e.preventDefault();
  await axios.put(`http://localhost:3003/user/${Id}`,user)
  history("/Home")
}


  const userData = async ()=>{
      const result= await axios.get(`http://localhost:3003/user/${Id}`)
      setUser(result.data)
  }

  return (
    <div className='userform'>
      <form onSubmit={e=>addNewUser(e)}>
        <h1 className='head'>EDIT USER</h1>
        <div class="form-group">
          <input type="text" class="form-control" name="id" id=""  value={id} placeholder="Enter id" onChange={e=>newInput(e)} />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="name" id="" value={name} placeholder="Enter name" onChange={e=>newInput(e)} />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="username" id="" value={username} placeholder="Enter User name" onChange={e=>newInput(e)} />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="email" id=""  value={email}placeholder="Enter email" onChange={e=>newInput(e)} />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <button type="submit" id='userbutton' className="btn btn-success">Update</button>
      </form>
    </div>)
}
