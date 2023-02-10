// 데이터 베이스의 데이터를 임의로 생성(JSON)

//메인 화면 CARD 광고 데이터
const mains = [
  {
    pid:'p001',
    picon:'../images/edu_icon.png',
    ptitle:'에듀윌',
    plabel:'🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
    pcompany:'EDUWILL.NET',
    ptext:'입문교재 선착순 무료신청',
    pimg:'../images/sample-image.jpg',
  },
  {
    pid:'p002',
    picon:'../images/edu_icon.png',
    ptitle:'에듀윌',
    plabel:'🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
    pcompany:'EDUWILL.NET',
    ptext:'입문교재 선착순 무료신청',
    pdetail:'합격자 수 1위 에듀윌 공인중개사',
    pimg:'../images/game-1.jpg',
  },
  {
    pid:'p003',
    picon:'../images/edu_icon.png',
    ptitle:'에듀윌',
    plabel:'🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
    pcompany:'EDUWILL.NET',
    ptext:'입문교재 선착순 무료신청',
    pdetail:'합격자 수 1위 에듀윌 공인중개사',
    pimg:'../images/game-2.jpg',
  },
  {
    pid:'p004',
    picon:'../images/edu_icon.png',
    ptitle:'에듀윌',
    plabel:'🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
    pcompany:'EDUWILL.NET',
    ptext:'입문교재 선착순 무료신청',
    pdetail:'합격자 수 1위 에듀윌 공인중개사',
    pimg:'../images/game-3.jpg',
  },
  {
    pid:'p005',
    picon:'../images/edu_icon.png',
    ptitle:'에듀윌',
    plabel:'🚨기간한정 특별 이벤트🚨\n초시생 필수템, 만화입문서 무료배포!\n#합격자수 1위 #에듀윌 #공인중개사',
    pcompany:'EDUWILL.NET',
    ptext:'입문교재 선착순 무료신청',
    pdetail:'합격자 수 1위 에듀윌 공인중개사',
    pimg:'../images/game-a.jpg',
  },

];


const request = {
  getMainList : function(){
    return mains;
  }
}