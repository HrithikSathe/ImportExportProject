import React from 'react'

const CardsBuySell = (props) => {
    return (
        <>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 ">
                <div class="card" style={{width: "18rem"}}>
                    <img src={props.img} class="card-img-top" alt="Image" />
                    <div class="card-body">
                        <h5 class="card-title">{props.Title}</h5>
                        <p class="card-text">{props.description}</p>
                        <a href="#" class="btn btn-primary">{props.text}</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardsBuySell
