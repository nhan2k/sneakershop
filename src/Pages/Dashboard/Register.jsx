import React, { useEffect, useRef, useState } from "react";
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
import { Link, useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';

import axios from "axios";

import { registerUser } from "../../redux/apiRequest";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      phone: phone
    }
    registerUser(newUser, dispatch, history);
  }
  
  return (
    <div className="wrapper">
      <div className="card">
        <div className="logo">
          <img
            src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/274474783_861788918554876_4195703147491110141_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6mJh4Njf1JQAX-YLyua&tn=5UbomtOjjva_mezi&_nc_ht=scontent.fsgn5-10.fna&oh=03_AVKW3hSIW3sDGoxRxhold9qxmKPXbyLMieHwi_1wJ8Ej5Q&oe=624B50FB"
            alt=""
          />
        </div>
        <h1 className="text-center mt-4 "> Sign Up</h1>
        <form onSubmit={handleRegister} className="p-3 mt-3 w-100">
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              className="cars"
              id="email"
              type="email"
              placeholder="email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel name="first name" label="First Name" className="mb-3">
            <Form.Control
              className="cars"
              type="text"
              placeholder="first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel name="last name" label="Last Name" className="mb-3">
            <Form.Control
              className="cars"
              type="text"
              placeholder="last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel label="Password" className="mb-3">
            <Form.Control
              name="password"
              className="cars"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>

          <FloatingLabel label="Phone" className="mb-3">
            <Form.Control
              name="phone"
              className="cars"
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FloatingLabel>

          <Button
            className="page-header__button mt-3 "
            variant="primary"
            type="submit"
            size="lg"
            style={{
              height: "60px",
              width: "60%",
              fontSize: "1.4rem",
              marginLeft: "120px",
            }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
