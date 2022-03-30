import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import Axios from "axios";

//Pagination
import Pagination from "../../Services/Actions/Pagination";

function Product() {
  const [data, setDate] = useState([]);
  useEffect(() => {
    Axios.get("https://sneakershopfiveteam.herokuapp.com/product")
      .then((res) => {
        console.log("get data", res.data);
        setDate(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  //Pagination
  let PageSize = 8;
  const [currentPage, setCurrentPage] = useState(4);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
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
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
          <div
            icon="search"
            onChange={(e) => searchItems(e.target.value)}
            className="topnav__search w-100"
          >
            <input type="text" placeholder="Search here..." />
            <i className="bx bx-search"></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{searchInput.length > 1
      ? filteredResults.map((data) => {
          return (
            <div
              class="card my-5 py-4"
              key={data._id}
              style={{ width: "18rem" }}
            >
              <img
                src={data.image}
                class="card-img-top"
                alt={data.description}
              />
              <div class="card-body text-center">
                <h5 class="card-title">{data.name}</h5>
                <p className="lead ">{data.price} vnđ</p>
                <NavLink
                  to={`/products/${data._id}`}
                  class="btn btn-outline-primary"
                >
                  Detail
                </NavLink>
              </div>
            </div>
          );
        })
      : currentTableData.map((data) => {
          return (
            <div
              class="card my-5 py-4"
              key={data._id}
              style={{ width: "18rem" }}
            >
              <img
                src={data.image}
                class="card-img-top"
                alt={data.description}
              />
              <div class="card-body text-center">
                <h5 class="card-title">{data.name}</h5>
                <p className="lead ">{data.price} vnđ</p>
                <NavLink
                  to={`/products/${data._id}`}
                  class="btn btn-outline-primary"
                >
                  Detail
                </NavLink>
              </div>
            </div>
          );
        })}</div>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Product;
