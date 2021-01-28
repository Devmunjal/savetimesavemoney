import React from 'react'
import { Card } from 'semantic-ui-react'

import Image from '../Assets/cxzcz.jpg'
function TopCategories() {
    return (
        <div style={{display:"block",marginRight:"auto",marginLeft:"auto",marginTop:"50px"}}>
            <h2 >
                Shop From Top Categories
            </h2>
            <div className={window.screen.width<600?"ui  three column grid ":"ui six column grid"}>
                <div className="column" style={{padding:"20px"}}>
                <Card color='red' image={Image} />
                <p style={{textAlign:"center",fontSize:"1.2rem"}}>Lorem Ipsum</p>
                </div>
                <div className="column" style={{padding:"20px"}}>
                <Card color='red' image={Image} />
                <p style={{textAlign:"center",fontSize:"1.2rem"}}>Lorem Ipsum</p>
                </div>
                <div className="column" style={{padding:"20px"}}>
                <Card color='red' image={Image} />
                <p style={{textAlign:"center",fontSize:"1.2rem"}}>Lorem Ipsum</p>
                </div>
                <div className="column" style={{padding:"20px"}}>
                <Card color='red' image={Image} />
                <p style={{textAlign:"center",fontSize:"1.2rem"}}>Lorem Ipsum</p>
                </div>
                <div className="column" style={{padding:"20px"}}>
                <Card color='red' image={Image} />
                <p style={{textAlign:"center",fontSize:"1.2rem"}}>Lorem Ipsum</p>
                </div>
                <div className="column" style={{padding:"20px"}}>
                <Card color='red' image={Image} />
                <p style={{textAlign:"center",fontSize:"1.2rem"}}>Lorem Ipsum</p>
                </div>
            </div>
        </div>
    )
}

export default TopCategories
