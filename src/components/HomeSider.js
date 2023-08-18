import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Slider() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="bg" src={require("../images/heroback.jpg")} alt="" />
          <img
            className="image"
            src={require("../images/hero.jpg")}
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <img
              src={require("../images/text.png")}
              className="w-75"
              alt=""
            ></img>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="w-100"
            src={require("../images/cake2.webp")}
            alt="First slide"
          />
          <Carousel.Caption className="caption more">
            <h4 className="text-white mb-4"> Cakes Sections</h4>
            <p className="fs-1 text-white">TUTTI FRUTI</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="bg"
            src={require("../images/heroback.jpg")}
            alt=""
          ></img>
          <img
            className="image "
            src={require("../images/about.png")}
            alt="Second slide"
          />
          <Carousel.Caption className="caption more">
            <h1 className="text-white mb-4">Ice Cream</h1>
            <p className="text-white fs-3"> CHOOSE YOUR PLEASURE</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="w-100"
            src={require("../images/slider.webp")}
            alt="Third slide"
          />
          <Carousel.Caption className="caption"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="parentbox">
        <div className="container boxhome text-end d-flex align-item-center justify-content-around">
          <div className="boxhome1 col-4 text-center ms-5">
            <h2> Our Promise </h2>
            <p className="parag_one">FOR THE SWEETEST MOMENTS IN LIFE</p>
            <p>
              Bringing you traditional recipes and innovative ideas in order to
              bring a little piece of France to you. With this in mind, we
              produce the most prestigious and refined fresh desserts and
              patisserie with extraordinary taste, texture and sensation. We
              source only the finest ingredients, fresh fruit and produce at the
              peak of each season, French and Belgian chocolate and European
              style butter are a few examples. Our bakers work around the clock
              creating products “from scratch”. This allows us to control the
              quality and integrity of everything we offer. Our talented
              designers and decorators hand draw and hand sculpt using butter
              cream, sugar paste, marzipan, chocolate and fruit. Made only with
              the finest ingredients and items that fulfill the promise of a
              fine culinary experience.
            </p>
          </div>

          <div className="boxhome2 col-7 pt-5 ">
            <img
              src={require("../images/homecake.webp")}
              alt=""
              className="w-100 m-1 rounded-3"
            />
            <img
              src={require("../images/homedounts.webp")}
              alt=""
              className="w-100 m-1 rounded-3"
            />
            <img
              src={require("../images/homecupcakes.webp")}
              alt=""
              className="w-100 m-1 rounded-3"
            />
            <img
              src={require("../images/homeice.webp")}
              alt=""
              className="w-100 m-1 rounded-3"
            />
          </div>
        </div>
      </div>

      <div class="video">
        <video autoPlay loop muted className="">
          <source src={require("../images/video.mp4")} type="video/mp4" />
        </video>
        <div class="hometext">
          <p className="mb-5  fs-4">Its All You Need</p>
          <Button variant="dark">See More</Button>
        </div>
      </div>

      <div className="container mb-5 mt-5 contact">
        <h2 className="text-center mt-5 ">Contact Us</h2>
        <Form className="w-100">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="name" className="" />
          </Form.Group>
          <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your Message"/>
          </Form.Group>
          <div className="text-center ">

          <Button className="w-25" variant="dark">Submit</Button>
          </div>

        </Form>
      </div>
    </>
  );
}
export default Slider;
