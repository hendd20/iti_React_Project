import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

function AddUser() {
  const api_user = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newUserName , setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");


  let navigate  = useNavigate();

  const newUser = () => {
    const name = newName.trim();
    const user_name = newUserName.trim();
    const email = newEmail.trim();
    const phone = newPhone.trim();



    if (name && email && phone) {
      fetch(api_user, {
        method: "POST",
        body: JSON.stringify({
          name,
          user_name,
          email,
          phone,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers([...users, data]);
          setNewName("");
          setNewEmail("");
          setNewUserName("");
          setNewPhone("");
          alert("User added successfully");
          navigate('/about');
        });
    }
  };

  return (


    
    <div className="container w-50">
        


      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control
            type="name"
            placeholder="Enter User Name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control
            type="number"
            placeholder="Enter Phone"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </Form.Group>

        <Button onClick={newUser}>Add </Button>
      </Form>
    </div>
  );
}

export default AddUser;
