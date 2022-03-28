import React, { useEffect } from "react";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "../Sidebar/Sidebar";
import Routes from "../../../Routes/privateRoute";
import "./Layout.css";
import TopNav from "../Topnav/TopNav";
import ThemeAction from "../../../redux/actions/ThemeAction";

import Login from "../../../Pages/Dashboard/Login";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  const location = useLocation();

  return (
    <Route
      render={(props) => (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
          <Sidebar {...props} />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
              <Routes />
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Layout;
