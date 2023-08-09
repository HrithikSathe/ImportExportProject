import React, { useState } from 'react'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    console.log(email, password ,confirmPassword)

    const handleSubmit = (event) => {
        event.preventDefault();


    }
    return (
        <>
            <div className='d-flex justify-content-center align-item-center vh-100 ' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="p-3 bg-white w-25">

                    <form onSubmit={handleSubmit}>
                        <div className='mb-3 '>
                            <label htmlFor="email">email</label>
                            <input type="email" placeholder='Enter email' className='form-control' onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor="password">password</label>
                            <input type="password" placeholder='Enter Password' name="" id="" className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className='mb-3 '>
                            <label htmlFor="confirmpassword"> Confirm password</label>
                            <input type="confirmpassword" placeholder='Re enter Password' name="" id="" className='form-control' onChange={(e) => { setconfirmPassword(e.target.value) }} />
                        </div>
                        <button className="btn btn-primary">Signup</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Signup
