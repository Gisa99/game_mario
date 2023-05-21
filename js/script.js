   const sasuke = document.querySelector('.sasuke');
   const naruto = document.querySelector('.naruto');
   const clouds = document.querySelector('.clouds');
   const textOver = document.querySelector('.text');
   const score = document.querySelector('.score');
   let alreadyJump = false;
   let count = 0;
   
   document.addEventListener("keydown", (e) => {
     if ((e.code === "ArrowUp") | (e.code === "Space")) {
       jump();
     }
   });
   
   const jump = () => {
    sasuke.classList.add('jump');
    alreadyJump = true;

    setTimeout(()=>{
        sasuke.classList.remove('jump');
        alreadyJump = false;
    }, 600);
   }

   const loop = setInterval(()=>{

    const narutoPosition = naruto.offsetLeft;
    const sasukePosition = +window.getComputedStyle(sasuke).bottom.replace('px', '');

    if(narutoPosition <= 120 && narutoPosition > 0 && sasukePosition < 30){
        
        naruto.style.animation = 'none';
        naruto.style.left = `${narutoPosition}px`;

        sasuke.style.animation = 'none';
        sasuke.style.bottom = `${sasukePosition}px`;

        sasuke.src = './imagens/dead.png';
        sasuke.style.width = '60px';
        sasuke.style.bottom = '10px';
        sasuke.style.left = '70px';

        textOver.style.display = 'block'; 

        count = 0;
    }
    count++;
    score.innerHTML = `SCORE: ${count}`;

   }, 10);
   
   
   document.addEventListener('keydown', jump);
   document.addEventListener('click', jump);