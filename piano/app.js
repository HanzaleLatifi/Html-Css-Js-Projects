window.addEventListener('load', ()=>{
    const pads=document.querySelectorAll('.boxes div')
    const songs=document.querySelectorAll('.sounds');
    const app=document.querySelector('.app');
    colors=[
        '#ff9d96',
        '#fffd96',
        '#a2ff96',
        '#96ffe7',
        '#a096ff',
        '#ff96e7',
        '#ff9696'

    ]

    pads.forEach( (pad , index) =>{

        pad.addEventListener('click',function(){
            songs[index].currentTime=0;
            songs[index].play();
            createBall(index);
        })

    });


    const createBall=(index)=>{
        let ball= document.createElement('div');
        ball.classList.add('ball');
        ball.style.backgroundColor=colors[index];
        ball.style.animation='jump 1s ease'
         app.appendChild(ball);

         ball.addEventListener('animationend',function(){
             app.removeChild(this);
         })

    }

    
  
});