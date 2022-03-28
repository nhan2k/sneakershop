// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import Table from "../../Components/AdminPage/Table/Table";


// import ourstaffList from "../../Assets/JsonData/ourstaff-list.json";
// import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt";
// import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
// import "../../Assets/boxicons-2.0.7/css/search.css";

// const customerTableHead = [
//   "ID",
//   "name",
//   "email",
//   "phone",
//   "Address",
//   "Role",
//   "Action",
// ];

// const renderHead = (item, index) => <th key={index}>{item}</th>;

// const renderBody = (item, index) => (
//   <tr key={index}>
//     <td>{item.id}</td>
//     <td>{item.name}</td>
//     <td>{item.mail}</td>
//     <td>{item.phone}</td>
//     <td>{item.Address}</td>
//     <td>{item.Role}</td>
//     <td>
//       <i className="icon-facebook">
//         <FaEdit />
//       </i>
//       <i className="icon-facebook">
//         <FaTrashAlt />
//       </i>
//     </td>
//   </tr>
// );

// const OurStaff = () => {
//   return (
//     <div>
//       <h2 className="page-header">Our Staff</h2>

//       {/* <div className="topnav__search"> */}
//       <div class="container">
//         <div class="row">
//           <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
//             <div className="topnav__search">
//               <input type="text" placeholder="Search here..." />
//               <i className="bx bx-search"></i>
//             </div>
//           </div>
//           <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
//             <select className="cars" id="cars">
//               <option value="volvo">Volvo</option>
//               <option value="saab">Saab</option>
//               <option value="opel">Opel</option>
//               <option value="audi">Audi</option>
//             </select>
//           </div>
//           <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
//             <button className="btn btn-primary btn-add">ADD</button>
//           </div>
//         </div>
//       </div>

//       {/* <div className="drop">
//         <div class="dropdown">
//           <button onclick="myFunction()" class="dropbtn">
//             Dropdown
//           </button>
//           <div id="myDropdown" class="dropdown-content">
//             <a href="#home">Home</a>
//             <a href="#about">About</a>
//             <a href="#contact">Contact</a>
//           </div>
//         </div>
//       </div> */}

//       {/* <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Dropdown Button
//     <i><FaCaretDown/></i>
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown> */}
//       <div className="row">
//         <div className="col-12">
//           <div className="card">
//             <div className="card__body">
//               <Table
//                 limit="10"
//                 headData={customerTableHead}
//                 renderHead={(item, index) => renderHead(item, index)}
//                 bodyData={ourstaffList}
//                 renderBody={(item, index) => renderBody(item, index)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStaff;
