import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-dark">
      <Navbar bg="dark" data-bs-theme="dark" className="">
        <Container className="containerLinks">
          <Navbar.Brand className="col-3 mt-4">
            <img
              className="logo "
              src={require("../images/text.png")}
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Nav className="me-auto  ">
            <h3 className="text-white mt-4 ">QUICK LINK</h3>
            <NavLink to="/home" className="text-white nav-link">
              Home
            </NavLink>
            <NavLink to="/shop" className="text-white nav-link">
              Shop
            </NavLink>
            <Nav.Link className="text-white">About </Nav.Link>
            <Nav.Link className="text-white">Services </Nav.Link>
            <Nav.Link className="text-white">Contact Us </Nav.Link>
          </Nav>

          <Nav className="me-auto ">
            <h3 className="text-white mt-4">CONTACT US</h3>
            <Nav.Link className="text-white ">239.481.7262</Nav.Link>
            <Nav.Link className="text-white">2168 Cairo</Nav.Link>
            <Nav.Link className="text-white">Egypt </Nav.Link>
            <NavLink to="/home" className="text-white nav-link">
              WWW.Creamy.Com
            </NavLink>
          </Nav>
          <div className="text-white mt-4">
            <h3>SUBSCRIBE NEWSLETTER</h3>
            <p className="text">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
              EIUSMOD TEMPOR
            </p>
          </div>
        </Container>
      </Navbar>

      <h3 className="text-white m-0 mt-3 pb- text-center "> Hend Nasser </h3>
    </div>
  );
}
export default Footer;
