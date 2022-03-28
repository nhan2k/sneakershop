import React from "react";
import ReactDOM from "react-dom";
import "./Assets/Styles/index.css";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from "redux";
import rootReducer  from "./redux/reducers/index";
import { Provider } from "react-redux";

// React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Css Custom
import "./Assets/boxicons-2.0.7/css/boxicons.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"

import "./Assets/Styles/css/grid.css";
import "./Assets/Styles/css/index.css";
import "./Assets/Styles/css/theme.css";

import { BrowserRouter } from "react-router-dom";
// import store from './redux/store'

import App from "./App";

const store = createStore(rootReducer);

document.title = "Sneaker Shop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
