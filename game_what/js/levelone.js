 function func_pon() {
    document.getElementById('rules').style.visibility='hidden';
    sled.disabled=true;
    var time = Math.floor(Math.random() * 10000)+2000; 
      setTimeout(function() {
        document.getElementById('bulb').src = 'img/bulbon.jpg'; 
      }, time);
      var schet=0;
      var vremya=Math.round(time/1000);
      guess.addEventListener("click", function() {
      let pop = parseInt(vvod.value);
      if (pop==vremya)
       {
       schet +=5;
       document.getElementById('score').innerHTML=` ${schet}`;
       
       if (` ${schet}`>0)
       sled.disabled=false;
       }
      else
      {
      {schet-= 1;
        document.getElementById('score').innerHTML=` ${schet}`;
      }
      }
      }
      )
 
    }

      function func_back() {
        this.location.href='index.html';
      }

      function nov() {
        document.location.reload();
      }

      
      sled.addEventListener('click',  () => location = 'leveltwo.html');
   
      /*sled.addEventListener('click', function () {
      var res1 = Number(document.getElementById('score').value);
      localStorage.setItem("res1",res1.value);
      console.log('res1: ', localStorage.getItem('res'));

      })*/