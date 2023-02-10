// 화면의 element(태그) 들이 모두 로드된 후 호출되는 함수
// 일반적으로 document 안의 element 조작을 위해서는 로드된 후 실행시켜줌
window.onload = function(){

}

const login = function(){

  const id = document.querySelector('#email');
  const pw = document.querySelector('#pass');

  if(!id.value || !pw.value){
    alert('아이디 또는 비밀번호를 필수적으로 입력하세요!');
    return;
  }

  if (request.login(id.value, pw.value)){
    //로그인성공
    window.location.href = './02_facebook_main.html';
    return;
  }

  //로그인 실패
  alert('아이디 또는 비밀번호가 틀렸습니다');

}