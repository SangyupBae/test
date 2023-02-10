// 데이터 베이스의 데이터를 임의로 생성(JSON)


// 사용자 정보 데이터(객체 세 개가 들어있는 배열)
function User(uId, uFirstName, uLastName, uPw, uBirthYear, uBirthMonth, uBirthDate, uGender){
  this.uId = uId;
  this.uFirstName = uFirstName;
  this.uLastName = uLastName;
  this.uPw = uPw;
  this.uBirthYear = uBirthYear;
  this.uBirthMonth = uBirthMonth;
  this.uBirthDate = uBirthDate;
  this.uGender = uGender;
}

const users = [ 
  new User('test@naver.com', '길동', '홍', '1234', 2020,1, 1,1),
  new User('test2@naver.com', '철수', '김', 'aaaa', 1950,1, 1,2),
  new User('test3@naver.com', '상엽', '배', '1515', 2018, 1, 1, 2),
]


//request 가상 객체를 만들어 가상의 통신 구현
const request = {
  login:function (id, pw){
    for(u of users){
      if(u.uId === id && u.uPw === pw){
        return true;
      }
    }
    return false;
  },
  regist:function(u){
    users.push(u);
  }
}
