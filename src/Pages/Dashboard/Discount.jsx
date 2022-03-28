import React, { useState, useEffect, useMemo } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";

//Token
import { getToken } from "../../Util/Common";

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

export default function Discount() {
  //Get API
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sneakershopfiveteam.herokuapp.com/coupon/")
      .then((getData) => {
        setApiData(getData.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //
  const setData = (data) => {
    let { _id, index, name, code, percentage, type } = data;
    sessionStorage.setItem("id", data._id);
    sessionStorage.setItem("index", data.index);
    sessionStorage.setItem("name", data.name);
    sessionStorage.setItem("code", data.code);
    sessionStorage.setItem("percentage", data.percentage);
    sessionStorage.setItem("type", data.type);
    console.log(data._id);
  };

  const setID = (_id) => {
    sessionStorage.setItem("_id", _id);
  };

  //Reload
  const getData = () => {
    axios
      .get(`https://sneakershopfiveteam.herokuapp.com/coupon/`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const accessToken = getToken();

  //Delete API
  const onDelete = (_id) => {
    axios
      .delete(`https://sneakershopfiveteam.herokuapp.com/coupon/${_id}`, {
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
      <h3 className="page-header">Discount</h3>
      <div className="card">
        <Row className="d-flex justify-content-around align-items-center">
          <Col xs={10}>
            <div
              icon="search"
              onChange={(e) => searchItems(e.target.value)}
              className="topnav__search w-100"
            >
              <input type="text" placeholder="Search here..." />
              <i className="bx bx-search"></i>
            </div>
          </Col>

          <Col className="d-flex justify-content-end">
            <Link to="/dashboard/addcoupon">
              <Button type="submit" className="page-header__button ">
                <i className="bx bx-plus-medical page-header__button-icon "></i>
                Add Coupon
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
                  <th>Index</th>
                  <th>Name Discount</th>
                  <th>Code Discount</th>
                  <th>Percentage</th>
                  <th>Product Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {searchInput.length > 1
                  ? filteredResults.map((data) => {
                      return (
                        <tr>
                          <td>{data._id}</td>
                          <td>{data.index}</td>
                          <td>{data.name}</td>
                          <td>{data.code}</td>
                          <td>{data.percentage}%</td>
                          <td>{data.type}</td>
                          <td>
                            <Link to="/dashboard/updatecoupon">
                              <i
                                type="button"
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
                    })
                  : currentTableData.map((data) => {
                      return (
                        <tr>
                          <td>{data._id}</td>
                          <td>{data.index}</td>
                          <td>{data.name}</td>
                          <td>{data.code}</td>
                          <td>{data.percentage}%</td>
                          <td>{data.type}</td>
                          <td>
                            <Link to="/dashboard/updatecoupon">
                              <i
                                type="button"
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
