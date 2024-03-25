const hourTime = document.getElementById("hour");
const minuteTime = document.getElementById("minutes");
const secondTime = document.getElementById("seconds");
const ampmTime = document.getElementById("ampm");

function timeChange(){
    /*gets time for hour, minutes, and seconds from computer*/
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h > 12){ 
        h = h-12;
        ampm = "PM";
    }

    /* uses innerText method to be able to change the text of the element*/
    hourTime.innerText = h;
    minuteTime.innerText = m;
    secondTime.innerText = s;
    ampmTime.innerText = ampm;
    /* method that sets a timer and exectures function after it expires*/
    setTimeout(() =>{
        timeChange()
    },1000)
}

timeChange();