const regist = function(){
  const firstName = document.querySelector('input[name="firstname"]');
  const lastName = document.querySelector('input[name="lastname"]');
  const id = document.querySelector('input[name="reg_email"]');
  const pw = document.querySelector('input[name="reg_pass"]');
  const year = document.querySelector('select[name="birthday_year"]');
  const month = document.querySelector('select[name="birthday_month"]');
  const date = document.querySelector('select[name="birthday_day"]');
  const gender = document.querySelectorAll('input[name="sex"]');

  
  let userGender = 0;
  for(radio of gender){
    console.log(radio);
    if(radio.checked){
       userGender = radio.value;
    }
  }

  if(userGender === 0){
    alert('성별입력 필수!');
    return;
  }
  
}