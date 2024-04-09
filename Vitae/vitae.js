var git = document.getElementById("github");
var gmail = document.getElementById("gmail");
var link = document.getElementById("linkedin");
var num = document.getElementById("numero");



git.addEventListener("click", function() {
    
    window.location.href = "https://github.com/pedroaleksander";
});


gmail.addEventListener("click", function() {

    window.location.href = "https://mail.google.com/mail/u/0/?hl=pt-BR#inbox?compose=DmwnWrRrlqwNpcdzgDsTjmXSQHcnsmnDwkWXxJTDRwrZzWWJpwZWWVvBJmzgzDvrQdmbMTgvzdsG";
});


link.addEventListener("click", function() {

    window.location.href = "https://www.linkedin.com/in/pedro-aleksander-153398302/";
});


num.addEventListener("click", function() {

    window.location.href = "https://Wa.me/+55(48)991082248";
});

const zoomableImage = document.getElementById('zoomable-image');

zoomableImage.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;
    const { offsetWidth, offsetHeight } = zoomableImage;

    const xPercentage = (offsetX / offsetWidth) * 100;
    const yPercentage = (offsetY / offsetHeight) * 100;

    zoomableImage.style.transformOrigin = `${xPercentage}% ${yPercentage}%`;
});

