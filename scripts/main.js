let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/html5.png') {
    myImage.setAttribute ('src','images/css3.png');
    } else {
    myImage.setAttribute ('src','images/html5.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName () {
    let myName = prompt ('Por favor ingrese su nombre');

    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem ('nombre', myName);
        myHeading.textContent = 'Logo, ' + myName;        
    }
}

if(!localStorage.getItem('nombre')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nombre');
    myHeading.textContent = 'Logo, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
