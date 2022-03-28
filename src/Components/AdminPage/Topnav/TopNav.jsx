import React, { useState, useEffect } from "react";

import axios from "axios";
import { setUserSession, removeUserSession } from "../../../Util/Common";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";


import notifications from '../../../Assets/JsonData/notification.json'
import "./Topnav.css";
import Dropdown from "../Dropdown/Dropdown";
import { Link, useHistory } from "react-router-dom";
import ThemeMenu from "../Thememenu/ThemeMenu";
import { useSelector } from "react-redux";

import user_image from "../../../Assets/images/Vinh.png";
import user_menu from "../../../Assets/JsonData/user_menus.json";

//Trả về thông báo
const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);


const TopNav = () => {
  // const user = useSelector((state) => state.auth?.login.current_user);

  //Login Modal
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useHistory();

  const handleLogOut = () => {
    removeUserSession();
    history.push("/dashboard/");
    setEmail("");
    setPassword("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleAPI = () => {
    axios
      .post(`https://sneakershopfiveteam.herokuapp.com/user/login`, {
        email: email,
        password: password,
      })

      .then((result) => {
        console.log(result);
        console.log(result.data.accessToken);
        console.log(result.data.isAdmin);
        if (result.data.isAdmin == true) {
          setUserSession(result.data.accessToken, result.data);
          setEmail(result.data.email);
          alert("Success");
          setShow(false);
          history.push("/dashboard/home");
        } else {
          alert("Only Admin can access");
          setEmail("");
          setPassword("");
        }
      })

      .catch((error) => {
        alert("Error");
        console.log(error.message);
      });
  };

  return (
    <>
      {/* Top Navbar Here*/}

      <div className="topnav">
        <h1>
          <strong>ADMIN - SneakerShop.</strong>
        </h1>
        <div className="topnav__right">
          <div className="topnav__right-item">
            {/* dropdown here */}

            <Dropdown
              customToggle={(user) => (
                <div className="d-flex">
                  <div onClick={handleShow} className="topnav__right-user__name">
                    {email !== "" ? <div className="disabled">{email}</div> : <span>Login</span>}
                  </div>
                  <div className="topnav__right-user">
                    <div className="role" style={{ marginLeft: "14px" }}>
                      {`${user?.isAdmin ? `(Admin)` : `(Admin)`}`}
                    </div>
                  </div>
                </div>
              )}
              contentData={user_menu}
              renderItems={(item, index) => (
                <div onClick={handleLogOut} key={index}>
                  <div className="notification-item">
                    <i className={item.icon}></i>
                    <span>{item.content}</span>
                  </div>
                </div>
              )}
            />
          </div>
          <div className="topnav__right-item">
            <Dropdown
              icon="bx bx-bell"
              badge="12"
              contentData={notifications}
              renderItems={(item, index) => renderNotificationItem(item, index)}
              renderFooter={() => <Link to="/">View All</Link>}
            />
            {/* dropdown here */}
          </div>
          <div className="topnav__right-item">
            <ThemeMenu />
          </div>
        </div>
      </div>

      {/* Modal Login */}
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        centered
      >
        <div style={{ width: "100%", height: "100%" }}>
          <Modal.Header closeButton></Modal.Header>
          <div className="logo">
            <img
              src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/274474783_861788918554876_4195703147491110141_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6mJh4Njf1JQAX-YLyua&tn=5UbomtOjjva_mezi&_nc_ht=scontent.fsgn5-10.fna&oh=03_AVKW3hSIW3sDGoxRxhold9qxmKPXbyLMieHwi_1wJ8Ej5Q&oe=624B50FB"
              alt=""
            />
          </div>
          <Modal.Body>
            <Form show={show} className="p-3 w-100">
              <FloatingLabel name="email" label="Email" className="mb-3">
                <Form.Control
                  className="cars"
                  type="email"
                  placeholder="email"
                  value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={handleEmail}
                />
              </FloatingLabel>

              <FloatingLabel label="Password" className="mb-3">
                <Form.Control
                  name="password"
                  className="cars"
                  type="password"
                  placeholder="Password"
                  value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={handlePassword}
                />
              </FloatingLabel>

              <Button
                className="page-header__button mt-3 "
                variant="primary"
                size="lg"
                type="button"
                style={{
                  height: "60px",
                  width: "60%",
                  fontSize: "1.4rem",
                  marginLeft: "144px",
                }}
                onClick={handleAPI}
              >
                Sign In
              </Button>
            </Form>
          </Modal.Body>
          <form className="d-flex justify-content-center">
            <Button
              className=" mt-3 me-4 "
              size="lg"
              style={{
                borderRadius: "6px",
                borderWidth: "0",
                height: "35px",
                width: "40%",
                fontSize: "1rem",
                backgroundColor: "black",
                color: "var(--txt-white)",
                cursor: "pointer",
                fontSize: "100%",
                height: "35px",
                width: "220px",
                lineHeight: "1.15",
                outline: "none",
                overflow: "hidden",
                padding: "0 35px",
                position: "relative",
                textAlign: "center",
                textTransform: "none",
                transform: "translateZ(0)",
                transition: "all 0.2s, box-shadow 0.08s ease-in",
                userSelect: "none",
                WebkitUserSelect: "none",
                touchAction: "manipulation",
              }}
            >
              <i
                className="bx bxl-github"
                style={{
                  fontSize: "1.2rem",
                  marginRight: "5px",
                  verticalAlign: "middle",
                }}
              ></i>
              Github
            </Button>
            <Button
              className="mt-3 "
              size="lg"
              style={{
                borderRadius: "6px",
                borderWidth: "0",
                height: "35px",
                width: "40%",
                fontSize: "1rem",
                backgroundColor: "blue",
                color: "var(--txt-white)",
                cursor: "pointer",
                fontSize: "100%",
                height: "35px",
                width: "220px",
                lineHeight: "1.15",
                outline: "none",
                overflow: "hidden",
                padding: "0 35px",
                position: "relative",
                textAlign: "center",
                textTransform: "none",
                transform: "translateZ(0)",
                transition: "all 0.2s, box-shadow 0.08s ease-in",
                userSelect: "none",
                WebkitUserSelect: "none",
                touchAction: "manipulation",
              }}
            >
              <i
                className="bx bxl-facebook-square"
                style={{
                  fontSize: "1.2rem",
                  marginRight: "5px",
                  verticalAlign: "middle",
                }}
              ></i>
              <span>Facebook</span>
            </Button>
          </form>

          <div className="text-center mt-3 mb-4 fs-6">
            <a href="#">Forget Password?</a> or <Link to="/">Sign Up</Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TopNav;
