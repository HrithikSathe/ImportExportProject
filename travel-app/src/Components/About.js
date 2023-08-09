import React from 'react'
import AboutImg from './img/about.avif'

const About = () => {
  return (
    <>
    <section className="about py-5" >
    <div className="container ">
      <div className="text-center my-5">
        <h1>About <span className="text-primary">Us</span></h1>
        <hr className="w-25 m-auto" />
      </div>  
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12 ">
          <h1>What is Export Portal?</h1>
          <p className="p-2">
            Export Portal is a B2B e-commerce platform aiming to be a comprehensive international trade hub for Small
            and Medium - sized Enterprises (SMEs) and their counterparts. Through our free b2b marketplace, businesses
            can find new markets for their products and services, and expand their reach to a global audience. Our
            exclusive benefits include a variety of features and tools to help businesses succeed in international
            trade.

            It is an online platform that provides a single point of access to international markets for Small and
            Medium-sized Enterprises (SMEs) helping them enter or expand their operations with overseas partners. Thus,
            our members can confidently trade, network, and communicate with other verified companies and experts from
            all over the world.

            Empowered by our proprietary blockchain technology, Export Portal prioritizes security, transparency,
            cost-effectiveness, and ease-of-use. With our top B2B marketplace, SMEs have an exponential growth
            opportunity – not just geographically, but within their verticals as well
          </p>
          <button type="button" className="btn btn-dark">More About us</button>

        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end">
          <img src={AboutImg} height="350px" width="350px" className="img-fluid img-thumbnail" alt="" />

        </div>

      </div>

    </div>
  </section>

      
    </>
  )
}

export default About
