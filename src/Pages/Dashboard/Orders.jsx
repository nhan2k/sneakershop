import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import {
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
  Form,
  Table,
  Modal,
} from "react-bootstrap";

// const customerTableHead = [
//   "Id",
//   "Month",
//   "Name Discount",
//   "Code Discount",
//   "End Date",
//   "Percentage",
//   "Product Type",
//   "Action",
// ];

// const renderHead = (item, index) => <th key={index}>{item}</th>;

export default function Orders() {
  //Get API
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sneakershopfiveteam.herokuapp.com/order/")
      .then((res) => {
        setGetData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const setID = (id) => {
    console.log(id);
    localStorage.setItem("Id", id);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <div>
      <h3 className="page-header">Orders</h3>
      <div className="card">
        <Row className="d-flex justify-content-around align-items-center">
          <Col xs={12}>
            <div className="topnav__search w-100">
              <input type="text" placeholder="Search here..." />
              <i className="bx bx-search"></i>
            </div>
          </Col>
{/* 
          <Col className="d-flex justify-content-end">
            <Link to="/addcoupon">
              <Button type="submit" className="page-header__button ">
                <i className="bx bx-plus-medical page-header__button-icon "></i>
                Add Order
              </Button>
            </Link>
          </Col> */}
        </Row>
      </div>
      <div className="card">
        <Row className="d-flex justify-content-around align-items-center">
          <Col xs={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Time</th>
                  <th>Shipping Address</th>
                  <th>Phone</th>
                  <th>Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((data, index) => {
                  return (
                    <tr>
                      <td scope="row">{index + 1}</td>
                      <td>{data.time}</td>
                      <td>{data.shippingAddress}</td>
                      <td>{data.phone}</td>
                      <td>{data.method}</td>
                      <td>{data.totalAmount}$</td>
                      <td>{data.status}</td>
                      <td>
                        <Link to="/dashboard/updatecoupon">
                          <i onClick={() => setID(data.id)} className="bx bx-edit icon__actions-edit"></i>
                        </Link>
                        <i className="bx bx-trash icon__actions-delete"></i>
                      </td>
                      <td>
                        <Link to="/">
                          <i onClick={() => setID(data.id)} className="bx bx-show icon__actions-detail"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
}

// export default Discount;
