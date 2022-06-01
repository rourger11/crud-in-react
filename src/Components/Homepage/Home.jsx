import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import './Table.css'
// import Buttons from "./Buttons";
import { faEye,faEdit,faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Viewbutton.css'
import { NavLink,Link} from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  

  const getAnswer = async () => {
    const response = await axios.get("http://localhost:3003/user");
    const userData = (response.data);

    setData(userData);
  };

  useEffect(() => {
    getAnswer();
  }, []);
 


  //for Delete user
  const deleteUser= async id => {
await axios.delete(`http://localhost:3003/user/${id}`)
getAnswer();

  }


  return (
    <div className="tabledata">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>User Name</th>
            <th>E-Mail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {data.map((user, key) => (
            <tr key={key}>
              <td> {user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              
              <div className="action d-flex">
                <div className="view">
                <NavLink to={`/Userdetail/${user.id}`} className="eye"><FontAwesomeIcon
                    icon={faEye}
                  /></NavLink>
                </div>
                <div className=" edit">
               <NavLink to={`/edit/${user.id}`} className="pen"> <FontAwesomeIcon
                    icon={faEdit}
                  /></NavLink>
                </div>
                <div className="delete">
             <Link to={"/Home"} className="trash"><FontAwesomeIcon
                    icon={faTrash} onClick={()=>deleteUser(user.id)}
                  /> </Link> 
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
