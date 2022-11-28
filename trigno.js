function num(a) {
    document.getElementById('screen').value += a;
}
function btn() {
    document.getElementById('screen').value = "";
}


function fnsin() {
     
    var x = document.getElementById('screen').value;
    let d = Math.sin(x * Math.PI / 180);0
    document.getElementById('screen').value = "="+d.toFixed(11);
}
function fntan() {

    var x = document.getElementById('screen').value;
    if (x==90||x==270||x==450||x==630||x==810||x==990||x==1170||x==1350){
        document.getElementById('screen').value = "=infinity";
    }
    else{
    let c = Math.tan(x * Math.PI / 180);
    document.getElementById('screen').value ="="+ c.toFixed(11);
    }
}
function fncos() {
    var x = document.getElementById('screen').value;
    let e = Math.cos(x * Math.PI / 180);
    document.getElementById('screen').value ="="+ e.toFixed(11);
}
function fncosec() {
    var x = document.getElementById('screen').value;
    if(x==180||x==360||x==540||x==720||x==900||x==1080||x==1260){
        document.getElementById('screen').value="="+ "infinity";
    }
    else{
    let f = (1 / Math.sin(x * Math.PI / 180));
    document.getElementById('screen').value ="="+  f.toFixed(11);
    }
}
function fnsec() {
    var x = document.getElementById('screen').value;
    if(x==90||x==270||x==450||x==630||x==810||x==990||x==1170||x==1350){
        document.getElementById('screen').value="="+ "infinity";
    }
    else{
    let g = 1 / Math.cos(x * Math.PI / 180);
    document.getElementById('screen').value = "="+ g.toFixed(11);
    }
}
function fncot() {
    var x = document.getElementById('screen').value;
    if(x==180||x==360||x==540||x==720||x==900||x==1080||x==1260){
        document.getElementById('screen').value="="+ "infinity";
    }
    else {
    let h = 1 / Math.tan(x * Math.PI / 180);
      document.getElementById('screen').value ="="+  h.toFixed(11);
    }
}
function sqrt() {
    var x = document.getElementById('screen').value;
    let i = Math.pow(x, 1 / 2);
    document.getElementById('screen').value = "="+ i.toFixed(11);
}
function cubic() {
    var x = document.getElementById('screen').value;
    let j = Math.pow(x, 3);
    document.getElementById('screen').value ="="+  j.toFixed(11);
}
function quad() {
    var x = document.getElementById('screen').value;
    let k = Math.pow(x, 4);
    document.getElementById('screen').value="="+ k.toFixed(11);
}
function cubert() {
    var x = document.getElementById('screen').value;
    let l= Math.pow(x, 1/3);
    document.getElementById('screen').value ="="+ l.toFixed(11);
}
function square() {
    var x = document.getElementById('screen').value;
   let m= Math.pow(x, 2);
   document.getElementById('screen').value ="="+ m.toFixed(11);
}
function clentry() {
    var x = document.getElementById('screen').value;
    document.getElementById('screen').value = x.substr(0, x.length - 1);
}
function log(){
    var x=document.getElementById('screen').value;
    let n=Math.log10(x);
    document.getElementById('screen').value="="+ n.toFixed(7);
}
function e(){
    var x=document.getElementById('screen').value;
    let o=Math.exp(x);
    document.getElementById('screen').value="="+ o.toFixed(7);
}
function fact(){
    let n= document.getElementById('screen').value;
    if(n<0){
        alert('please input positive integer .');
    }
    if (n==0||n==1){
        document.getElementById('screen').value="="+n;
    }
    else(n>=22) 
     

      var y=1;
    for( var i=n;i>0;i--){
        
        y=y*i;
     }
    document.getElementById('screen').value="="+y; 
   
}
function loge(){
    var x=document.getElementById('screen').value;
    document.getElementById('screen').value="="+Math.log(x);
    
}
function log2(){
    var x=document.getElementById('screen').value;
    document.getElementById('screen').value="="+Math.log2(x);
    
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
    