let hr = document.getElementById('hour');
let min = document.getElementById('min');
let second = document.getElementById('sec');

function displayTime(){
     let data = new Date();

     //Getting hour, mins, secs from data
     let hh = data.getHours();
     let mm = data.getMinutes();
     let ss = data.getSeconds();

     let hRotation = 30 * hh + mm / 2;
     let mRotation = 6 * mm;
     let sRotation = 6 * ss;

     hr.style.transform = `rotate(${hRotation}deg)`;
     min.style.transform = `rotate(${mRotation}deg)`;
     sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
displayTime();
