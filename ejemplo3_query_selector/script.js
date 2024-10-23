document.addEventListener('DOMContentLoaded', function() {
    var btn1 = document.querySelector('#btn1');
    var btn2 = document.querySelector('#btn2');
    var btn3 = document.querySelector('#btn3');

    btn1.addEventListener('click', function() { changePage(this)});
    btn2.addEventListener('click', function() { changePage(this)});
    btn3.addEventListener('click', function() { changePage(this)});

    const p = document.querySelector('p');
    const title = document.querySelector('#title');
    const logoImg = document.querySelector('.nav img');

    const changePage = (element) => {
        if (element.id === 'btn1'){
            console.log('Estoy aqui');
            title.innertext = 'Cloudy';
            p.innerText = 'The weather is cloudy';
            logoImg.src = 'img/some_clouds.png';
        } else if (element.id === 'btn2'){
            title.innerText = 'Rainy';
            p.innerText = 'The weather is rainy';
            logoImg.src = 'img/some_rain.png';

        } else if (element.id === 'btn3'){
            title.innerText = 'Sunny';
            p.innerText = 'The weather is sunny';
            logoImg.src = 'img/some_sun.png';
        

        

    }}



});