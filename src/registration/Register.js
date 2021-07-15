import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import img1 from '../components/app-form/img1.jpg';
import '../components/app-form/Form.css';
import axios from "axios";
class Register extends Component{
    state={};
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            username: this.username,
            confirm_password: this.repeatPassword
        };
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }
        postData('https://eschoolbackende.herokuapp.com/api/auth/register', data)
                .then(res => {
                    console.log(res); // JSON data parsed by `data.json()` call
                    // localStorage.setItem('token', res.first_name);
                    this.setState({
                        registered: res.token
                    });
                });
    }
    render(){
        if(this.state.registered){
            return <Redirect to={'/login'}/>
        }
        return(

            <div className='form-container'>
                <div>

                    <img className='form-img' src={img1} alt='spaceship' />

                </div>
                <form onSubmit={this.handleSubmit} className='form'>
                    <h1>
                        Get started with E-School Today
                    </h1>
                    <div className='form-inputs'>
                        <label className='form-label'>First Name</label>
                        <input
                            className='form-input'
                            type='text'
                            name='fname'
                            placeholder='Enter your username'
                            onChange= { e => this.firstName = e.target.value}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Last Name</label>
                        <input
                            className='form-input'
                            type='text'
                            name='lname'
                            placeholder='Enter your username'
                            onChange= { e => this.lastName = e.target.value}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Username</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='Enter your username'
                            onChange= { e => this.username = e.target.value}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            onChange= { e => this.email = e.target.value}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Role</label>
                        <select className='form-input'>
                            <option>Teacher</option>
                            <option>Student</option>
                        </select>
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Education Level</label>
                        <input
                            className='form-input'
                            type='text'
                            name='education_level'
                            placeholder='Enter your Education Level'
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password'
                            placeholder='Enter your password'
                            onChange= { e => this.password = e.target.value}
                        />
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Confirm Password</label>
                        <input
                            className='form-input'
                            type='password'
                            name='password2'
                            placeholder='Confirm your password'
                            onChange= { e => this.repeatPassword = e.target.value}
                        />

                    </div>
                    <button className='form-input-btn'>
                        Sign up
                    </button>
                    <div className="text-center">
                        <Link className="small" to={'/login'}>Already have an account? Login!</Link>
                    </div>
                    <div className="text-center">
                        <Link to={'/'} className="small" >Back Home</Link>
                    </div>
                </form>
            </div>




            // <div className="container">
            //
            //     <div className="card o-hidden border-0 shadow-lg my-5">
            //         <div className="card-body p-0">
            //             <div className="row">
            //                 <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            //                 <div className="col-lg-7">
            //                     <div className="p-5">
            //                         <div className="text-center">
            //                             <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
            //                         </div>
            //                         <form className="user" onSubmit={this.handleSubmit}>
            //                             <div className="form-group row">
            //                                 <div className="col-sm-6 mb-3 mb-sm-0">
            //                                     <input type="text" className="form-control form-control-user"
            //                                            id="firstName"
            //                                            placeholder="First Name" onChange= { e => this.firstName = e.target.value}/>
            //                                 </div>
            //                                 <div className="col-sm-6">
            //                                     <input type="text" className="form-control form-control-user"
            //                                            id="lastName"
            //                                            placeholder="Last Name" onChange= { e => this.lastName = e.target.value}/>
            //                                 </div>
            //                                 <div className="col-sm-6">
            //                                     <input type="text" className="form-control form-control-user"
            //                                            id="lastName"
            //                                            placeholder="UserName" onChange= { e => this.username = e.target.value}/>
            //                                 </div>
            //                             </div>
            //                             <div className="form-group">
            //                                 <input type="email" className="form-control form-control-user"
            //                                        id="email"
            //                                        placeholder="Email Address" onChange= { e => this.email = e.target.value}/>
            //                             </div>
            //                             <div className="form-group row">
            //                                 <div className="col-sm-6 mb-3 mb-sm-0">
            //                                     <input type="password" className="form-control form-control-user"
            //                                            id="password" placeholder="Password" onChange= { e => this.password = e.target.value} />
            //                                 </div>
            //                                 <div className="col-sm-6">
            //                                     <input type="password" className="form-control form-control-user"
            //                                            id="repeatPassword" placeholder="Repeat Password" onChange= { e => this.repeatPassword = e.target.value}/>
            //                                 </div>
            //                             </div>
            //                             <button className="btn btn-primary btn-user btn-block">
            //                                 Register Account
            //                             </button>
            //                             <hr/>
            //                                 <Link to={'/'}
            //                                    className="btn btn-google btn-user btn-block">
            //                                     <i className="fab fa-google fa-fw"></i> Register with Google
            //                                 </Link>
            //                                 <Link to={'/'}
            //                                    className="btn btn-facebook btn-user btn-block">
            //                                     <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
            //                                 </Link>
            //                         </form>
            //                         <hr/>
            //                             <div className="text-center">
            //                                 <a className="small" href="forgot-password.html">Forgot Password?</a>
            //                             </div>
            //                             <div className="text-center">
            //                                 <Link className="small" to={'/'}>Already have an account? Login!</Link>
            //                             </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //
            // </div>
        );
    }

}

export default Register;