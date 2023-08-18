import { useParams } from "react-router-dom";
import { products } from "../productsData";
import "./products.css";
import Button from "react-bootstrap/esm/Button";

export default function ProductDetails({ HandleClick , cart , setCart ,item }) {

  const params = useParams();
  const Id = params.productId;

  return (
    <div className="background">
      <div className=" details container pt-5 pb-5 d-flex justify-content-between align-items-center">
        <img
          src={products[Id].imgSrc}
          alt=""
          className="imgDetails w-50 "
        ></img>
        <div className="box w-50 text-start ms-5 ">
          <h2 className=""> {products[Id].title} </h2>
          <div className=" pt-2 para ">
            <p className="mt-4">
              <span className="text-dark ">Description : </span>
              {products[Id].desc}
            </p>
            <p>
              <span className="text-dark">Flavors :</span>
              {products[Id].sorts}
            </p>
            <p>
              <span className="text-dark">Item weight :</span>
              {products[Id].weight}
            </p>
            <p>
              <span className="text-dark">Price : </span>
              {products[Id].price} EGP
            </p>

            <div>
              <Button
                className="mt-2 butn me-2 w-50  "
                variant="dark"
                onClick={()=>HandleClick(products[Id])}
              >
                Add To Cart
              </Button>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
