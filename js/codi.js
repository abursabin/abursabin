function parar(){
    document.getElementById("minions").pause();
}

function seguir(){
    document.getElementById("minions").play();
}





function activarMusicau() {
    //    document.getElementById("musica").muted = false;
    document.getElementById("musicau").play();
}
function loopU(){
    if (document.getElementById("musicau").loop == false) {
        document.getElementById("musicau").loop = true;
    }else{
       document.getElementById("musicau").loop = false ;
    }
}







function activarMusicados() {
    //    document.getElementById("musica").muted = false;
        document.getElementById("musicados").play();
}
function loopDos(){
    if (document.getElementById("musicados").loop == false) {
        document.getElementById("musicados").loop = true;
    }else{
       document.getElementById("musicados").loop = false ;
    }
}



function activarMusicatres() {
    //    document.getElementById("musica").muted = false;
        document.getElementById("musicatres").play();
}
function loopTres(){
    if (document.getElementById("musicatres").loop == false) {
        document.getElementById("musicatres").loop = true;
    }else{
       document.getElementById("musicatres").loop = false ;
    }
}




function activarMusicaquatre() {
    //    document.getElementById("musica").muted = false;
        document.getElementById("musicaquatre").play();
}
function loopQuatre(){
    if (document.getElementById("musicaquatre").loop == false) {
        document.getElementById("musicaquatre").loop = true;
    }else{
       document.getElementById("musicaquatre").loop = false ;
    }
}




function activarMusicacinc() {
    //    document.getElementById("musica").muted = false;
        document.getElementById("musicacinc").play();
}
function loopCinc(){
    if (document.getElementById("musicacinc").loop == false) {
        document.getElementById("musicacinc").loop = true;
    }else{
       document.getElementById("musicacinc").loop = false ;
    }
}




function activarMusicasis() {
    //    document.getElementById("musica").muted = false;
        document.getElementById("musicasis").play();
}
function loopSis(){
    if (document.getElementById("musicasis").loop == false) {
        document.getElementById("musicasis").loop = true;
    }else{
       document.getElementById("musicasis").loop = false ;
    }
}





function activarMusicaset() {
    //    document.getElementById("musica").muted = false;
        document.getElementById("musicaset").play();
}
function loopSet(){
    if (document.getElementById("musicaset").loop == false) {
        document.getElementById("musicaset").loop = true;
    }else{
       document.getElementById("musicaset").loop = false ;
    }
}





function activarMusicavuit() {
    //    document.getElementById("musica").muted = false;
        document.getElementById("musicavuit").play();
}
function loopVuit(){
    if (document.getElementById("musicavuit").loop == false) {
        document.getElementById("musicavuit").loop = true;
    }else{
       document.getElementById("musicavuit").loop = false ;
    }
}




function activarMusicanou() {
    //    document.getElementById("musica").muted = false;
        document.getElementById("musicanou").play();
}
function loopNou(){
    if (document.getElementById("musicanou").loop == false) {
        document.getElementById("musicanou").loop = true;
    }else{
       document.getElementById("musicanou").loop = false ;
    }
}




function activarMusicadeu() {
    //    document.getElementById("musica").muted = false;
        document.getElementById("musicadeu").play();
}
function loopDeu(){
    if (document.getElementById("musicadeu").loop == false) {
        document.getElementById("musicadeu").loop = true;
    }else{
       document.getElementById("musicadeu").loop = false ;
    }
}





//Quan carreguem la pàgina assignem a l'slider el valor que tingui el volum
document.getElementById("sliderVol").value = document.getElementById("minions").volume;


//Fem que quan es toqui l'slider s'executi la funció canviaVolum
document.getElementById("sliderVol").oninput = canviaVolum;

function canviaVolum() {
    //Assignem el valor de l'slider al volum de l'audio
   document.getElementById("minions").volume =  document.getElementById("sliderVol").value;
}








document.getElementById("sliderDur").max = document.getElementById("minions").duration;

//Fem que quan es toqui l'slider s'executi la funció de canviar el temps
document.getElementById("sliderDur").oninput = canviaTemps;

function canviaTemps() {
    //Assignem el valor de l'slider al temps de reproducció
   document.getElementById("minions").currentTime =  document.getElementById("sliderDur").value;
}













