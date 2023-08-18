import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";


function MyNav({size , setShow}) {
  return (
    <Navbar bg="light" data-bs-theme="light" className="navigation shadow">
      <Container className="justify-content-between nav">
        <Navbar.Brand to="/home">
          <img
            className="w-50"
            src={require("../images/logo.png")}
            alt="logo"
          ></img>
        </Navbar.Brand>
        <Nav className="m-0">
          <NavLink to="/home" className="nav-link mt-1 ms-1 links fs-5">
            Home
          </NavLink>
          <NavLink to="/shop" className="nav-link mt-1 ms-1 fs-5" onClick={()=>setShow(true)}>
            Shop
          </NavLink>
          <NavLink to="/about" className="nav-link mt-1 ms-1 fs-5">Users </NavLink>
          <NavLink to="/contact" className="nav-link mt-1 ms-1 fs-5">Contact Us </NavLink>
          <NavLink className="nav-link mt-1" to="/cart" onClick={()=>setShow(false)}>
            <span class="position-absolute translate-middle badge rounded-circle  ">
              {size}
            </span>
            <FontAwesomeIcon
              icon={faCartShopping}
              className=" icon ms-1"
            ></FontAwesomeIcon>
          </NavLink>
          <NavLink className="nav-link mt-1" to="/form">
            <Button variant="dark" className='bttn ms-1'>Login In</Button>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
