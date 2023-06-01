import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function getToken() {
  return localStorage.getItem("authToken");
}

export default function Home() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = getToken();
    if(token){
      setUsername("dustn123");
    }
  },[]);

  return(
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