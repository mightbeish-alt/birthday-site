/* ENTER PAGE */
function enterSite(){
  document.querySelector(".intro").style.display="none";
  document.querySelector(".main").style.display="block";
}

/* SURPRISE + CONFETTI */
function openGift(){

  const text=document.getElementById("surpriseText");
  text.style.opacity="1";

  for(let i=0;i<40;i++){
    let c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.background=Math.random()>0.5?"#ffb7a5":"#c2182b";
    document.body.appendChild(c);

    setTimeout(()=>c.remove(),3000);
  }
}

/* COSMOS STAR FIELD */
const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<120;i++){
  stars.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    size:Math.random()*2,
    speed:Math.random()*0.3
  });
}

function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle="white";

  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
    ctx.fill();

    s.y+=s.speed;

    if(s.y>canvas.height){
      s.y=0;
      s.x=Math.random()*canvas.width;
    }
  });

  requestAnimationFrame(animateStars);
}

animateStars();