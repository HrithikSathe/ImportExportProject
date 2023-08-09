import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email, password)
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
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
