import React, { useState, useEffect } from "react";
import "../../Components/Login/Login.css";
import {
  Button,
  Modal,
  Col,
  Row,
  Container,
  Form,
  FloatingLabel,
  Nav,
} from "react-bootstrap";

import axios from "axios";

import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../redux/apiRequest";

import { setUserSession } from "../../Util/Common";


export default function LoginAdmin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [show, setShow,] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        console.log(result.statusText);
        console.log(result.data.accessToken);
        if (result.statusText === "OK") {
          setUserSession(result.data.accessToken, result.data);
          setEmail(result.data.email);

          alert("success");
          setShow(false);
          history.push('/dashboard/home')
        }
      })

      .catch((error) => {
        alert("service error");
        console.log(error.message);
      });

    console.log(email);
    console.log(password);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="wrapper">
      <div className="card">
        <div className="logo">
          <img
            src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/274474783_861788918554876_4195703147491110141_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6mJh4Njf1JQAX-YLyua&tn=5UbomtOjjva_mezi&_nc_ht=scontent.fsgn5-10.fna&oh=03_AVKW3hSIW3sDGoxRxhold9qxmKPXbyLMieHwi_1wJ8Ej5Q&oe=624B50FB"
            alt=""
          />
        </div>
        <h1 className="text-center mt-4 ">Sign In</h1>

        {/* <Form onSubmit={handleLogin} className="p-3 mt-3 w-100"> */}
        <Form show={show} className="p-3 mt-3 w-100">
          <FloatingLabel name="email" label="Email" className="mb-3">
            <Form.Control
              className="cars"
              type="email"
              placeholder="email"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}

              onChange = {handleEmail}
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

              onChange = {handlePassword}
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
              marginLeft: "120px",
            }}
            onClick={handleAPI}
          >
            Sign In
          </Button>
        </Form>

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

        <div className="text-center fs-6">
          <a href="#">Forget Password?</a> or{" "}
          <Link to="/dashboard/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
