let d = new Date();
function getTime(date) {
    let time = date.toLocaleTimeString();
    console.log(time);
}

const intervalID = setInterval(getTime, 1000, d);