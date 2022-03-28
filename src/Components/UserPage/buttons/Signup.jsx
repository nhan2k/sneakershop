import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { setUserSession } from "../../../Utils/Common";
function Signup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPasword(e.target.value);
  };

  function handleRegister(e) {
    axios
      .post(`https://sneakershopfiveteam.herokuapp.com/user/register`, {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,
      })

      // e.preventDefault();
      .then((result) => {
        console.log("resource", result);

        console.log(result.statusText);

        if (result.statusText === "Created") {
          setUserSession(result.data.accessToken, result.data);
          setFirstName(result.data.firstname);
          setLastName(result.data.lastname);
          setPhone(result.data.phone);
          setEmail(result.data.email);
          setPasword(result.data.password);

          alert("đăng ký tài khoản thành công");
          setShow(false);
        }
      })

      .catch((error) => {
        alert("đăng ký tài khoản thất bại");
        console.log(error.message);
      });

    console.log(firstname);
    console.log(lastname);
    console.log(phone);
    console.log(email);
    console.log(password);
  }
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <Button
        variant="primary"
        className="btn btn-outline ms-2"
        onClick={handleShow}
      >
        <span className="fa fa-sign-in me-1"></span> Register
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <div class="row">
                      <div class="col">
                        <label htmlFor="exampleInput" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                          value={firstname}
                          onChange={handleFirstName}
                        />
                      </div>
                      <div class="col">
                        <label htmlFor="exampleInput" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInput"
                          value={lastname}
                          onChange={handleLastName}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInput" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInput"
                        value={phone}
                        onChange={handlePhone}
                      />
                    </div>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={password}
                      onChange={handlePassword}
                    />
                    <i>Mật khẩu phải dài ít nhất 8 ký tự và có chữ hoa
                    </i>
                  </div>
                  <button
                    type="button"
                    onClick={handleRegister}
                    className="btn btn-outline-primary w-100 mt-5"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Signup;
