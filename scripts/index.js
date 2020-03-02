var h2, start, stop, clear;
var seconds = 0;
var minutes = 0;
var hours = 0;


function onLoad(){
    h2 = document.getElementsByTagName('h2')[0];
    start = document.getElementById('start');
    stop = document.getElementById('stop');
    clear = document.getElementById('clear');
    gameTimer();
    
}
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    gameTimer();
}
function gameTimer() {
    t = setTimeout(add, 1000);
}


// Used to remove a heart when the squirrel touches an object
function removeHeart(){

    // Grab all the heart images from the hmtl page 
    var heart1 = $("#heart1");
    var heart2 = $("#heart2");
    var heart3 = $("#heart3");

    if(heart1.hasClass('removed') && heart2.hasClass('removed')){
        // This means that all hearts will be gone so endgame
        heart3.addClass("removed");
        //endGame()
    } else if( heart1.hasClass('removed')) {
        heart2.addClass('removed');
    } else {
        heart1.addClass('removed');
    }  

    console.log('Heart Removed');
} 

function startGame(){
    var page = document.getElementById("start-page");
    page.style.display="none";
    var newPage = document.getElementById("gameScreen");
    newPage.className="";
}
