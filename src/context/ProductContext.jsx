import React, { useState } from "react";

const productContext = React.createContext({
    products: [],
    increaseStocks: (productId, size, quantity) => { },
    decreaseStocks: (productId, size, quantity) => { }
})

export const ProductContextProvider = (props) => {
    const [productList, setProductList] = useState([
        {
            id: 1,
            name: 'T-shirt',
            description: 'Comfortable cotton T-shirt',
            price: 250,
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
            price: 600,
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
            price: 350,
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
            price: 400,
            image: 'dressshirt.webp',
            stocks: {
                Small: 25,
                Medium: 35,
                Large: 15
            }
        },
    ]);

    const decreaseStocks = (productId, size, quantity) => {
        setProductList((prevProducts) => {
            return prevProducts.map((product) => {
                if (product.id === productId && product.stocks[size] >= quantity) {
                    return {
                        ...product,
                        stocks: {
                            ...product.stocks,
                            [size]: product.stocks[size] - quantity
                        }
                    };
                }
                return product;
            });
        });
    };

    const increaseStocks = (productId, size, quantity) => {
        setProductList((prevProducts) => {
            return prevProducts.map((product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        stocks: {
                            ...product.stocks,
                            [size]: product.stocks[size] + quantity
                        }
                    };
                }
                return product;
            });
        });
    };

    return <productContext.Provider value={{ products: productList, increaseStocks: increaseStocks, decreaseStocks: decreaseStocks }}>
        {props.children}
    </productContext.Provider>
}

export default productContext;