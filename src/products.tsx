
import React from 'react'


function Product (props : any){

    return (
        <div className="myDiv">
                <h2>Product Name: {props.pro.name}</h2>
                <p>Price: {props.pro.price}</p>
                <p>Description: {props.pro.description}</p>
            
        </div>
    )
}


export default Product