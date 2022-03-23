import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    // const [card, setCard] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCard = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)

        //     const newCard = [...card, product]
        //     setCard(newCard)

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product =>
                    <Product
                        key={product.id}
                        product={product}
                        addToCard={addToCard}
                    ></Product>)
                }
            </div>
            <div className="card container">
                <h4>Orader Samary</h4>
                <h4>Selected Items:{cart.length}</h4>
            </div>
        </div>
    )
}

export default Shop