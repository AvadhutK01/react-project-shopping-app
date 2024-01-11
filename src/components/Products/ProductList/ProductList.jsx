import React from 'react'
import ProductItems from '../ProductItems/ProductItems'
import './ProductList.css'
const ProductList = () => {
    const productList = [
        {
            id: 1,
            name: 'T-shirt',
            description: 'Comfortable cotton T-shirt',
            price: 19.99,
            image: 'tshirt.webp',
            stocks: {
                Small: 50,
                Medium: 75,
                Large: 30
            }
        },
        {
            id: 2,
            name: 'Jeans',
            description: 'Classic blue denim jeans',
            price: 39.99,
            image: 'jeans.png',
            stocks: {
                Small: 20,
                Medium: 40,
                Large: 25
            }
        },
        {
            id: 3,
            name: 'Hoodie',
            description: 'Warm and cozy hoodie',
            price: 49.99,
            image: 'hoodie.jpg',
            stocks: {
                Small: 15,
                Medium: 30,
                Large: 20
            }
        },
        {
            id: 4,
            name: 'Dress Shirt',
            description: 'Formal dress shirt',
            price: 29.99,
            image: 'dressshirt.webp',
            stocks: {
                Small: 25,
                Medium: 35,
                Large: 15
            }
        },
    ];
    return (
        <div className="product-list">
            {productList.map((product) => (
                <ProductItems key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList