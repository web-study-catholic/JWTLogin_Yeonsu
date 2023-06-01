import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function getToken() {
  return localStorage.getItem("authToken");
}

export default function Home() {
  const [username, setUsername] = useState("");

  //컴포넌트가 마운트된 후 한번 실행
  //getToken을 호출해 토큰의 존재 여부를 확인하고 토큰이 있을 경우에만 username 상태를
  //업데이트하고 화면에 사용자가 누군지 보여줌
  useEffect(() => {
    const token = getToken();
    if(token){
      setUsername("dustn123");
    }
  },[]);

  return(
    // 조건부로 렌더링했음
    <div>
      <h1>HOME</h1>
      {username? (
        <div>
          <a>{username}님 안녕하세요</a></div>
      ):(
      <div><Link to="/login">로그인</Link></div>
      )}
    </div>
  );
}