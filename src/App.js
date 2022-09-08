import logo from './logo.svg';
import './App.css';
import Form from './components/Form' 
import Register from './components/Register' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import InitToken from "./components/InitToken";

function App() {
  const { uname, setUname } = InitToken()[0];
  const { token, setToken } = InitToken()[1];

  if(token) {
    return <Form setToken={setToken} setUsername={setUname}/>
  }

  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className='d-flex justify-content-center m-3'>
              Recruto CRM
          </h3>
          <nav className="navbar navbar-expand-sm bg-light navbar-dark">
            <ul className="navbar-nav">
            <li className="nav-item- m-1">
                <NavLink className="btn btn-light btn-outline-primary" to="/">
                Вход
              </NavLink>
            </li>
            <li className="nav-item- m-1">
                <NavLink className="btn btn-light btn-outline-primary" to="/register">
                Регистрация
              </NavLink>
            </li>
          </ul>
          </nav>
    </div>
    <Routes>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
