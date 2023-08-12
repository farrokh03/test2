let ball = document.getElementById('ball');
let icon = document.getElementById('icon');
let color = document.getElementById('color');
let navbar = document.getElementById('nav');
const link = document.getElementById('theme');
const bgphoto = document.getElementById('background').src;

document.getElementById('photo').style.backgroundImage ='url(' + bgphoto +')';


ball.onclick = switchthem;

function switchthem()
{
    if(icon.className=="fa-solid fa-sun")
    {
        ball.style.left="75px";
        icon.className="fa-solid fa-moon";
        ball.style.animationName='ball';
        link.href = "/css/moredarkmode.css";
    }
    else{
        ball.style.left = '3px';
        ball.style.animationName = 'reverseball';
        icon.className = "fa-solid fa-sun";
        link.href = "/css/more.css";
    }
}
