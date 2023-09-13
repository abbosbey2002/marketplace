import React, { useState } from 'react'
import axios from 'axios'

function Reigister() {
// ...

    const [name, setName] = useState();
    const [email, setemail] = useState();
    const [password, setPassword] = useState();
    const [resedPassword, setResetPassword] = useState();

const createUser = () => {
    
    
    console.log(name, email, password)
  const data = {
    name: name,
    email: email,
    password: password
  };
  let url="http://localhost:8000/api/saveuser"
  if(password === resedPassword){
      axios.post(url, data)
        .then(response => {
          // Success response handling
          console.log(response.data);
        })
        .catch(error => {
          // Error handling
          console.error(error);
        });
  }else{
    alert('aka nima gap')
  }

};

// ...

// Somewhere in your component or button click event, call the createUser function

  return (
    <>
      <div className="page-banner-area portfolio-page-area">
  <div className="container">
    <div className="single-page-banner-content">
      <h1>Register</h1>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>Register</li>
      </ul>
    </div>
  </div>
        </div>

        <div className="my-account-area pt-100 pb-100">
  <div className="container">
    <div className="my-account-form login-form">
      <h2>Create An Account</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
              onChange={e => setemail(e.target.value)} 
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
              onChange={e => setPassword(e.target.value)} 
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input
              onChange={e => setResetPassword(e.target.value)} 
                type="password"
                className="form-control"
                placeholder="Repeat Password"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="my-account-btn">
              <button onClick={createUser}  className="default-btn">
                Register Now
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
    </div>

    

    </>
  )
}

export default Reigister
