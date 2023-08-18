import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./products.css";
import { Link } from "react-router-dom";
import React from "react";
import App from "../App";
import { useState } from "react";

// function Cards(props ,HandleClick) {
  const Cards =({item ,HandleClick})=> {

    const {title , imgSrc ,price, id} =item;
    

    


  

  // const { product } = props; //عشان اعرف استدعي الحاجات


  return (
    <>
      <Card style={{ width: "18rem" }} className="cart">
        <Card.Img variant="top" src={imgSrc} className="productImage" />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: {price} EGP</Card.Text>
          <Link
            variant="dark"
            className="m-1 btn bg-dark text-white"
            to={`/shop/${id}`}
          >
            Details
          </Link>
          <Button variant="dark" className="m-1 btn" onClick={()=>HandleClick(item)} >
            Buy
          </Button>
        </Card.Body>
      </Card>

      
      {/* <Card style={{ width: "18rem" }} className="cart">
        <Card.Img variant="top" src={product.imgSrc} className="productImage" />
        <Card.Body className="text-center">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price: {product.price} EGP</Card.Text>
          <Link
            variant="dark"
            className="m-1 btn bg-dark text-white"
            to={`/shop/${product.id}`}
          >
            Details
          </Link>
          <Button variant="dark" className="m-1 btn" onClick={()=>HandleClick(product)} >
            Buy
          </Button>
        </Card.Body>
      </Card> */}
    </>
  );
}
export default Cards;
