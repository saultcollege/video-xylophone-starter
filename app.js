
const video = document.getElementById('webcam');
const audioElements = document.querySelectorAll('audio');
const keyElements = document.getElementsByClassName('key');

function fastAbs(n) {
    //return Math.abs(n);
    return (n ^ (n >> 31)) - (n >> 31);
}

function threshold(n) {
    return ( n  > 0x15 ) ? 0xFF : 0;
}

function init() {
}

window.addEventListener('load', init);