import React, { useState, useEffect, useMemo } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

//Token
import { getToken } from "../..//Util/Common";

import "../../Assets/Styles/Customer.css";

import customerList from "../../Assets/JsonData/customers-list.json";

import DetailCustomer from "../../Pages/Dashboard/DetailCustomer";

import DeleteForm from "../../Components/AdminPage/Modal/DeleteForm";

//Pagination
import Pagination from "../../Services/Actions/Pagination";

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

export default function Customers() {
  //Get API
  const [apiData, setApiData] = useState([]);

  const accessToken = getToken();

  useEffect(() => {
    axios
      .get(`https://sneakershopfiveteam.herokuapp.com/user/`, {
        headers: { token: `Bearer ${accessToken}` },
      })
      .then((getData) => {
        setApiData(getData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //
  const setData = (data) => {
    let { _id, orderList } = data;
    sessionStorage.setItem("id", data._id);
    sessionStorage.setItem("orderList", data.orderList);
    console.log(data.orderList);
  };

  const setID = (_id) => {
    console.log(_id);
    sessionStorage.setItem("_id", _id);
  };

  //Pagination
  let PageSize = 10;
  const [currentPage, setCurrentPage] = useState(5);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return apiData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  //Search
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = currentTableData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(currentTableData);
    }
  };

  return (
    <div>
      <h3 className="page-header">Products</h3>
      <div className="card">
        <Row className="d-flex justify-content-around align-items-center">
          <Col xs={12}>
            <div
              onChange={(e) => searchItems(e.target.value)}
              className="topnav__search w-100"
            >
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
                  <th>Id</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Role</th>
                  <th>Order List</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {searchInput.length > 1
                  ? filteredResults.map((data) => {
                      return (
                        <tr>
                          <td>{data._id}</td>
                          <td>{data.phone}</td>
                          <td>{data.email}</td>
                          <td>{data.password}</td>
                          <td>{data.isAdmin}</td>
                          <td>
                            <Link to="/dashboard/detailcustomer">
                              <i className="bx bx-show icon__actions-detail"></i>
                            </Link>
                          </td>
                          <td>
                            <Link to="/dashboard/updateuser">
                              <i
                                onClick={() => setID(data)}
                                className="bx bx-edit icon__actions-edit"
                              ></i>
                            </Link>
                            <i className="bx bx-trash icon__actions-delete"></i>
                          </td>
                        </tr>
                      );
                    })
                  : currentTableData.map((data) => {
                      return (
                        <tr>
                          <td>{data._id}</td>
                          <td>{data.phone}</td>
                          <td>{data.email}</td>
                          <td>{data.password}</td>
                          <td>{data.isAdmin}</td>
                          <td>
                            <Link to="/dashboard/detailcustomer">
                              <i
                                onClick={() => setData(data)}
                                className="bx bx-show icon__actions-detail"
                              ></i>
                            </Link>
                          </td>
                          <td>
                            <Link to="/dashboard/updateuser">
                              <i
                                onClick={() => setID(data.id)}
                                className="bx bx-edit icon__actions-edit"
                              ></i>
                            </Link>
                            <i className="bx bx-trash icon__actions-delete"></i>
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </Table>
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={apiData.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

// export default Discount;
