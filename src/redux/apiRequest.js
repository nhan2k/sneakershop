import axios from "axios";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
} from "./authSlice";

import { getUserStart, getUserFailed, getUserSuccess } from "./userSlice";

//Login Method
export const loginUser = async(user, dispatch, history) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://sneakershopfiveteam.herokuapp.com/user/login",
      user
    );
    dispatch(loginSuccess(res.data));
    alert("Success");
    history.push("/");
  } catch (err) {
    alert("Error");
    dispatch(loginFailed());
  }
};

//Register Method
export const registerUser = async(user, dispatch, history) => {
  dispatch(registerStart());
  try {
    await axios.post(
      "https://sneakershopfiveteam.herokuapp.com/user/register",
      user
    );
    dispatch(registerSuccess());
    alert("Success");
    history.push("/login");
  } catch (err) {
    alert("Fail");
    dispatch(registerFailed());
  }
};

//Token headers
export const getAllUsers = async(accessToken, dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get(
      "https://sneakershopfiveteam.herokuapp.com/user/",
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailed());
  }
};
