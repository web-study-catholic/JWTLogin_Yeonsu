import axios from 'axios';

//간단한 로그인 로직
onLogin = (email, pw) => {
  const data = {
    email,
    pw,
  };
  axios.post('/login', data).then(response => {
    const {accesstoken} = response.data;

    //API 요청하는 콜 마다 헤더에 accessToken 담아 보내도록 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accesstoken}`;
    //accessToken을 localStorage, cookie등에 저장하지 않음
  }).catch((error) => {
    console.log(error.response.data);
  })
}

export const requestLogin = async(email, pw) => {
  return await axios
  .post(`serverURL/login/`,{
    email : email,
    pw : pw,
  },
  {withCredentials: true}
  )
  .then((response) => {
    //toekn이 필요한 API요청시 header Authorization에 token 담아서 보내기
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.access_token}`;
    return response.data;
  })
  .catch((error) => {
    console.log(error.response.data);
    return "이메일 혹은 비밀번호를 다시 입력하세요";
  });
}

export const requestAccessToken = async(refresh_token) => {
  return await axios
  .post(`serverURL/token/refresh`, {
    refresh : refresh_token,
  })
  .then((response) => {
    return response.data.access;
  })
  .catch((e) => {
    console.log(e.response.data);
  });
}

//accessToken이 필요할 때, checkAccessToken을 호출함
//accessToken이 undefined면 새로 불러서 설정, 아니면 원래 있던 token반환
//split[1]번 인덱스를 불러운 이유는 JWT에 대한 데이터를 교환하므로 인증 타입 Bearer가 사용되는데,
//axios.defaults.headers.common["Authorization"]로 토큰을 불러오면 Bearer가 붙어서 보기 때문(인증타입 떼고 반환)
export const checkAccessToken = async(refresh_token) => {
  if(axios.defaults.headers.common["Authorization"] === undefined) {
    return await requestAccessToken(refresh_token).then((response) => {
      return response;
    });
  }else {
    return axios.defaults.headers.common["Authorization"].split(" ")[1];
  }
};

//로그인 성공시 localStorage token 저장

if(response.access_token) {

}

// 임의의 토큰 값 설정
const hardCodedToken = 'eyJhbCI6IkhTMjU2IiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VybmFtZSI6ImR1c3RuMTIzIiwicGFzc3dvcmQiOjEyMzR9.qyHjEn3Lav_MzOix1H4bBM84dWPDcnTrSyl6G2zOEOc';

function login(username, password) {
  
    // 임의의 토큰을 로컬 스토리지에 저장
    localStorage.setItem('authToken', hardCodedToken);
}

function autoLogin() {
    // 로컬 스토리지에서 토큰을 가져옴
    const storedToken = localStorage.getItem('authToken');

    // 저장된 토큰이 임의의 토큰과 일치하는지 확인
    if (storedToken === hardCodedToken) {
        console.log('Automatically logged in');
    } else {
        console.log('Token is not valid');
    }
}

// 페이지 로딩 시 자동 로그인을 수행
window.onload = function() {
    autoLogin();
}

