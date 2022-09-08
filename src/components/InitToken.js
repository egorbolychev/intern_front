import {useState} from 'react';

export default function InitToken() {

  const getToken = () => {
    let tokenString = localStorage.getItem('token');
    if (tokenString){
      tokenString = tokenString.replaceAll("\"", "")
    }
    // const userToken = JSON.parse(tokenString);
    return tokenString
  };

  const getName = () => {
    let unameString = localStorage.getItem('uname');
    if (unameString){
      unameString = unameString.replaceAll("\"", "")
    }
    return unameString
  };

  const [token, setToken] = useState(getToken());
  const [uname, setUname] = useState(getName());

  const saveToken = userToken => {
    if (userToken) {
      localStorage.setItem('token', JSON.stringify(userToken.token));
      setToken(userToken.token);
    } else setToken(userToken)
  };

  const saveName = userUname => {
    if (userUname) {
      localStorage.setItem('uname', JSON.stringify(userUname.username));
      setUname(userUname.username)
    } else setUname(userUname)
  };

  return [{
    setUname: saveName,
    uname
  },{
    setToken: saveToken,
    token
  }]
}
