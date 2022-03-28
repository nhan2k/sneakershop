import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../Util/Common";

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

export default function Categories() {
  //Get API
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sneakershopfiveteam.herokuapp.com/category/")
      .then((getData) => {
        setApiData(getData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //
  const setData = (data) => {
    let { _id, type, published } = data;
    sessionStorage.setItem("type", data.type);
    sessionStorage.setItem("published", data.published);
    sessionStorage.setItem("id", data._id);
    console.log(data._id);
  };

  const setID = (_id) => {
    sessionStorage.setItem("_id", _id);
  };

  //Reload
  const getData = () => {
    axios
      .get(`https://sneakershopfiveteam.herokuapp.com/category/`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const accessToken = getToken();

  //Delete API
  const onDelete = (_id) => {
    axios
      .delete(`https://sneakershopfiveteam.herokuapp.com/category/${_id}`, {
        headers: { token: `Bearer ${accessToken}` },
      })
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(_id);
        console.log(err);
      });
  };

  return (
    <div>
      <h3 className="page-header">Categories</h3>
      <div className="card">
        <Row className="d-flex justify-content-around align-items-center">
          <Col xs={10}>
            <div className="topnav__search w-100">
              <input type="text" placeholder="Search here..." />
              <i className="bx bx-search"></i>
            </div>
          </Col>

          <Col className="d-flex justify-content-end">
            <Link to="/dashboard/addcate">
              <Button type="submit" className="page-header__button ">
                <i className="bx bx-plus-medical page-header__button-icon "></i>
                Add Category
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <div className="card">
        <Row className="d-flex justify-content-around align-items-center">
          <Col xs={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Type</th>
                  <th>Published</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((data) => {
                  return (
                    <tr>
                      <td>{data._id}</td>
                      <td>{data.type}</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>
                        <Link to="/dashboard/updatecate">
                          <i
                            type="submit"
                            onClick={() => setData(data)}
                            className="bx bx-edit icon__actions-edit"
                          ></i>
                        </Link>
                        <i
                          type="button"
                          onClick={() => onDelete(data._id)}
                          className="bx bx-trash icon__actions-delete"
                        ></i>
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
