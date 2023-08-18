import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const Submit = () =>alert("Your data has been sent");

  return (
    <Form className="container w-75 mt-5 mb-5">
      <h2 className="text-center heaad pb-3">Contact Us</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Country</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Egypt</option>
            <option>Dubai</option>
            <option>Saudi Arbia</option>
            <option>Palestine</option>
            <option>Europe</option>
            <option>Malli</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="text-center">
        <Button variant="dark " type="submit" className="w-25" onClick={Submit}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default Contact;
