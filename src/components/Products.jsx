import React from 'react'
import Image from '../assets/prod1.jpg'
import './product.css'

const Products = () => {

    const product = [
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
        {
        pn:"Bag",
        img:Image,
        price:30,
        short:"Men's Cloathing"
        },
    ]

  return (
    <div className='container'>
        <div className="prod">
        {
            product.map((prods)=>(
                <div className="product" key={Math.random()}>
                    <div className="prod_image">
                        <img src={prods.img} alt="pic" />
                    </div>
                    <div className="prod_details">
                        <h3>{prods.pn}</h3>
                        <p>{prods.price}</p>
                        <h5>{prods.short}</h5>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Products
