import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (props) => {
    return (
        <>
          
                <div className="col-sm-12 col-md-4 col-lg-4 col-12 ">
                    <div className="card">
                        <div className="card-body">
                            <i className="fa fa-users"></i>
                            <h5 className="card-title">{props.CardTitle}</h5>
                            <p className="card-text">{props.CardText}</p>
                            <Link to="#" className="btn btn-primary">Go </Link>
                        </div>
                    </div>
                </div>
            

        </>
    )
}

export default Cards
