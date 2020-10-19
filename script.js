// window.alert('Hello JS!');

let btn = document.getElementById('btn');
let popup;

btn.onclick = () => {
    popup = window.open('https://www.google.com.ua', 'Google', 'width=400, height=400, resizable=yes, top=200, left=400');
    setTimeout(windowClose, 3000);
}

function windowClose(){
    popup.close();
}

// document.write(`Кількість сторінок в історії: ${window.history.length}`);

// document.write(`<h2>Рядок запиту = ${location.href}</h2>`);
// document.write(`<h2>Шлях до ресурсу = ${location.pathname}</h2>`);
// document.write(`<h2>Загальна схема запиту = ${location.origin}</h2>`);
// document.write(`<h2>Протокол = ${location.protocol}</h2>`);
// document.write(`<h2>Порт = ${location.port}</h2>`);
// document.write(`<h2>Хост = ${location.host}</h2>`);
// document.write(`<h2>Імя Хост = ${location.hostname}</h2>`);
// document.write(`<h2>Хеш = ${location.hash}</h2>`);
// document.write(`<h2>Пошук = ${location.search}</h2>`);

// document.write(navigator.userAgent);

// let browser; 
// let uAgent = navigator.userAgent;
// if(uAgent.indexOf('Chrome' > -1)){
//     browser = 'Google Chrome';
// } else if (uAgent.indexOf('OPR' > -1)){
//     browser = 'Opera';
// }

// document.write(browser)

function success(position) {
    document.write(`<h2>Широта ${position.coords.latitude}</h2>`);
    document.write(`<h2>Широта ${position.coords.longitude}</h2>`);
    document.write(`<h2>Широта ${position.coords.altitude}</h2>`);
    document.write(`<h2>Широта ${position.coords.speed}</h2>`);
}

function error(){
    document.write('dsfsfsdf');
};

navigator.geolocation.getCurrentPosition(success,error);