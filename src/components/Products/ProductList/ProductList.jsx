import React from 'react'
import ProductItems from '../ProductItems/ProductItems'

const ProductList = () => {
    const productList = [
        {
            id: 1,
            name: 'T-shirt',
            description: 'Comfortable cotton T-shirt',
            price: 19.99,
            image: 'tshirt.jpeg',
            stocks: {
                small: 50,
                medium: 75,
                large: 30
            }
        },
        {
            id: 2,
            name: 'Jeans',
            description: 'Classic blue denim jeans',
            price: 39.99,
            image: 'jeans.png',
            stocks: {
                small: 20,
                medium: 40,
                large: 25
            }
        },
        {
            id: 3,
            name: 'Hoodie',
            description: 'Warm and cozy hoodie',
            price: 49.99,
            image: 'hoodie.jpg',
            stocks: {
                small: 15,
                medium: 30,
                large: 20
            }
        },
        {
            id: 4,
            name: 'Dress Shirt',
            description: 'Formal dress shirt',
            price: 29.99,
            image: 'dressshirt.webp',
            stocks: {
                small: 25,
                medium: 35,
                large: 15
            }
        },
    ];
    return (
        <div className="meals-list">
            {productList.map((product) => (
                <ProductItems key={product.Id} product={product} />
            ))}
        </div>
    )
}

export default ProductList