import React from "react";

import { Redirect, Switch, Route } from "react-router-dom";
import Home from "./Components/UserPage/Home";
import ProductDetail from "./Components/UserPage/ProductDetail";
import Cart from "./Components/UserPage/Cart";
import About from "./Components/UserPage/About";
import Contact from "./Components/UserPage/Contact";
import Checkout from "./Components/UserPage/Checkout";
import Header from "./Components/UserPage/Header";
import Footer from "./Components/UserPage/Footer";
import Product from "./Components/UserPage/Product";
import Layout from "./Components/AdminPage/Layout/Layout"

// import Dashboard from "./Components/AdminPage/Layout/Layout";

function App() {
  //USER
  return (
    <>
      {" "}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/dashboard/" component={Layout} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
