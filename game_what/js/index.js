// Inputs

$('#fancy-inputs input[type="text"]').blur(function(){
  if($(this).val().length > 0){
    $(this).addClass('white');
  } else {
    $(this).removeClass('white');
  }
});

function func_vhod() {
var userl = document.getElementById('login');
var userp = document.getElementById('passw');
localStorage.setItem("login",userl.value);
localStorage.setItem("passw",userp.value);
console.log('user_login: ', localStorage.getItem('login'));
console.log('user_password: ', localStorage.getItem('passw'));
if (userl.value!=0 && userp.value!=0)
this.location.href='levelone.html';
else
alert('Please, enter your login and password!');
}
/*
function getjson() {
  var str = localStorage.getItem('json');
  console.log("login: "+str['login'] + " passsword: " +str['passw']);
  var res = JSON.parse(str);
  console.log("data = ", res);
}*/