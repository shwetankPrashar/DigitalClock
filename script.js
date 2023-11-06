const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');
function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';
    if (h > 12) {
        h -= 12;
        ampm = 'PM';
    }
    h = h < 10 ? '0' + h : h;
    hourEl.innerHTML = h;
    // m = m < 10 ? '0' + m : m;
    minuteEl.innerHTML = m;
    // s = s < 10 ? '0' + s : s;
    secondEl.innerHTML = s;
    ampmEl.innerHTML = ampm;
    setTimeout(()=>{
        clock();
    },1000);
}
clock();
