//selector
let addButton=document.querySelector('.add-btn');
let todoList=document.querySelector('.list');
let input=document.querySelector('.typing');
let modeIcon=document.querySelector('img');
let filter=document.querySelector('.filter');


//event
addButton.addEventListener("click",add);
todoList.addEventListener("click",deleteCheck);
modeIcon.addEventListener("click",changeMood);
filter.addEventListener("click",checkFilter);





//func
function add(e){
    e.preventDefault();
    if(input.value===""){

    }
    else{
    //div
    let div=document.createElement("div");
    div.classList.add('div-parent');
    todoList.appendChild(div);
    //li
    let item=document.createElement("LI");
    item.appendChild(document.createTextNode(input.value));
    item.classList.add('item');
    div.appendChild(item);
    //btn
    let btn=document.createElement("button");
    btn.innerHTML='<i class="fas fa-trash"></i>';
    btn.classList.add("trash-btn")
    div.appendChild(btn);
    //btn
    let btn2=document.createElement("button");
    btn2.innerHTML='<i class="fas fa-check"></i>';
    btn2.classList.add("complete-btn")
    div.appendChild(btn2);

    //
    input.value="";
    }

}

function deleteCheck(e){
    const item=e.target;
    const todo=item.parentElement;
    if(item.classList[0]==="trash-btn"){
        todo.classList.add('fade');
        addEventListener("transitionend",function(){
            todo.remove();
        });
    }
      if(item.classList[0]==="complete-btn"){
        todo.style.textDecoration="line-through";
        todo.style.opacity=.7;
        todo.classList.add('completed');
      }   
   
}
function changeMood(e){
    icon=e.target;
    topBackground=document.querySelector('.top');
    downContainer=document.querySelector('.container');

    if(icon.className==="dark"){
    //changeIcon
    icon.src="images/icons8-crescent-moon-48.png";
    icon.classList.add('light');
    icon.classList.remove('dark');

    //change topbackground
    topBackground.classList.add('light');
    topBackground.classList.remove('dark');

    //change downContainer
    downContainer.classList.add('light');
    downContainer.classList.remove('dark');


    }
    else if(icon.className==="light"){
        //changeIcon
        icon.src="images/icons8-sun-48.png";
        icon.classList.add('dark');
        icon.classList.remove('light');

        //change topbackground
        topBackground.classList.add('dark');
        topBackground.classList.remove('light');

         //change downContainer
         downContainer.classList.add('dark');
         downContainer.classList.remove('light');
        }
 }

 
   


function checkFilter(e){
    const val= e.target.value;
    let items=todoList.childNodes;
    
    
    console.log(items);
    // i=1 because node text is i=0 & troubler
    for(let i=1 ; i<items.length ; i++){
        switch(val){
            case'all':
                 items[i].style.display="flex";
             break;

            case 'completed':
                   if(items[i].classList.contains('completed'))
                       items[i].style.display="flex";
                  else{
                      items[i].style.display="none";
                  }
              break;

            case 'uncompleted':
                if(!items[i].classList.contains('completed')){
                      items[i].style.display="flex";
                }
                else{
                    items[i].style.display="none";
                }

        }

        
        }


    }
    
    

 