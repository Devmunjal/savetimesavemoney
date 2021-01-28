import React from 'react'
import Carusel from './Carusel'
import Footer from './Footer'
import Navigation from './Navigation'
import TopCategories from './TopCategories'
import TopDeals from './TopDeals'
import TopDealsForYou from './TopDealsForYou'

function MainPage() {
    return (
        <div style={{overflow:"hidden",paddingBottom:"70px"}}>
            <Navigation />
            <Carusel />
            <TopCategories />
            <TopDeals />
            <TopDealsForYou />
            <Footer />
        </div>
    )
}

export default MainPage

