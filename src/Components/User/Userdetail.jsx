import React,{useState,useEffect} from 'react'
import axios from "axios";
import {useParams} from 'react-router-dom'
import {ListGroup } from "react-bootstrap";


export default function Userdetail() {
  const[user,setUser]=useState({
    id:"",
    name:"",
    username:"",
    email:""
  });
  const {id} = useParams();

  useEffect(()=>{
    userData();
  })

  const userData = async ()=>{
    const result= await axios.get(`http://localhost:3003/user/${id}`)
    setUser(result.data)
}

  return (
<ul className='view1'>
  <h1> ID: {id}</h1>
  <ListGroup.Item><b>Name:</b> {user.name}</ListGroup.Item>
  <ListGroup.Item><b>User Name:</b> {user.username}</ListGroup.Item>
  <ListGroup.Item><b>Email id:</b> {user.email}</ListGroup.Item>
</ul>  )
}
