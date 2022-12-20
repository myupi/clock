let burchak = 6;

let hr = document.querySelector(`#hr`);
let mn = document.querySelector(`#mn`);
let sc = document.querySelector(`#sc`);


setInterval(() =>{
    let now = new Date();
    let soat = now.getHours() * 30;
    let daqiqa = now.getMinutes() * burchak;
    let soniya = now.getSeconds() * burchak;

    hr.style.transform = `rotateZ(${soat + daqiqa / 12}deg)`;
    hr.style.transition = `1s linear`;
    mn.style.transform = `rotateZ(${daqiqa}deg)`;
    mn.style.transition = `1s linear`;
    sc.style.transform = `rotateZ(${soniya}deg)`;
    sc.style.transition = `1s linear`;

})

