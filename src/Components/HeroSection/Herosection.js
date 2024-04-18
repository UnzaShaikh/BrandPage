import React from 'react'

import './Herosection.css'
const Herosection = () => {
    return (
        <div className='HeroSection'>
            <div className='LeftSide'>
                <div className='LargerText'>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                </div>
                <div className="SmallerText">
                    <h3>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h3>
                </div>
                <div className="btns">
                    <button className='btn1'>Shop Now</button>
                    <button className='btn2'>Category</button>
                </div>
                <div className="Shop">
                    <h4>Also Available On</h4>
                    <div className="ShopOptions">
                        <img src="./amazon.png" alt="amazon" />
                        <img src="./flipkart.png" alt="flipkart" />
                    </div>

                </div>
            </div>
            <div className="rightSide">
                <img src="./shoe_image.png" alt="" />
            </div>
        </div>
    )
}

export default Herosection

