import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function Register() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://boiling-refuge-66454.herokuapp.com/images/237/comments`,{
      method: "POST",
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body:  JSON.stringify({
          username: username,
          password: password,
          email: email

      }),
    })
      .then(response => response.json())
      .then(json=>console.log('Тут хочу получить json, но ничего не приходит',json))
    
    
  };
  
  return (
    <div className="App">
        <div className='container' style={{textAlign:'left', marginTop: '2%'}}>

          <form onSubmit={handleSubmit}>
            <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Имя пользователя</label>
              <input onChange={(e) => setUsername(e.target.value)} className="mt-1 form-control" id="exampleInputUsername" placeholder="Enter username"/>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} className="mt-1 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputPassword1">Пароль</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="mt-1 form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" style={{padding: '0.7% 3%'}} className="mt-4 btn btn-primary">Регистрация</button>
          </form>
        </div>    
    </div>
  );
}

export default Register;