// 데이터 베이스의 데이터를 임의로 생성(JSON)

// 사용자 정보 데이터(객체 세 개가 들어있는 배열)
const users = [ 
  {uid : 'bsy', uname : '배상엽', upw : '1234'},
  {uid : 'abc123', uname : '홍길동', upw : 'abcd'},
  {uid : 'def123', uname : '김철수', upw : '1515'},
]


//request 가상 객체를 만들어 가상의 통신 구현
const request = {
  login:function (id, pw){
    for(u of users){
      if(u.uid === id && u.upw === pw){
        return true;
      }
    }
    return false;
  }
}
