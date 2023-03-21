import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;

        Login(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .then(error => console.log(error));
    }

    return (
        <div className="hero w-full my-10 ">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-10">
    <h1 className="text-5xl font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            
          </label>
        </div>
        <div className="form-control mt-6">
          <input className='btn btn-primary' type='search' value='Login'></input>
        </div>
      </form>
      <p className='text-center'>New to Genius Car<Link className='text-orange-600 font-bold' to="/signin">Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;