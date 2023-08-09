import React from 'react'
import CardsBuySell from './CardsBuySell';
import BuyImg from './img/Buy.jpg'
const Buy = (props) => {
    return (
        <>
            <section className="services py-5 bg-light" >
                <div className="container">
                    <div className="text-center my-5">
                        <h1>Buy <span className="text-primary"> Products</span></h1>
                        <hr className="w-25 m-auto" />
                    </div>


                    <div className="row ">
                        <CardsBuySell img={BuyImg} Title="Buy1" text="Buy" description="BUY1 BUY1 BUY1 BUY1 BUY1 BUY1 BUY1 BUY1 BUY1 BUY1 BUY1vvvBUY1BUY1BUY1BUY1BUY1"  />
                        <CardsBuySell img={BuyImg} Title="Buy2" text="Buy" description=" abcdefghijklmnopqrstuvwxyz" />
                        <CardsBuySell img={BuyImg} Title="Buy3" text="Buy" description=" welcome welcome wbvibkjdaulygvlevir" />
                    </div>


                </div>
            </section>
        </>
    )
}

export default Buy

