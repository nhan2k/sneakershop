import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect, } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../../redux/actions/index'

function ProductDetail()  {
    const [product, setDate] = useState([]);
    useEffect(()=> {
        Axios.get(`https://sneakershopfiveteam.herokuapp.com/product/${proid.id}`)
        .then(res => {
            console.log("get product",res.data)
            setDate(res.data)
        }).catch (error =>console.error(error))
    })

    const [cartBtn, setCartBtn] = useState("Add to Cart")
    //{/* Now we need a product id which is pass from the product page. */}
    const proid = useParams();
    console.log(proid)
    // const proDetail = product.filter(product=>product._id === proid._id)
    // const product = proDetail[0];
    // console.log(product);

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }



    
        return(
            <>
            <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product.image} alt={product.description}height="400px" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                <h5 className="card-title display-6 center red-color">{product.name}</h5>
                    <h1 className="display-6 font-size ">{product.description}</h1>
                    <hr />
                    <h2 className="my-4">{product.price} vnđ</h2>
                    {/* <p className="lead">{product.desc}</p> */}
                    <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                </div>
            </div>
            
        </div>
        </>
        )
    
    
    // return (
    //     <>
    //     <div className="container my-5 py-3">
    //         <div className="row">
    //             <div className="col-md-6 d-flex justify-content-center mx-auto product">
    //                 <img src={product.img} alt={product.title}height="400px" />
    //             </div>
    //             <div className="col-md-6 d-flex flex-column justify-content-center">
    //                 <h1 className="display-5 fw-bold">{product.title}</h1>
    //                 <hr />
    //                 <h2 className="my-4">${product.price}</h2>
    //                 <p className="lead">{product.desc}</p>
    //                 <button onClick={()=>handleCart(product)} className="btn btn-outline-primary my-5">{cartBtn}</button>
    //             </div>
    //         </div>
    //     </div>
    //     </>
    // )
    // return (
    //     <div>
    //         <div className="container py-5">
    //             <div className="row">
    //                 <div className="col-12 text-center">
    //                     <h1>Detail</h1>
    //                     <hr />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="container">
    //             <div className="row justify-content-around">
    //                {arr}
    //             </div>
    //         </div>
    //     </div>
    //     )
}

export default ProductDetail
