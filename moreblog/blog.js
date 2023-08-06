let box = document.getElementById('box');
let title = document.getElementById('title');
let buttons = document.getElementById('buttons');
let menu = document.getElementById('menu');
let nav = document.getElementById('navbar');


menu.onclick = dropdownmenu;

function dropdownmenu()
{
    if(nav.style.top=="-44vh")
    {
        
        nav.style.top='0';
        nav.style.zIndex='1';
        nav.style.position='relative';


    }
    else{
        nav.style.top='-44vh';
        nav.style.zIndex='0';
        nav.style.position='absolute';

    }
}