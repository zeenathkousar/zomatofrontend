import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'


function Login() {
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  let navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://backendzomatowebsite.onrender.com/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    console.log(`respoone is ${response}`);
    const json = await response.json();
    console.log(json);
    // console.log(json.success)

    if (!json.success) {

      alert('enter valid credentials')
    }
    if (json.success) {
      localStorage.setItem('userEmail',credentials.email);
      localStorage.setItem('authToken',json.authToken);
      console.log(localStorage.getItem('authToken'))
      navigate('/');

    }

    

  }
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit} method='post'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="Form-label">Email address</label>
            <input type="email" className="Form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
            <div id="emailHelp" className="Form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="Form-label">Password</label>
            <input type="password" className="Form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
          </div>

          <button type="submit" className="m-3 btn btn-primary">Submit</button>
          <Link to='/signup' className='m-3 btn btn-danger' >I'm a New User </Link>
        </form>
      </div>
    </>
  )
}


export default Login
