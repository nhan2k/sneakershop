import React from "react";
import "./Login.css";

import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";

export default function Login() {
  return (
    <div className="wrapper">
      <div className="logo">
        {" "}
        <img
          src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/274474783_861788918554876_4195703147491110141_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6mJh4Njf1JQAX-YLyua&tn=5UbomtOjjva_mezi&_nc_ht=scontent.fsgn5-10.fna&oh=03_AVKW3hSIW3sDGoxRxhold9qxmKPXbyLMieHwi_1wJ8Ej5Q&oe=624B50FB"
          alt=""
        />{" "}
      </div>
      <div className="text-center mt-4 name"> Login</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          {" "}
          <span className="far fa-user"></span>{" "}
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
          />{" "}
        </div>
        <div className="form-field d-flex align-items-center">
          {" "}
          <span className="fas fa-key"></span>{" "}
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />{" "}
        </div>
        <button href="../Pages\Dashboard\TopBar.js" className="btn mt-3">
          Login
        </button>
      </form>
      <br></br>
      <form>
        <button className="btns mt-3 ">
          <i className="icon-github">
            <FaGithubAlt />
          </i>
          Login with Github
        </button>
        <br></br>
        <br></br>
        <button className="btn mt-3 ">
          <i className="icon-facebook">
            <FaFacebookF />
          </i>
          Login with Facebook
        </button>
      </form>
      <br></br>
      <div className="text-center fs-6">
        {" "}
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>{" "}
      </div>
    </div>
  );
}
