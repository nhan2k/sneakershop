import  axios  from "axios";
import React from "react";
import { useState } from 'react';
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { setUserSession } from "../../../Utils/Common";




function Login  () {

        const [show, setShow,] = useState(false);
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        
       


        const handleEmail = (e)=>{
          setEmail(e.target.value)
           
        }
        const handlePassword = (e)=>{
          setPassword(e.target.value)
          
        }
        
       
        
        const handleAPI = ()=>{
          
          axios.post(`https://sneakershopfiveteam.herokuapp.com/user/login`, {
            email: email,
            password: password
          })

          .then(result => {
           console.log(result)
           console.log(result.statusText)
           console.log(result.data.accessToken)
           if(result.statusText === "OK")
           {
              setUserSession(result.data.accessToken,result.data)
              setEmail(result.data.email)
              
              alert('success');
              setShow(false);
           }

          })

          .catch (error => {
            
            alert ('service error');
            console.log(error.message)
          
          }) 

          console.log(email);
          console.log(password);
        }
        
      
  return (
    <>
   <Button   variant="primary"  className="btn btn-outline ms-auto" onClick={handleShow}>
   {email !== '' ? email : <span className="fa fa-sign-in me-1"> Login</span>  }
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-body">
              {/* <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign in With Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Sign in With
                Facebook
              </button> */}
              
              <form >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    value={email} onChange = {handleEmail}
                    type = 'text'
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    value={password} onChange = {handlePassword}
                    type = 'password'
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                  
                  <i>Mật khẩu phải dài ít nhất 8 ký tự và có chữ hoa
                    </i>
                    <hr/>
                    <i >nhấn f5 để Logout</i>

                </div>
               
                <button
                  type = "button"
                  className="btn btn-outline-primary w-100 mt-5" onClick={handleAPI}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        </Modal.Body>
        
      </Modal>


     
      
    </>
  );
};

export default Login;
