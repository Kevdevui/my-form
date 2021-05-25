import React, { useState } from 'react'

const SignupForm = () => {

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: ""
    });

    const handleFormSubmit = (event) =>{
        event.preventDefault();
    } 

    return (
        <section className="container">
            <div className="app-wrapper">
                <div>
                    <h2>Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="lable">Full Name</label>
                        <input className="input" type="text" name="fullname" value={values.fullname} />
                    </div>
                    <div className="email">
                        <label className="lable">Email</label>
                        <input className="input" type="email" name="email" value={values.email} />
                    </div>
                    <div className="password">
                        <label className="lable">Password</label>
                        <input className="input" type="password" name="password" value={values.password} />
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign up</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignupForm
