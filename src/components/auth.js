export function login({username, password}) {
  if(username === 'dustn123' && password === '1234'){
    return {
      access_token : '',
      refresh_token : '',
    };
  }else {
    return undefined;
  }
}

export function Logout() {
  console.log('localStorage set Logout!');
  window.localStorage.setItem('logout', Date.now());
}