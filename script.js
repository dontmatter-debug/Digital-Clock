
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


let today = dayjs();
const dateYear = document.getElementById('date-year')
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconds = document.getElementById('seconds');


function update() {
    today = dayjs();
dateYear.innerHTML = today.format('dddd MMM D YYYY');
hour.innerHTML = today.format('HH');
minute.innerText = today.format('mm');
seconds.innerText = today.format('ss');
}

update();

setInterval(update, 200);

    