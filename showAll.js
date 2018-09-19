function showAll() {
    changeBulb();
}

function changeBulb() {
    var image_tracker = 'off';
    var image = document.getElementById('bulb');
    setTimeout(changeColor, 100);
    if (image_tracker == 'off') {
        image.src = 'the-lightbulb-on.svg';
        image_tracker = 'on';
    }
    else {
        image.src = 'the-lightbulb-off.svg';
        image_tracker = 'off';
    }
}
clearTimeout()

var bdyclr = 'dark';
var rtbtn = document.getElementById('rightButtons');
var lftbtn = document.getElementById('leftButtons');

function changeColor() {
    if (bdyclr == 'dark') {
        document.body.style.backgroundColor = '#f5d500';
        bdyclr = 'light';
    }
    else {
        document.body.style.backgroundColor = '#252525';
        bdyclr = 'dark';
    }
    if (lftbtn.style.visibility === 'hidden') {
        lftbtn.style.visibility = 'visible';
    } else {
        lftbtn.style.visibility = 'hidden';
        if (rtbtn.style.visibility === 'hidden') {
            rtbtn.style.visibility = 'visible';
        } else {
            rtbtn.style.visibility = 'hidden';
        }
    }
}


// var bdyclr = 'dark';
// if (bdyclr == 'dark') {
//     document.body.style.backgroundColor = '#f5d500';
//     bdyclr = 'light';
// }
// else {
//     document.body.style.backgroundColor = '#252525';
//     bdyclr = 'dark';
// }
