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

export default function Product() {
  //Get API
  const accessToken = getToken();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sneakershopfiveteam.herokuapp.com/product/", {
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
    let { _id, sku, image, des, name, category, price, stock, country, status } = data;
    sessionStorage.setItem("id", data._id);
    sessionStorage.setItem("sku", data.sku);
    sessionStorage.setFile("image", data.image);
    sessionStorage.setItem("name", data.name);
    sessionStorage.setItem("category", data.category);
    sessionStorage.setItem("price", data.price);
    sessionStorage.setItem("des", data.description);
    sessionStorage.setItem("stock", data.stock);
    sessionStorage.setItem("country", data.country);
    sessionStorage.setItem("status", data.status);
    console.log(data._id);
  };

  const setID = (_id) => {
    sessionStorage.setItem("_id", _id);
  };

  //Reload
  const getData = () => {
    axios
      .get(`https://sneakershopfiveteam.herokuapp.com/product/`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  //Delete API
  const onDelete = (_id) => {
    axios
      .delete(`https://sneakershopfiveteam.herokuapp.com/product/${_id}`, {
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
      <h3 className="page-header">Products</h3>
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
            <Link to="/dashboard/addproduct">
              <Button type="submit" className="page-header__button ">
                <i className="bx bx-plus-medical page-header__button-icon "></i>
                Add Product
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
                  <th>Sku</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Stock</th>
                  <th>Country</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {searchInput.length > 1
                  ? filteredResults.map((data) => {
                      return (
                        <tr>
                          <td>{data.sku}</td>
                          <td>
                            <img src={data.image} style={{ width: "40%" }} />
                          </td>
                          <td>{data.name}</td>
                          <td>{data.category}</td>
                          <td>{data.price}</td>
                          <td>{data.description}</td>
                          <td>{data.stock}</td>
                          <td>{data.country}</td>
                          <td>{data.status}</td>
                          <td>
                            <Link to="/dashboard/updateproduct">
                              <i
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
                          <td>{data.sku}</td>
                          <td>
                            <img src={data.image} style={{ width: "40%" }} />
                          </td>
                          <td>{data.name}</td>
                          <td>{data.category}</td>
                          <td>{data.price}</td>
                          <td>{data.description}</td>
                          <td>{data.stock}</td>
                          <td>{data.country}</td>
                          <td>{data.status}</td>
                          <td>
                            <Link to="/dashboard/updateproduct">
                              <i
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

// export default Discount;
