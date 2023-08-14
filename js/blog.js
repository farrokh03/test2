
let ball = document.getElementById('ball');
let icon = document.getElementById('icon');
const link = document.getElementById('theme');

let menu = document.getElementById('menu');
let sidenav = document.getElementById('sidenavbar');

ball.onclick = switchthem;
menu.onclick = sidemenu;

function switchthem()
{
    if(icon.className=="fa-solid fa-sun")
    {
        ball.style.left="75px";
        icon.className="fa-solid fa-moon";
        ball.style.animationName='ball';
        link.href = "/css/blog.darkmode.css";
    }
    else{
        ball.style.left = '3px';
        ball.style.animationName = 'reverseball';
        icon.className = "fa-solid fa-sun";
        link.href = "/css/blog.css";
    }
}
function sidemenu (){
    if(sidenav.style.right=="0px")
    {
        sidenav.style.right='-350px';
        sidenav.style.animationName='closesidemenu';
    }
    else{
        sidenav.style.right='0px'
        sidenav.style.animationName='opensidemenu';
    }
}