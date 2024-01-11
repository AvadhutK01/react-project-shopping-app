import React from 'react'
import HeaderComponent from '../UI/Header/HeaderComponent'
import SummeryComponent from '../UI/Summery/SummeryComponent'
import ProductList from '../Products/ProductList/ProductList'

const MainComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <SummeryComponent />
            <ProductList />
        </div>
    )
}

export default MainComponent