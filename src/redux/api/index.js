import axios from "axios"

const url = "https://sneakershopfiveteam.herokuapp.com"

export const fetchCoupon = () => axios.get(`${url}/${coupon}`);
export const createCoupon = (newCoupon) => axios.post(`${url}/${coupon}`, newCoupon);
export const likeCoupon = (id) => axios.patch(`${url}/${coupon}/likeCoupon`);
export const updateCoupon = (id, updateCoupon) => axios.patch(`${url}/${coupon}/${id}`, updateCoupon);
export const deleteCoupon = (id) => axios.delete(`${url}/${coupon}/${id}`);