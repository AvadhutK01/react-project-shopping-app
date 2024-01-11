import React, { useEffect, useState } from 'react'

const CartComponent = () => {

    // const [totalAmount, setTotalAmount] = useState(0);

    // useEffect(() => {
    //     setTotalAmount(cartProducts.reduce((total, product) => total + product.price, 0));
    // }, [cartProducts])

    // const incrementQuantity = (Id, size) => {

    // }

    // const decrementQuantity = (Id, size) => {

    // }

    return (
        <>
            {/* <ul>
                {cartProducts.map((product) => (
                    <li key={product.Id}>
                        <div className='ms-5'>{product.quantity}x {product.name} - {product.size}</div>
                        <div className="custom-number-input h-10 w-32 mx-1">
                            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button data-action="decrement" onClick={() => decrementQuantity(product.Id, product.size)} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                </button>
                                <button data-action="increment" onClick={() => incrementQuantity(product.Id, product.size)} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className='mx-5'>र{product.price}</div>
                    </li>
                ))}
            </ul>
            <div className="total">Total: र{totalAmount}</div>
        </> */}
        </>
    )
}

export default CartComponent