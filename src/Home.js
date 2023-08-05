import React from 'react'
import Header from './components/Header';
import Products from './components/Products';
import { useEffect, useState } from 'react';
import { CartProvider } from 'react-use-cart';
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
      const fetchProducts = async () => {
        fetch(
          `https://fakestoreapi.com/products`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data); 
            setProducts(data);     
          });
        }
        fetchProducts();
    },[])
    return (
      <CartProvider>
      <div className="App">
        <h1 className='text'></h1>
       <Header/>
       
       <Products products ={products}/>
      </div>
      </CartProvider>
    );
  }
  


export default Home
