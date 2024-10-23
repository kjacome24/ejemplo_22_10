
const turnOff = (element) => {
    if (element.innerText ==='Off') {
        element.innerText = 'On';
        element.style.backgroundColor = 'green';
    } else {
        element.innerText = 'Off';
        element.style.backgroundColor = 'red';
    }
}


