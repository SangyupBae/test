//메인화면 요소들이 로딩되고 나면
window.onload = function(){
  const tcard = document.querySelector('#temp-card');

  const li = document.createElement('li');

  console.log(tcard.innerHTML);
  li.innerHTML = tcard.innerHTML;

  //화면에 추가
  const ul = document.querySelector('main section.container ul.list');
  // ul.appendChild(li); 복사가 아님
  // ul.appendChild(li);
  // ul.appendChild(li);
  // ul.appendChild(li);
  // ul.appendChild(li.cloneNode(true));
  // ul.appendChild(li.cloneNode(true));
  // ul.appendChild(li.cloneNode(true));

  //데이터 불러오기
  const postListData = request.getMainList();

  postListData.forEach(data => {
    console.log(data);
    const element = li.cloneNode(true);

    let html = element.innerHTML;

    html = html.replace('{picon}', data.picon);
    html = html.replace('{ptitle}', data.ptitle);
    html = html.replace('{plabel}', data.plabel);
    html = html.replace('{pcompany}', data.pcompany);
    html = html.replace('{ptext}', data.ptext);
    html = html.replace('{pdetail}', data.pdetail);
    html = html.replace('{pimg}', data.pimg);

    element.innerHTML = html;
    ul.appendChild(element);
  });

}