import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { getOrder } from "../../Util/Common";
import { getID } from "../../Util/Common";

//Token
import { getToken } from "../..//Util/Common";

//Pagination
import Pagination from "../../Services/Actions/Pagination";

import AddCustomers from "../../Components/AdminPage/Modal/AddCustomers";

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

export default function DetailCustomer() {
  //Get API
  const [apiData, setApiData] = useState([]);

  const [_id, setID] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [method, setMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  const accessToken = getToken();

  const Order = getOrder();
  const Id = getID();

  // useEffect(() => {
  //   setID(sessionStorage.getItem("_id"));
  //   setOrderId(sessionStorage.getItem("orderid"));
  //   setShippingAddress(sessionStorage.getItem("shippingaddress"));
  //   setMethod(sessionStorage.getItem("method"));
  //   setAmount(sessionStorage.getItem("amount"));
  //   setTime(sessionStorage.getItem("time"));
  //   setStatus(sessionStorage.getItem("status"));
  // }, []);

  const APIData =
    (() => {
      axios
        .get(`https://sneakershopfiveteam.herokuapp.com/user/${Order}`, {
          headers: { token: `Bearer ${accessToken}` },
        })
        .then((getData) => {
          setApiData(getData.data);
          console.log(getData.data);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.data);
        });
    },
    []);

  return (
    <div>
      <h3 className="page-header">Orders Lists</h3>
      <div className="card">
        <Row className="d-flex justify-content-around align-items-center">
          <Col xs={12}>
            <div className="topnav__search w-100">
              <input type="text" placeholder="Search here..." />
              <i className="bx bx-search"></i>
            </div>
          </Col>
        </Row>
      </div>
      <div className="card">
        <Row className="d-flex justify-content-around align-items-center">
          <Col xs={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Time</th>
                  <th>Shipping Address</th>
                  <th>Phone</th>
                  <th>Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((data) => {
                  return (
                    <tr>
                      <td>{data.orderId}</td>
                      <td>{data.time}</td>
                      <td>{data.shippingAddress}</td>
                      <td>{data.phone}</td>
                      <td>{data.method}</td>
                      <td>{data.totalAmount}$</td>
                      <td>{data.status}</td>
                      <td>
                        <Link to="/updatecoupon">
                          <i
                            onClick={() => setID(data._id)}
                            className="bx bx-edit icon__actions-edit"
                          ></i>
                        </Link>
                        <i className="bx bx-trash icon__actions-delete"></i>
                      </td>
                      <td>
                        <Link to="/">
                          <i
                            onClick={() => setID(data.id)}
                            className="bx bx-show icon__actions-detail"
                          ></i>
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
