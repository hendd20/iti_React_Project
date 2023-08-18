import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPages from "./Pages/ShopPage";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useState } from "react";
import About from "./components/About";
import AddUser from "./components/AddUser";
import ViewUser from "./components/ViewUser";
import Form from "./components/Form";


import Products from "./components/Products";
import Contact from "./components/Contact";

function App() {
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState([]);

  const HandleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) return;
    setCart([...cart, item]);
    console.log(item);
  };

  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].quantity += d;
		
		if (tempArr[ind].quantity === 0)
			tempArr[ind].quantity = 1;
		setCart([...tempArr])
	}

  return (
    <>
      <MyNav size={cart.length} setShow={setShow} />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/form" element={<Form/>}/>
        <Route path="/shop" element={<ShopPages HandleClick={HandleClick} />} />
        <Route
          path="shop/:productId"
          element={
            <ProductDetails
              HandleClick={HandleClick}
              handleChange={handleChange}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/about/add" element={<AddUser />} />
        <Route path="/about/:viewId" element={<ViewUser />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
