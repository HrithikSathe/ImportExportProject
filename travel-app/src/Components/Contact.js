import React from 'react'
import ContactImg from './img/contact.jpg'

const Contact = () => {
  return (
    <>
        <section className="contact py-5" >
    <div className="container">
      <div className="text-center my-5">
        <h1>Contact <span className="text-primary">Us</span></h1>
        <hr className="w-25 m-auto" />
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>

            <div className="col-md-6">
              <label for="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label for="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </form>

        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end p-40">
          <img src={ContactImg} height="350px" width="350px" className="img-fluid img-thumbnail" alt="" />
        </div>
      </div>
    </div>

  </section>
    </>
  )
}

export default Contact
