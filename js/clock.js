const clock  = document.getElementById("clock");
const clocksecond = document.getElementById("second");
const daymonth = document.getElementById("daymonth");
const dym = document.getElementById("ymd");

const DAY_ARR=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

function getDay(){
    const Ndate = new Date();
    dym.innerText=`${Ndate.getFullYear()} / ${Ndate.getMonth()+1} / ${Ndate.getDate()}`
    daymonth.innerText = `${DAY_ARR[Ndate.getDay()]}`;
}

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours} : ${minutes}`;
    clocksecond.innerText=`${seconds}`;
}

getDay();
getClock();

setInterval(getClock, 1000);