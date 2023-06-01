import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [input, setInput] = useState({username : "", password : ""});
  const [Loding, setLoding] = useState(false);
  const navigate = useNavigate();

  function handleOnchange(e) {
    setInput((input) => ({...input, [e.target.name] : e.target.value}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    autoLogin();
  }

  const hardCodedToken = 'eyJhbCI6IkhTMjU2IiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VybmFtZSI6ImR1c3RuMTIzIiwicGFzc3dvcmQiOjEyMzR9.qyHjEn3Lav_MzOix1H4bBM84dWPDcnTrSyl6G2zOEOc';
  
  function autoLogin() {
    const {username , password} = input;
    if(username === 'dustn123' && password === '1234'){
      const hardCodedToken = 'eyJhbCI6IkhTMjU2IiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VybmFtZSI6ImR1c3RuMTIzIiwicGFzc3dvcmQiOjEyMzR9.qyHjEn3Lav_MzOix1H4bBM84dWPDcnTrSyl6G2zOEOc';
      localStorage.setItem('authToken', hardCodedToken);
      setLoding(true);
      navigate('/');
    } else{
      setLoding(false);
      console.log("로그인 실패"); 
  }
  
  // 로컬 스토리지에서 토큰을 가져옴
  const storedToken = localStorage.getItem('authToken');

  // 저장된 토큰이 임의의 토큰과 일치하는지 확인
  if (storedToken === hardCodedToken) {
      console.log('Automatically logged in');
  } else {
      console.log('Token is not valid');
  }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" onChange={handleOnchange}/>
        <input type="password" name="password" onChange={handleOnchange}/>
        <button type="submit" onClick={handleSubmit}>LOGIN</button>
      </form>
    </div>
  )
}

export default Login;