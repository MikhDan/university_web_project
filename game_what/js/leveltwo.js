var timeleft = 10;
var downloadTimer;

function func_pon() {
    document.getElementById('rules').style.visibility='hidden';
    sled.disabled=true;
    downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("vremyaSpan").innerHTML = 0;
        document.getElementById("scoreSpan").innerHTML = ` ${schet-10}`;
        pole.stop();
      } else {
        document.getElementById("vremyaSpan").innerHTML = timeleft;
      }
      timeleft -= 1; 
    }, 1000);
  } 
 
  var elem;
  var fin;
  var a;
  var b;
  var c;
  var d;
  var e;
  var f;
  var g;
  var h;
  var i;
  var buttonMove = false;
  function startGame() {
    pole.start();
    elem = new component(50, 50, "gold", 10, 680);
    fin = new component(50, 50, "purple", 830, 20);
   
    a = new component(30, 30, "red", Math.floor(Math.random() * 800)+1, Math.floor(Math.random() * 700)+1);
    b = new component(30, 30, "green", Math.floor(Math.random() * 800)+1, Math.floor(Math.random() * 700)+1);
    c = new component(30, 30, "black", Math.floor(Math.random() * 800)+1, Math.floor(Math.random() * 700)+1);
    d = new component(30, 30, "pink", Math.floor(Math.random() * 800)+1, Math.floor(Math.random() * 700)+1);
    e = new component(30, 30, "blue", Math.floor(Math.random() * 800)+1, Math.floor(Math.random() * 700)+1);
    f = new component(30, 30, "grey", Math.floor(Math.random() * 800)+1, Math.floor(Math.random() * 700)+1);
    g = new component(30, 30, "MistyRose", Math.floor(Math.random() * 800)+1, Math.floor(Math.random() * 700)+1);
    h = new component(30, 30, "MediumSlateBlue", Math.floor(Math.random() * 800)+1, Math.floor(Math.random() * 700)+1);
    i = new component(30, 30, "Chartreuse", Math.floor(Math.random() * 800)+1, Math.floor(Math.random() * 700)+1);
    }
  var pole = { 
    canvas: document.createElement("canvas"),
    
    start: function() {
      this.canvas.width = 900;
      this.canvas.height = 750;
      
      this.context = this.canvas.getContext("2d");
      
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
      window.addEventListener('keydown', function(e) {
        pole.keys = (pole.keys || []);
        pole.keys[e.keyCode] = true;
      });
      window.addEventListener('keyup', function(e) {
        pole.keys[e.keyCode] = false;
      });
    },
    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
      clearInterval(this.interval);
    }
  }
 

  function component(width, height, color, x, y) {
  
    this.fon = pole;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
      ctx = pole.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
      },
      this.crashWith = function(smth) {
        var elleft = this.x;
        var elright = this.x + (this.width);
        var eltop = this.y;
        var elbottom = this.y + (this.height);
        var finleft = smth.x;
        var finright = smth.x + (smth.width);
        var fintop = smth.y;
        var finbottom = smth.y + (smth.height);
        var crash = true;
        if ((elbottom < fintop) || (eltop > finbottom) || (elright < finleft) || (elleft > finright)) {
          crash = false;
        }
        return crash;
      }
  }

  var schet=0;
  function updateGameArea() {
    if (elem.crashWith(a)||elem.crashWith(b)||elem.crashWith(c)||elem.crashWith(d)||elem.crashWith(e)||elem.crashWith(f)||elem.crashWith(g)||elem.crashWith(h)||elem.crashWith(i)) {
      
      schet-=1;
      document.getElementById('scoreSpan').innerHTML=` ${schet}`;
      elem.x = 10;
      elem.y = 680;
      elem.newPos();
    } 
    else if (elem.crashWith(fin))
    { pole.stop();
      schet+=5;
      document.getElementById('scoreSpan').innerHTML=` ${schet}`;
      clearInterval(downloadTimer);
      sled.disabled=false;}
    else {
      pole.clear();
      if (!buttonMove) {
        elem.speedX = 0;
        elem.speedY = 0;
      }
      if (pole.keys && (pole.keys[37] || pole.keys[65])) {
        elem.speedX = -2.5;
      }
      if (pole.keys && (pole.keys[39] || pole.keys[68])) {
        elem.speedX = 2.5;
      }
      if (pole.keys && (pole.keys[38] || pole.keys[87])) {
        elem.speedY = -2.5;
      }
      if (pole.keys && (pole.keys[40] || pole.keys[83])) {
        elem.speedY = 2.5;
      }
      Number.prototype.clamp = function(min, max) {
        return Math.min(Math.max(this, min), max);
      };
      elem.x = elem.x.clamp(0, pole.canvas.width - elem.width);
      elem.y = elem.y.clamp(0, pole.canvas.height - elem.height);
      elem.newPos();
      
      elem.update();
      fin.update();
      a.update();
      b.update();
      c.update();
      d.update();
      e.update();
      f.update();
      g.update();
      h.update();
      i.update();
    }
  }
  function moveup() {
    buttonMove = true;
    elem.speedY -= 1;
  }
  function movedown() {
    buttonMove = true;
    elem.speedY += 1;
  }
  function moveleft() {
    buttonMove = true;
    elem.speedX -= 1;
  }
  function moveright() {
    buttonMove = true;
    elem.speedX += 1;
  }
  function clearmove() {
    buttonMove = false;
    elem.speedX = 0;
    elem.speedY = 0;
  }

  function func_back() {
    this.location.href='index.html';
  }

  function nov() {
    document.location.reload();
  }
  sled.addEventListener('click',  () => location = 'levelthree.html');


 /*sled.addEventListener('click', function () {
      var res1 = Number(document.getElementById('score').value);
      localStorage.setItem("res1",res1.value);
      console.log('res1: ', localStorage.getItem('res'));

      })*/