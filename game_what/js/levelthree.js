function func_pon() {
    document.getElementById('rules').style.visibility='hidden';
    document.getElementById('cheese').style.animation='block 1s infinite linear';
  
pole.addEventListener("click",jump)
  
  var mickey = document.getElementById("mickey");
  var cheese = document.getElementById("cheese");
  
  function jump(){
      if(mickey.classList == "animate"){return}
      mickey.classList.add("animate");
      setTimeout(function(){
        mickey.classList.remove("animate");
      },300);
  }

var clickCount = 0;
function klik() {
  clickCount++;
}
pole.addEventListener('click', klik);


  var checkDead = setInterval(function() {
      let mickeyTop = parseInt(window.getComputedStyle(mickey).getPropertyValue("top"));
      let cheeseLeft = parseInt(window.getComputedStyle(cheese).getPropertyValue("left"));
      if(cheeseLeft<20 && cheeseLeft>-20 && mickeyTop>=130){
        cheese.style.animation = "none";
        mickey.style.animation="none";
        pole.removeEventListener('click',klik);
        clickCount--;
        document.getElementById("scoreSpan").innerHTML = 'Ваш счет: ' + clickCount;
      }else{
        document.getElementById("scoreSpan").innerHTML = clickCount;
      }
  }, 10);
}
function func_back() {
  this.location.href='index.html';
}

function nov() {
  document.location.reload();
}

 /*st.addEventListener('click', function () {
      var res1 = Number(document.getElementById('score').value);
      localStorage.setItem("res1",res1.value);
      console.log('res1: ', localStorage.getItem('res'));

      })*/