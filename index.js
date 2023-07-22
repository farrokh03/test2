let x = document.getElementById('circle');
let y = document.getElementById('icon');
let m = document.getElementById('login');

function button(){
    if( x.className === "circle"){
        
        x.className="after";
        y.className="material-symbols-outlined";
        y.innerHTML="arrow_insert";
        
    
        
    }
    else{
        x.className="circle";
        y.className="material-symbols-outlined";
        y.innerHTML="arrow_outward";
   
    }
    if(m.className==="loginform"){

        m.className="signform";
    }
    else{
        m.style.animationName='none';
        m.className="loginform";
    }
}
