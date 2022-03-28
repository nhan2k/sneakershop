import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

//Admin Route
import Dashboard from "../Pages/Dashboard/Dashboard";
import Customers from "../Pages/Dashboard/Customers";
import DetailCustomer from "../Pages/Dashboard/DetailCustomer";
import Discount from "../Pages/Dashboard/Discount";
import Product from "../Pages/Dashboard/Product";
import Orders from "../Pages/Dashboard/Orders";
import Categories from "../Pages/Dashboard/Categories";
import Setting from "../Pages/Dashboard/Setting";
import ProductDetail from "../Pages/Dashboard/ProductDetail";

// import Login from "../Pages/Dashboard/Login";
import Register from "../Pages/Dashboard/Register";

import AddCoupon from "../Pages/Dashboard/CRUD/Add/AddCoupon"
import AddCate from "../Pages/Dashboard/CRUD/Add/AddCate"
import AddProduct from "../Pages/Dashboard/CRUD/Add/AddProduct"
import UpdateCoupon from "../Pages/Dashboard/CRUD/Update/UpdateCoupon"
import UpdateCate from "../Pages/Dashboard/CRUD/Update/UpdateCate"
import UpdateProduct from "../Pages/Dashboard/CRUD/Update/UpdateProduct"


const privateRoute = () => {
  return (
    <Switch>
      <Route path="/dashboard/addcoupon" component={AddCoupon} />
      <Route path="/dashboard/addcate" component={AddCate} />
      <Route path="/dashboard/addproduct" component={AddProduct} />
      <Route path="/dashboard/updatecoupon" component={UpdateCoupon} />
      <Route path="/dashboard/updatecate" component={UpdateCate} />
      <Route path="/dashboard/updateproduct" component={UpdateProduct} />



      {/* Admin */}
      <Route path="/dashboard/" exact component={Register} />
      <Route path="/dashboard/home" component={Dashboard} />
      <Route path="/dashboard/customers" component={Customers} />
      <Route path="/dashboard/detailcustomer" component={DetailCustomer} />
      <Route path="/dashboard/detailproduct" component={ProductDetail} />
      <Route path="/dashboard/orders" component={Orders} />
      <Route path="/dashboard/discount" component={Discount} />
      <Route path="/dashboard/product" component={Product} />
      <Route path="/dashboard/categories" component={Categories} />
      <Route path="/dashboard/settings" component={Setting} />
    </Switch>
  );
};

{
  /* import LoginAdmin from "../Pages/Dashboard/Login";
import Register from "../Pages/Dashboard/Register";


import AddCoupon from "../Pages/Dashboard/CRUD/Add/AddCoupon"
import AddCate from "../Pages/Dashboard/CRUD/Add/AddCate"
import AddProduct from "../Pages/Dashboard/CRUD/Add/AddProduct"
import UpdateCoupon from "../Pages/Dashboard/CRUD/Update/UpdateCoupon"
import UpdateCate from "../Pages/Dashboard/CRUD/Update/UpdateCate"
import UpdateProduct from "../Pages/Dashboard/CRUD/Update/UpdateProduct"


const privateRoute = () => {
  return (
    <Switch>
      <Route path="/addcoupon/" component={AddCoupon} />
      <Route path="/addcate/" component={AddCate} />
      <Route path="/addproduct/" component={AddProduct} />
      <Route path="/updatecoupon/" component={UpdateCoupon} />
      <Route path="/updatecate/" component={UpdateCate} />
      <Route path="/updateproduct/" component={UpdateProduct} />

      <Route path="/" exact component={Register} />
      <Route path="/loginadmin"  component={LoginAdmin} />
      <Route path="/dashboard" exact component={Dashboard} />

      <Route path="/customers" component={Customers} />
      <Route path="/detailcustomer" component={DetailCustomer} />
      <Route path="/orders" component={Orders} />
      <Route path="/discount" component={Discount} />
      <Route path="/product" component={Product} />
      <Route path="/categories" component={Categories} />
      <Route path="/settings" component={Setting} />

    </Switch>
  )
} */
}

export default privateRoute;
