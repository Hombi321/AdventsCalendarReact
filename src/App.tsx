import React from 'react';
import Product from './products'
import ProductJSON from './products.json'



function App(){
//name={SingleProduct.name} price={SingleProduct.price} description={SingleProduct.description}
 const productList = ProductJSON.products.map(SingleProduct => (<Product key={SingleProduct.id} pro={SingleProduct}/>))
 console.log(productList) 
 return(
    
    <div>
     {productList}
    </div>
  )
}

export default App;
