document.addEventListener("DOMContentLoaded", function() {


const turnOff = (element) => {
    if (element.innerText ==='Off') {
        element.innerText = 'On';
        element.style.backgroundColor = 'green';
    } else {
        element.innerText = 'Off';
        element.style.backgroundColor = 'red';
    }
}

document.getElementById('btn1').addEventListener('click', function() {
    turnOff(this);
});

document.getElementById('btn2').addEventListener('click', function() {
    turnOff(this);
});

document.getElementById('btn3').addEventListener('click', function() {
    turnOff(this);
})

});