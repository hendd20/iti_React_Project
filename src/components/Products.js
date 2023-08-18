// import { useEffect, useState } from "react";
import Cards from "./Cards";
import "./products.css";
import { products } from "../productsData";
import { useState, useEffect } from "react";
function Products( {HandleClick}) {
  //بدل م نفضل نكرر الكارت ممكن اعمل فايل تاني و اعمله استدعاء هنا

  // const api_url = "https://dummyjson.com/products";

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(api_url)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const [search, setSearch] = useState("");

  return (
    <div className="shop">
      <div className="box ">
        <h1 className="text-center pt-5 mb-5 text-dark ">Our Products</h1>

        <div class="input-group w-50 m-auto p-2 mb-5">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="container row  gap-4 justify-content-lg-between m-auto pb-5 justify-content-sm-center .justify-content-md-center">
       
        {products
            .filter((item) => {
              return search.toLocaleLowerCase() === ""
                ? item
                : item.title.toLocaleLowerCase().includes(search);
            })
            .map((item) => {
              return (
                <>
                  <Cards item={item}
                   HandleClick={HandleClick} 
                   key={item.id}/>
                </>
              );
            })} 
            </div>
      </div>
    </div>
  );
}
export default Products;
