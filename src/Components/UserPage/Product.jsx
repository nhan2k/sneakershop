import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';
import Axios from 'axios'




function Product(){
    const [data, setDate] = useState([]);
 useEffect(()=> {
     Axios.get('https://sneakershopfiveteam.herokuapp.com/product')
     .then(res => {
         console.log("get data",res.data)
         setDate(res.data)
     }).catch (error =>console.error(error))
 },[])

 const arr = data.map((data,index)=>{
     return(
        <div class="card my-5 py-4" key={data._id} style={{width: "18rem"}}>
        <img src={data.image} class="card-img-top" alt={data.description}/>
            <div class="card-body text-center">
                <h5 class="card-title">{data.name}</h5>
                <p className="lead ">{data.price} vnđ</p>
                <NavLink to={`/products/${data._id}`} class="btn btn-outline-primary">Detail</NavLink>
            </div>
</div>
     )
 })

//     const cardItem = () => {
//         return (
//             <div class="card my-5 py-4" key={0} style={{width: "18rem"}}>
//                 <img src={0} class="card-img-top" alt={0}/>
//                     <div class="card-body text-center">
//                         <h5 class="card-title">{0}</h5>
//                         <p className="lead">${0}</p>
//                         <NavLink to={`/products/${0}`} class="btn btn-outline-primary">Detail</NavLink>
//                     </div>
// </div>
//                 );
//     }

                return (
                <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Product</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                           {arr}
                        </div>
                    </div>
                </div>
                )
}

    export default Product
