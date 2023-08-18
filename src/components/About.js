import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Accordion from "react-bootstrap/Accordion";
import "./about.css";
import Form from "react-bootstrap/Form";
import { EditableText } from "@blueprintjs/core";


function About() {
  const api_user = "https://jsonplaceholder.typicode.com/users";
  const [users, setUser] = useState([]);

  // Post user;
  const [newName, setNewName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

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
          setUser([...users, data]);
          setNewName("");
          setNewEmail("");
          setNewUserName("");
          setNewPhone("");
          alert("User added successfully");
        });
    }
  };

  //put user
  const updateUser = (id) => {
    const user = users.find((user) => user.id === id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json; charset=UTF=8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        alert("Updated Successfully ");
      });
  };
  const onChangeHandler = (id, key, value) => {
    setUser((values) => {
      return values.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
    });
  };

  // Delete User
  const getAllUser = () => {
    fetch(api_user)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };
  useEffect(() => {
    getAllUser();
  }, []);

  const deleteUser = (id) => {
    Swal.fire({
      title: "You Are Sure To Delete this User",
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setUser((value) => {
              return value.filter((item) => item.id !== id);
            });
          });
      }
    });
  };

  return (
    <div className="about">
      {/* <Link to='/about/add'>Add</Link> */}
      <div className="container pt-5">
        <Table responsive className="">
          <thead className="">
            <tr className="head">
              <th>ID</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <EditableText
                      value={user.name}
                      onChange={(value) =>
                        onChangeHandler(user.id, "name", value)
                      }
                    />
                  </td>

                  <td>
                    <EditableText
                      value={user.email}
                      onChange={(value) =>
                        onChangeHandler(user.id, "email", value)
                      }
                    />
                  </td>

                  <td>{user.phone}</td>

                  <td className="btnCurd d-flex">
                    <Button onClick={() => deleteUser(user.id)} variant="dark">
                      Delete
                    </Button>
                    <Link to={`/about/${user.id}`} className="mx-2">
                      <Button variant="secondary">View</Button>
                    </Link>
                    <Button variant="dark" onClick={() => updateUser(user.id)}>
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <button className="btnAdd">Add User</button>
            </Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
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
                <div className="text-center ">
                  <Button
                    onClick={newUser}
                    className="px-5 fs-5"
                    variant="dark"
                  >
                    Submit{" "}
                  </Button>
                </div>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
export default About;
