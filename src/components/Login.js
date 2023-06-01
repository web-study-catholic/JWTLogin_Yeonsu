import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [input, setInput] = useState({username : "", password : ""});
  //const [Loding, setLoding] = useState(false);
  const navigate = useNavigate();

  //인풋 필드의 변경 input상태를 업데이트하고 'name'속성을 사용해 해당 필드값을 업데이트함
  function handleOnchange(e) {
    setInput((input) => ({...input, [e.target.name] : e.target.value}));
  }

  //
  function handleSubmit(e) {
    e.preventDefault();
    autoLogin();
  }

  const hardCodedToken = 'eyJhbCI6IkhTMjU2IiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VybmFtZSI6ImR1c3RuMTIzIiwicGFzc3dvcmQiOjEyMzR9.qyHjEn3Lav_MzOix1H4bBM84dWPDcnTrSyl6G2zOEOc';
  
  //input상태에서 사용자와 비밀번호를 가지고 와 입력된 값이 일치하는지 확인함
  //일치하는 경우 토큰을 로컬 스토리지에 저장하고 네비게이트를 이용해 home으로 이동

  function autoLogin() {
    const {username , password} = input;
    if(username === 'dustn123' && password === '1234'){
      const hardCodedToken = 'eyJhbCI6IkhTMjU2IiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VybmFtZSI6ImR1c3RuMTIzIiwicGFzc3dvcmQiOjEyMzR9.qyHjEn3Lav_MzOix1H4bBM84dWPDcnTrSyl6G2zOEOc';
      localStorage.setItem('authToken', hardCodedToken);
      //setLoding(true);
      navigate('/');
    } else{
      //setLoding(false);
      console.log("로그인 실패"); 
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