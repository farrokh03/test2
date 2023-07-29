let rightarrow = document.getElementById('right');
let leftarrow = document.getElementById('left');

let leftdoublearrow = document.getElementById('leftres');
let rightdoublearrow = document.getElementById('rightres');

rightarrow.onclick = rightside;
leftarrow.onclick = leftside;

rightdoublearrow.onclick = responrightside;
leftdoublearrow.onclick = responleftside;
        


function leftside(){
    var firstbox = document.getElementById('one');
    var secondbox = document.getElementById('two');
    var thirdbox = document.getElementById('three');
 
    
 
    
        firstbox.style.animationName='reverseanimationone';
        firstbox.style.left='71.25%';

        secondbox.style.animationName='reverseanimationtwo';
        secondbox.style.width='25%';
        secondbox.style.height='50%';
        secondbox.style.left='3.75%';

        thirdbox.style.animationName= 'reverseanimationthree';
        thirdbox.style.width='35%';
        thirdbox.style.height='80%';
        thirdbox.style.left='32.5%';

        firstbox.id='three';
        secondbox.id ='one';
        thirdbox.id ='two';
    
   
}

function rightside(){

    var firstbox = document.getElementById('one');
    var secondbox = document.getElementById('two');
    var thirdbox = document.getElementById('three');

   
        
    firstbox.style.animationName = 'animationone';
    firstbox.style.width ='35%';
    firstbox.style.height = '80%';
    firstbox.style.left ='32.5%';

    secondbox.style.animationName ='animationtwo';
    secondbox.style.width='25%';
    secondbox.style.height='50%';
    secondbox.style.left= '71.25%';

    thirdbox.style.animationName = 'animationthree';
    thirdbox.style.left='3.75%';

    thirdbox.id ='one';
    secondbox.id ='three';
    firstbox .id = 'two';

};

function responrightside()
{
    var box = document.getElementById('solo');
    var box4 = document.getElementById('sec');
    box.style.animationName='responsiveswitchright';
    box.style.width ='60%';
    box.style.left='20%';
    box.style.zIndex='-5';
    box.style.height='60%';
    box4.style.animationName='responsiveswitchleft';

    box4.style.width='75%';
    box4.style.left = '12.5%';
    box4.style.zIndex= '5';
    box4.style.height= '80%';

    box.id ='sec';
    box4.id ='solo';



}

function responleftside()
{
    var box = document.getElementById('solo');
    var box4 = document.getElementById('sec');
    box.style.animationName='reverseresponsiveswitchleft';
    box4.style.animationName='reverseresponsiveswitchright';
    box.style.width ='60%';
    box.style.left='20%';
    box.style.zIndex='-5';
    box.style.height='60%';

    box4.style.width='75%';
    box4.style.left = '12.5%';
    box4.style.zIndex= '5';
    box4.style.height= '80%';

    box.id ='sec';
    box4.id ='solo';
}