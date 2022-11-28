
    
function num(a) {
    document.getElementById('screen').value += a;
   
}
function btn() {
    document.getElementById('screen').value = "";
}
function evaluto(){
    let screen=document.getElementById('screen').value;
     document.getElementById('screen').value="="+ eval(screen);
}
function clearscreen(){
    let prevalue=document.getElementById('screen').value;
    document.getElementById('screen').value=prevalue.substr(0,prevalue.length-1);
}
function alertn(){
console.log("clear screen first");
}
function time(){
let currenttime=new Date();
let hour=currenttime.getHours();
let minute=currenttime.getMinutes();
let seconds=currenttime.getSeconds();
 let currentday=(hour<12) ? "AM":"PM";
 let currentminutes=(minute<10?"0": "")+minute;
 let currentseconds=(seconds<10? "0":"")+seconds;
 let currenthour=(hour>12)? hour-12:hour;
 let currentstr=currenthour+":"+currentminutes+":"+currentseconds+" "+currentday;
let sp=document.getElementById('time');
sp.innerHTML=currentstr;
}
setInterval('time()', 1000);