import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

async function loginUser(credentials) {
  return fetch('/api/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })
      .then(data => data.json())
}


function Form({setToken, setUname}) {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    const token = loginUser({username, password});
    console.log(token);
    setToken(token);
    setUname(token);
  };

  return (
    <div className="App">
        <div className='container' style={{textAlign:'left', marginTop: '2%'}}>

          <form onSubmit={handleSubmit}>
            <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Имя пользователя</label>
              <input type="email" onChange={(e) => setUsername(e.target.value)} className="mt-1 form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputPassword1">Пароль</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="mt-1 form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" style={{padding: '0.7% 3%'}} className="mt-4 btn btn-primary">Вход</button>
          </form>
        </div>    
    </div>
  );
}

export default Form;
