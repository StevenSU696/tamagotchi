document.getElementsByClassName('tamagoName')[0].addEventListener('click', nameChange);
document.getElementsByClassName('hungerButton')[0].addEventListener('click', giveFood);
document.getElementsByClassName('joyButton')[0].addEventListener('click', playWithTama);
document.getElementsByClassName('sleepButton')[0].addEventListener('click', sleepTama);
document.getElementsByClassName('tamagoFace')[0].addEventListener('click',switchFace);

actualFood = parseInt(document.getElementsByClassName('tamagoNeedHunger')[0].innerHTML);
actualSleep = parseInt(document.getElementsByClassName('tamagoNeedSleep')[0].innerHTML);
actualJoy = parseInt(document.getElementsByClassName('tamagoNeedJoy')[0].innerHTML);
setInterval(() => {foodDecrease();}, 2000);
setInterval(() => {sleepDecrease();}, 8000);
setInterval(() => {joyDecreased();},4000);


function switchFace(){
    arrayOfFaces=['🐵','🐶','🐺','🐷','🐭','🦝','🐱','🐨','🐰','🐼'];
    document.getElementsByClassName('tamagoFace')[0].innerHTML = arrayOfFaces[Math.floor(Math.random()*arrayOfFaces.length)];

}
function playWithTama(){
    if(actualJoy > 0)
    {
    actualJoy += 40;
    document.getElementsByClassName('tamagoNeedJoy')[0].innerHTML = actualJoy;
    }
}
function giveFood(){
    if(actualFood > 0){
    actualFood+=50;
    document.getElementsByClassName('tamagoNeedHunger')[0].innerHTML = actualFood;
    }
}
function sleepTama(){
    if(actualSleep > 0){
    actualSleep +=40;
    document.getElementsByClassName('tamagoNeedSleep')[0].innerHTML = actualSleep;
    document.getElementsByClassName('hungerButton')[0].disabled=true;
    document.getElementsByClassName('joyButton')[0].disabled=true;
    document.getElementsByClassName('sleepButton')[0].disabled=true;
    document.getElementsByClassName('tamagoFace')[0].style.transform='rotate(90deg)';
    document.getElementsByClassName('textArea')[0].innerHTML = "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ";
    setTimeout(wakeUp,6000);
    }
}

function wakeUp(){
    document.getElementsByClassName('hungerButton')[0].disabled=false;
    document.getElementsByClassName('joyButton')[0].disabled=false;
    document.getElementsByClassName('sleepButton')[0].disabled=false;
    document.getElementsByClassName('tamagoFace')[0].style.transform='rotate(0deg)';
}

function nameChange(){
    name= prompt('Choisissez un nom');
    document.getElementsByClassName('tamagoName')[0].textContent=name.charAt(0).toUpperCase()+name.slice(1);
}

function foodDecrease() {
    actualFood -= 10;
    document.getElementsByClassName('tamagoNeedHunger')[0].innerHTML = actualFood;
    if (actualFood <= 0){
      dead();
    }
}

function sleepDecrease() {
    actualSleep -= 10;
    document.getElementsByClassName('tamagoNeedSleep')[0].innerHTML = actualSleep;
    if (actualSleep <= 0){
        dead();
    }
}

function joyDecreased() {
    actualJoy -= 10;
    document.getElementsByClassName('tamagoNeedJoy')[0].innerHTML = actualJoy;
    if (actualJoy <= 0){
        dead();
    }
}

function dead(){
    document.getElementsByClassName('tamagoName')[0].removeEventListener('click', nameChange);
    document.getElementsByClassName('tamagoFace')[0].removeEventListener('click', switchFace);
    document.getElementsByClassName('tamagoNeedSleep')[0].innerHTML = 0;
    document.getElementsByClassName('tamagoNeedJoy')[0].innerHTML = 0;
    document.getElementsByClassName('tamagoNeedHunger')[0].innerHTML = 0;
    actualJoy = 0;
    actualHunger = 0;
    actualSleep = 0;
    document.getElementsByClassName('hungerButton')[0].disabled=true;
    document.getElementsByClassName('joyButton')[0].disabled=true;
    document.getElementsByClassName('sleepButton')[0].disabled=true;
    document.getElementsByClassName('tamagoFace')[0].innerHTML = '🪦';
    document.getElementsByClassName('textArea')[0].innerHTML = "Votre Tamagochi est MORT.";
    document.getElementsByClassName('tamagoName')[0].textContent='CADAVRE';

}