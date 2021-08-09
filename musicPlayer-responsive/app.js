
//menu
const menu=document.querySelector('.menu');
const menuBars=document.querySelector('.fa-bars');

menuBars.addEventListener('click', ()=>{
    menu.classList.toggle('open');
    menuBars.classList.toggle('fa-times');
    

})




//data-base-music

const songs=['Serena-Safari' , 'Ebi-DelamMikhaad','RoozbehBemani-Beman'];
let indexActive=0;

//playMusic
let nameSong=document.querySelector('.title');
let audioSong=document.querySelector('.song');
let coverSong=document.querySelector('.cover');
let musicContainer=document.querySelector('.music-container');
let playBtn=document.querySelector('#play');
let nextBtn=document.querySelector('#next');
let prevBtn=document.querySelector('#prev');


activeSong(songs[indexActive]);

function activeSong(song){

    nameSong.innerHTML=song;
    coverSong.src=`images/${song}.jpg`;
    audioSong.src=`music/${song}.mp3`;
    

}



function playSong(){
    musicContainer.classList.add('play')
    musicContainer.classList.remove('paused')
    playBtn.querySelector('.fas').classList.remove('fa-play');
    playBtn.querySelector('.fas').classList.add('fa-pause');
    audioSong.play();
    // delet class active all item in menu
    deleteActive();
   //araay items define in bottom
    items.forEach( (item , index) =>{
        if(index===indexActive)
            item.classList.add('active');
    })
    
    

    
};
function pauseSong(){
    musicContainer.classList.add('paused');
    musicContainer.classList.remove('play');
    playBtn.querySelector('.fas').classList.remove('fa-pause');
    playBtn.querySelector('.fas').classList.add('fa-play');
    audioSong.pause();
    deleteActive();
};

playBtn.addEventListener('click' , ()=>{
    if(musicContainer.classList.contains('play')){
        pauseSong();
    }
    else
    playSong();
})

nextBtn.addEventListener('click',nextSong)
   
prevBtn.addEventListener('click',prevSong)
    

function nextSong() {
    
    if(musicContainer.classList.contains('random')){
        indexActive=Math.floor(Math.random()*songs.length )   
    }
    else{
        indexActive++;
        if(indexActive>songs.length-1){
            indexActive=0;
        }     
    }

    activeSong(songs[indexActive]);
    playSong();
}

function prevSong() {
    
    if(musicContainer.classList.contains('random')){
        indexActive=Math.floor(Math.random()*songs.length )   
    }
    else{
        indexActive--;
        if(indexActive<0){
            indexActive=songs.length-1;
        }     
    }

    activeSong(songs[indexActive]);
    playSong();
    
}

//progress

let progress=document.querySelector('.progress');
let progressContainer=document.querySelector('.progress-container')

audioSong.addEventListener('timeupdate',updateProgress)

function updateProgress(e){
    
    const{duration,currentTime}=e.srcElement;
    progressPrecent=currentTime/duration*100;
    progress.style.width=`${progressPrecent}%`;
}

progressContainer.addEventListener('click',setProgress);

function setProgress(e){
    const width=this.clientWidth;
    let clickX=e.offsetX;
    let duration=audioSong.duration;
    audioSong.currentTime=clickX/width*duration;
}

audioSong.addEventListener('ended',nextSong);




//timer
let timer=document.querySelector('.timer');


audioSong.addEventListener('timeupdate', function(e) {
    
    timer.textContent =  sToTime(e.target.currentTime)+' / '+sToTime(e.target.duration);
     //e.srcElement.currentTime
  })
  
  function sToTime(t) {
     
    return  addZero(parseInt((t / (60)) % 60)) + ":" + 
           addZero(parseInt((t) % 60));
  }
  function addZero(v) {
    return (v < 10) ? "0" + v : v;
  }

  //add Item to  menu and play
    const items=[];

  window.addEventListener('load',addItem)


  function addItem(){

    for(let i=0 ; i<songs.length ; i++){
        let item=document.createElement('div');
        //add img to item
        let img=document.createElement('img');
        img.src=`images/${songs[i]}.jpg`;
        img.classList.add('mini-cover');
        //add p to item
        let p=document.createElement('p');
        
        p.innerHTML=songs[i];
       
        
        // add all to item
        item.appendChild(img);
        item.appendChild(p);

        item.classList.add('item');
        // add item to menu and items array
        menu.appendChild(item);
        menu.classList.add('.menu');
        items.push(item);

    }
        playItem(items);
    

  }
  function playItem(items){
      items.forEach( (item , index) => {
          item.addEventListener('click',()=>{
              indexActive=index;
              activeSong(songs[indexActive]);
              playSong();
              deleteActive();
              item.classList.add('active');
                         
              
          })
          
      });
  }

  function deleteActive() {
      items.forEach(item=> {
          item.classList.remove('active');
          
      });
   
  }

  // filter of menu ( all , mostPlayed , favourite )

  let like=document.querySelector('#like');

  like.addEventListener('click' , ()=>{
      
      
    items.forEach( (item , index) =>{
         if(index===indexActive){
             if(!item.classList.contains('favourite')) 
                 item.classList.add('favourite');   
             
             else 
                 item.classList.remove('favourite');

         }

    })
      
      
  })

  //show filters in menu 
  
  let fliters=document.querySelectorAll('.filter span');

  fliters.forEach( (filter , index)=>{

        filter.addEventListener('click',()=>{

            items.forEach( item=>{

           
              switch(index){
                 case 0 : 
                        item.style.display='flex'
                 break;
                 case 1 :
                    if(!item.classList.contains('favourite'))
                         item.style.display='none';
                    
                 break
                 

               }
       
           })
        })
  })
 

  //change  volume
  let volume=document.querySelector('.vol');
  let soundIcon=document.querySelector('.fa-volume-down');
  
    volume.addEventListener('change',()=>{
       audioSong.volume=volume.value;
       if(volume.value==0){
        soundIcon.classList.remove('fa-volume-down');
        soundIcon.classList.add('fa-volume-mute');

       }
       else{
        soundIcon.classList.add('fa-volume-down');
        soundIcon.classList.remove('fa-volume-mute');
       }
         
    })
    //display volume
    soundIcon.addEventListener('click',()=>{
        if(volume.style.display!='block')
        volume.style.display='block'
        else
        volume.style.display='none'

    })

    //like btn 
    let likeBtn=document.querySelector('#like');
    likeBtn.addEventListener('click',likeFunc)

 
    function likeFunc(){
        
    }

    //random play
    let randomBtn=document.querySelector('#random');
    randomBtn.addEventListener('click',()=>{
        if(randomBtn.style.color!='purple'){
            randomBtn.style.color='purple';     
        }else
        {
            randomBtn.style.color='white'
        }     

        musicContainer.classList.toggle('random')

        
    })
      
    
    
    
    

 
  






