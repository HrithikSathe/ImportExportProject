import React from 'react'
import CardsBuySell from './CardsBuySell'
import SellImg from './img/Sell.jpg'


const Sell = (props) => {
  return (
    <>
    <section className="services py-5 bg-light" >
                <div className="container">
                    <div className="text-center my-5">
                        <h1>Sell <span className="text-primary">Products</span></h1>
                        <hr className="w-25 m-auto" />
                    </div>


                    <div className="row ">
                        <CardsBuySell img={SellImg} Title="Sell1" text={"Sell"} description="Sell 1 selle sell selll selll sell  slell slle sle slel  ls lel l l eelel" />
                        <CardsBuySell img={SellImg} Title="Sell2" text={"Sell"} description=" abcdefghijklmnopqrstuvwxyz" />
                        <CardsBuySell img={SellImg} Title="Sell3" text={"Sell"} description=" welcome welcome wbvibkjdaulygvlevir" />
                    </div>
                </div>
    </section>
      
    </>
  )
}

export default Sell
