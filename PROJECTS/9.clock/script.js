// function showTime() {
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();

//     let amPm = setFormats(hours);
//     hours = checkTime(hours);
//     hours = addZero(hours);
//     minutes = addZero(minutes);
//     seconds = addZero(seconds);
//     document.querySelector('.clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${amPm}`
// }

// function setFormats(time) {
//     let format = 'AM';
//     if (time >= 12) {
//         format = 'PM';
//     }
//     return format;
// }

// function checkTime(time) {
//     if (time > 12) {
//         time = time - 12
//     }
//     if (time === 0) {
//         time = 12;
//     }
//     return time
// }

// function addZero(time) {
//     if (time < 10) {
//         time = '0' + time;
//     }
//     return time;
// }

// showTime()
// setInterval(showTime, 1000);


//////////////////////////////////////////////////////
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        amPm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12;
    let createClock = [hour,min,sec].map(time=>(time < 10 ? '0' : '') + time)
    document.querySelector('.clock').innerHTML = createClock.join(':') + ':' + amPm
    setTimeout(showTime, 1000)
}

showTime()  
