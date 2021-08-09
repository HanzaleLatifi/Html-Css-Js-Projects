//selector
const menu=document.querySelector(".fa-bars");
const navbar=document.querySelector(".navbar");
const searchBtn =document.querySelector("#searchBtn");
const searchContainer=document.querySelector(".search-container");
const formBtn=document.querySelector("#formBtn");
const loginContainer=document.querySelector('.login-container');
const closeLogin=document.querySelector("#close-form")

//EventListener

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('navbar-toggle');

});

searchBtn.addEventListener('click',function(){
    searchContainer.classList.toggle('active');

})

formBtn.addEventListener('click' , function(){
    loginContainer.classList.toggle('active');

    
})
closeLogin.addEventListener('click',function(){
    loginContainer.classList.remove('active');
})

window.onscroll=()=>{
    searchContainer.classList.remove('active');
    loginContainer.classList.remove('active');
    navbar.classList.remove('navbar-toggle');
    menu.classList.remove('fa-times');



}