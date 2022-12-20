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
    mn.style.transform = `rotateZ(${daqiqa}deg)`;
    sc.style.transform = `rotateZ(${soniya}deg)`;

})

