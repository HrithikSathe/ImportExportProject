import React from 'react'
import Img1 from './img/img.webp';
import Img2 from './img/img2.webp';
import Img3 from './img/img3.webp';
import Img4 from './img/about.avif';


const Home = () => {
    return (
        <>
        {/* Image slider */}
            <div id="carouselExampleIndicators" className="carousel slide " style={{ marginTop: "75px" }} data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Img3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        {/* new section  */}
            <div class=" py-1">
                <div className="container">
                    <div className="text-center my-5">
                        <h1>Import <span className='text-primary'>Export</span></h1>
                        <hr className="m-auto w-25" />
                    </div>

                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6 col-12 ">
                            <h1>Grow Your Business with <span className="text-primary"> Our Experts</span></h1>
                            <button type="button" className="btn btn-dark">More</button>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end ">
                            <img src={Img4} style={{ height: "350px", width: "400px" }}  className="img-fluid img-thumbnail" alt="" />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home;
