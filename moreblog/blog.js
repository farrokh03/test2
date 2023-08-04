let box = document.getElementById('box');
let title = document.getElementById('title');
let buttons = document.getElementById('buttons');
let menu = document.getElementById('menu');
let nav = document.getElementById('navbar');

box.onmousemove = hover;
box.onmouseleave = leave;
menu.onclick = dropdownmenu;


function hover(){
    box.style.animationName = 'changesize';
    box.style.width='305px';
    box.style.height='410px';
    title.style.display ='block';
    title.className="tracking-in-contract-bck";
    buttons.style.display = 'flex';
    buttons.style.bottom='-15%';
}
function leave(){
    box.style.animationName = 'reversechangesize';
    box.style.width='300px';
    box.style.height='400px';
    title.style.display='none';
    buttons.style.display = 'none';
    title.className="";
}
function dropdownmenu()
{
    if(nav.style.top=="-44vh")
    {
        
        nav.style.top='8vh';
        nav.style.display='flex';
    }
    else{
        nav.style.top='-44vh';
        nav.style.display='none';
    }
}