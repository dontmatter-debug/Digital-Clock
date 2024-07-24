import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


let today = dayjs();

const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const ampm = document.getElementById('am-pm');



function update() {
day.innerHTML = today.format('ddd');
hour.innerHTML = today.format('h');
minute.innerText = today.format('ss');
ampm.innerText = today.format('A');
}


update();

setInterval(update, 200);
