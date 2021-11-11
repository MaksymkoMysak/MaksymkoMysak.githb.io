
function musicChange() {
    let music = document.getElementById("music")
    music.innerHTML = "&#xf7a6;";

    setTimeout(function(){
        music.innerHTML = "&#xf025;";
    },1000)
}

function snowboardChange() {
    let snowboard = document.getElementById("snowboarding")
    snowboard.innerHTML = "&#xf7ce;";

    setTimeout(function(){
        snowboard.innerHTML = "&#xf2dc;";
    },1000)
}

function travelChange() {
    let travel = document.getElementById("travel")
    travel.innerHTML = "&#xf072;";

    setTimeout(function(){
        travel.innerHTML = "&#xf1b9;";
    },1000)
}

musicChange();
setInterval(musicChange, 2000);

snowboardChange();
setInterval(snowboardChange, 2000);

travelChange();
setInterval(travelChange, 2000);