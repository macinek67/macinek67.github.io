const poczatek = document.getElementById("l1");
const oMnie = document.getElementById("l2");
const czytajD = document.getElementById("l4");
const mProjekty = document.getElementById("l3");
const kontakt = document.getElementById("l5");
const strona = document.getElementById("l6");
const poczatek1 = document.getElementById('ccc');
const oMnie1 = document.getElementById('oMnie');
var zdj = $("#zdj");
var panel = $("#panel");

poczatek.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: "smooth",
}));

var oMnie2 = $("#oMnie");

oMnie.addEventListener('click', () => window.scrollTo({
    top: 981,
    behavior: "smooth",
}));

mProjekty.addEventListener('click', () => window.scrollTo({
  top: 1952,
  behavior: "smooth",
}));

kontakt.addEventListener('click', () => window.scrollTo({
  top: 2817,
  behavior: "smooth",
}));

strona.addEventListener('click', () => window.scrollTo({
  top: 3713,
  behavior: "smooth",
}));

function czytajDD()
{
  window.scrollTo({
    top: 981,
    behavior: "smooth",
  });
}

function panelowanko()
{
  aktualnyTOP = window.scrollY;
  console.log(panel.position().top)
  console.log(aktualnyTOP);
  if(aktualnyTOP>=981)
  {
    panel.css({"top": "0px" ,"position": "fixed", "z-index": "100000"});
    oMnie1.style.marginTop = "3.75%";
  }
  else
  {
    panel.css({"position": "relative"})
    oMnie1.style.marginTop = "0%";
  }
  if(aktualnyTOP<=669)
  {
    poczatek.style.color = "rgb(255, 0, 242)";
    oMnie.style.color = "white";
    mProjekty.style.color = "white";
    kontakt.style.color = "white";
    strona.style.color = "white";
    zdj.css({"width": "100px", "height": "100px", "border-radius": "100px 100px 100px 100px", "border-width": "3px", "background-size:": "contain"});
  }
  else if(aktualnyTOP>=669 && aktualnyTOP<1580)
  {
    oMnie.style.color = "rgb(255, 0, 242)";
    poczatek.style.color = "white";
    mProjekty.style.color = "white";
    kontakt.style.color = "white";
    strona.style.color = "white";
    zdj.css({"width": "600px", "height": "600px", "border-radius": "600px 600px 600px 600px", "border-width": "8px", "background-size:": "contain"});
  }
  else if(aktualnyTOP>=1580 && aktualnyTOP<=2816)
  {
    oMnie.style.color = "white";
    poczatek.style.color = "white";
    mProjekty.style.color = "rgb(255, 0, 242)";
    kontakt.style.color = "white";
    strona.style.color = "white";
    zdj.css({"width": "100px", "height": "100px", "border-radius": "100px 100px 100px 100px", "border-width": "3px", "background-size:": "contain"});
  }
  else if(aktualnyTOP>=2817 && aktualnyTOP<=3712)
  {
    oMnie.style.color = "white";
    poczatek.style.color = "white";
    mProjekty.style.color = "white";
    kontakt.style.color = "rgb(255, 0, 242)";
    strona.style.color = "white";
  }
  else if(aktualnyTOP>=3713)
  {
    oMnie.style.color = "white";
    poczatek.style.color = "white";
    mProjekty.style.color = "white";
    kontakt.style.color = "white";
    strona.style.color = "rgb(255, 0, 242)";
  }
}

var canvas = document.createElement("canvas");
canvas.style.opacity = "0.4";
canvas.style.width = "1880px";
canvas.style.height = "1120px";
canvas.style.marginTop = "-10%";
poczatek1.appendChild(canvas);
const ctx = canvas.getContext("2d");
setInterval(function () {
  var kolorLosuj = Math.floor((Math.random() * 69) +1);
  var kolorLosuj1 = Math.floor((Math.random() * 69) +1);
  var kolorLosuj2 = Math.floor((Math.random() * 69) +1);
  var kolor = "rgb(" + kolorLosuj + "," + kolorLosuj1 + "," + kolorLosuj2 + ")";
  ctx.strokeStyle = kolor;
  let jakiX = parseInt(Math.random()*1480+1);
  let jakiY = parseInt(Math.random()*1000+1);
  let odKad = parseInt(Math.random()*5+1);
  let doKad = parseInt(Math.random()*5+1);
  let rodzaj = parseInt(Math.random()*10+1);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.arc(jakiX,jakiY,2+odKad,2+doKad,rodzaj*Math.PI);
  ctx.stroke();
}, 10);

var canvas1 = document.getElementById("staty");
const ctx1 = canvas1.getContext("2d");
ctx1.beginPath();
ctx1.lineWidth = 4;
ctx1.shadowBlur = 10;
ctx1.shadowOffsetX = 0;
ctx1.shadowOffsetY = 0;
ctx1.shadowColor = "rgb(255, 0, 242)";
ctx1.strokeStyle = "rgb(255, 0, 242)";
ctx1.arc(100,75,65,1.5*Math.PI,0.1*Math.PI);
ctx1.stroke();
ctx1.strokeStyle = "rgb(74, 40, 73)";
ctx1.beginPath();
ctx1.arc(100,75,65,0.1*Math.PI,1.5*Math.PI);
ctx1.stroke();

var canvas2 = document.getElementById("staty1");
const ctx2 = canvas2.getContext("2d");
ctx2.beginPath();
ctx2.lineWidth = 4;
ctx2.shadowBlur = 10;
ctx2.shadowOffsetX = 0;
ctx2.shadowOffsetY = 0;
ctx2.shadowColor = "rgb(255, 0, 242)";
ctx2.strokeStyle = "rgb(255, 0, 242)";
ctx2.arc(100,75,65,1.5*Math.PI,0.52*Math.PI);
ctx2.stroke();
ctx2.strokeStyle = "rgb(74, 40, 73)";
ctx2.beginPath();
ctx2.arc(100,75,65,0.52*Math.PI,1.5*Math.PI);
ctx2.stroke();

var canvas3 = document.getElementById("staty2");
const ctx3 = canvas3.getContext("2d");
ctx3.beginPath();
ctx3.lineWidth = 4;
ctx3.shadowBlur = 10;
ctx3.shadowOffsetX = 0;
ctx3.shadowOffsetY = 0;
ctx3.shadowColor = "rgb(255, 0, 242)";
ctx3.strokeStyle = "rgb(255, 0, 242)";
ctx3.arc(100,75,65,1.5*Math.PI,1.8*Math.PI);
ctx3.stroke();
ctx3.strokeStyle = "rgb(74, 40, 73)";
ctx3.beginPath();
ctx3.arc(100,75,65,1.8*Math.PI,1.5*Math.PI);
ctx3.stroke();
