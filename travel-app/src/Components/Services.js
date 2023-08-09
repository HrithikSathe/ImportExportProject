import React from 'react';
import Cards from './Cards';
import Cards2 from './Cards2';

const Services = (props) => {
    return (
        <>
            <section className="services py-5 bg-light" >
                <div className="container">
                    <div className="text-center my-5">
                        <h1>Our <span className="text-primary">Services</span></h1>
                        <hr className="w-25 m-auto" />
                    </div>


                    <div className="row ">
                        <Cards CardTitle="Total Security"  CardText="Maintaining the security of our platform is our highest priority. We first scrutinize
                                        every company seeking access to our B2B marketplace, making sure their company is legitimate and
                                        up-to-date" />

                        <Cards2 CardTitle="Strong Protection"  CardText="Our blockchain technology is truly game-changing – never before could trade
                                        stakeholders communicate and share sensitive data so quickly and securely in a wholesale marketplace." />               
                        <Cards CardTitle="24/7 Quality Service"  CardText="Our suite of services is completely comprehensive. From introduction to order
                                        completion, our users have the complete end-to-end support necessary for a trade transaction.." />               
                       
                    </div>

                    <div className="row my-5">
                        <Cards CardTitle="Total Security"  CardText="Maintaining the security of our platform is our highest priority. We first scrutinize
                                        every company seeking access to our B2B marketplace, making sure their company is legitimate and
                                        up-to-date" />

                        <Cards2 CardTitle="Strong Protection"  CardText="Our blockchain technology is truly game-changing – never before could trade
                                        stakeholders communicate and share sensitive data so quickly and securely in a wholesale marketplace." />               
                        <Cards CardTitle="24/7 Quality Service"  CardText="Our suite of services is completely comprehensive. From introduction to order
                                        completion, our users have the complete end-to-end support necessary for a trade transaction.." />               
                       
                    </div>

                    <div className="row  my-5">
                        <Cards CardTitle="Total Security"  CardText="Maintaining the security of our platform is our highest priority. We first scrutinize
                                        every company seeking access to our B2B marketplace, making sure their company is legitimate and
                                        up-to-date" />

                        <Cards2 CardTitle="Strong Protection"  CardText="Our blockchain technology is truly game-changing – never before could trade
                                        stakeholders communicate and share sensitive data so quickly and securely in a wholesale marketplace." />               
                        <Cards CardTitle="24/7 Quality Service"  CardText="Our suite of services is completely comprehensive. From introduction to order
                                        completion, our users have the complete end-to-end support necessary for a trade transaction.." />               
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
