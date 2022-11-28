function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  var f= (valNum-32) / 1.8;
  document.getElementById("output").value=f.toFixed(2);
}
function fahrenheitConverter(valNum) {
  valNum = parseFloat(valNum);
  var g =  (valNum*1.8)+32;
  document.getElementById("outputf").value=g.toFixed(2);
}
function kelvinConverter(valNum) {
  valNum = parseFloat(valNum);
    var h=  valNum-273.15;
  document.getElementById("outputk").value=h.toFixed(2);
}
function tokelvinConverter(valNum) {
  valNum = parseFloat(valNum);
  var i=(valNum-273.15)*9/5+32;
  document.getElementById("outputfa").value=i.toFixed(2);
} 
function celsiusConverter(valNum) {
  valNum = parseFloat(valNum);
  var j=valNum+273.15;
  document.getElementById("outputc").value=j.toFixed(2);
} 
function tofahrenheitConverter(valNum) {
  valNum = parseFloat(valNum);
  var k=(valNum-32)*5/9+273.15;
  document.getElementById("outputke").value=k.toFixed(2);
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



