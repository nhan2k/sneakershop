import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../../../Util/Common";
import {getID} from "../../../../Util/Common"

import {
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
  Form,
  Table,
  Modal,
  InputGroup,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";

//Css Custom
const style = {
  width: "100%",
  position: "relative",
  height: "100px",
  color: "var(--txt-color)",
  backgroundColor: "var(--main-bg)",
  display: "flex",
  alignItems: "center",
  boxShadow: "var(--box-shadow)",
  borderRad: "var(--border-radius)",
  overflow: "hidden",
  borderStyle: "none",
  justifyContent: "center",
};

export default function UpdateCate() {
  //API
  const [_id, setID] = useState(null);
  const [type, setType] = useState("");
  const [published, setPublished] = useState("");

  const history = useHistory();

  const accessToken = getToken();

  const updateAPIData = () => {
    
    const Id = getID()

    axios
      .patch(
        `https://sneakershopfiveteam.herokuapp.com/category/${Id}`,
        {
          type
        },
        {
          headers: { token: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        alert("success");
        history.push("/dashboard/categories");
        console.log(type);
      })
      .catch((err) => {
        console.log(_id);
        console.log(err);
      });
  };

  useEffect(() => {
      setType(sessionStorage.getItem("type"));
      setPublished(sessionStorage.getItem("published"));
      setID(sessionStorage.getItem("_id"));
  }, []);

  return (
    <div>
      <h3 className="page-header">Update Category</h3>

      <Form className="card">
        
        <FloatingLabel
          controlId="floatingInput"
          label="Category Type"
          className=""
        >
          <Form.Control
            className="cars"
            type="text"
            placeholder="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </FloatingLabel>

        <br></br>

        <Button
          type="button"
          size="lg"
          variant="primary"
          onClick={updateAPIData}
        >
          Update Category
        </Button>
      </Form>
    </div>
  );
}

// export default Discount;
