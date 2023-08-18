import React, { useEffect, useState } from "react";
import { products } from "../productsData";
import Button from "react-bootstrap/esm/Button";
import './cart.css'

 function Cart ({ cart, setCart ,handleChange}) {
  const [price, setPrice] = useState(0);

  const handlePrice =()=>{
    let ans=0;
    cart.map((item)=>(
      ans+=item.quantity * item.price
    ))
    setPrice(ans);
  }

  const handleRemove = (id)=>{
    const arr=cart.filter((item)=>item.id !== id)
    setCart(arr);

  }

  useEffect(()=>{
    handlePrice();
  })

  return (
    <>
      <div className="container pt-5 pb-5 carts">
        <h2 className="text-center cart_head">Cart Products </h2>
        <hr></hr>
      <div className="pt-2 pb-3">
        {cart?.map((item) => (
          <div key={item.id} className="d-flex align-items-center cart_box p-3">
              <img src={item.imgSrc} alt="" className=" cart_img"/>

            <div className="cart_para ">
              <p className="fs-4 ps-3">{item.title}</p>
              <p className="fs-5 ps-3">Price : {item.price}</p>
            </div>

            <div className="Butns ms-auto">
              <Button onClick={()=>handleChange(item , +1)} className="m-2 cart_Butn" variant="dark"> + </Button>
              <span className="m-2">{item.quantity}</span>
              <Button onClick={()=>handleChange(item , -1)} className="m-2 cart_Butn" variant="dark"> - </Button>
              <Button onClick={()=>handleRemove(item.id)} className="ms-2 cart_Butn" variant="dark">Remove</Button>
            </div>
            
          </div> 
        ))}
      
      </div>
      <div>
        
        <p className="text-center fs-3 cart_p">Total Price of your Cart : <span className="text-success">{price} EGP</span> </p>
       
      </div>
      </div>
    </>
  );
};

export default Cart;
