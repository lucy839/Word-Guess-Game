// create an array of 90s video games
function computerChoice(){
    var possible = ["batman", "superman", "arthur", "simpsons", "spongebob", "spiderman", "aladdin", "pokemon","beetlejuice", "daria"];

    var choice = possible[Math.floor(Math.random() * possible.length)];
    return choice;
}

// set up variables
var win = 0;
var guessLeft = 10;
var guessArray = [];

var winEl = document.getElementById('win');
var answerArrayEl = document.getElementById('answerArray');
 
// testing purpose...var cpuEl = document.getElementById('cpu');
var guessLeftEl= document.getElementById('guessLeft');
var guessArrayEl = document.getElementById('guessArray');

var music = {
    batman: "https://www.youtube.com/embed/OpWVV8wuM1A?autoplay=1",
    superman: "https://www.youtube.com/embed/FHpOVBEXCxM?autoplay=1",
    arthur: "https://www.youtube.com/embed/7zkX6kfnWbk?autoplay=1",
    simpsons: "https://www.youtube.com/embed/Xqog63KOANc?autoplay=1",
    spongebob: "https://www.youtube.com/embed/KDM6ojYCH1M?autoplay=1",
    spiderman:"https://www.youtube.com/embed/DZGN9fZvQhc?autoplay=1",
    aladdin: "https://www.youtube.com/embed/hZ1Rb9hC4JY?autoplay=1",
    pokemon:"https://www.youtube.com/embed/rg6CiPI6h2g?autoplay=1",
    beetlejuice: "https://www.youtube.com/embed/KZIsSQQy96A?autoplay=1",
    daria: "https://www.youtube.com/embed/46VOfkwqS3g?autoplay=1"
};

var computer = computerChoice();

var answerArray =[];
for (var i = 0; i < computer.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = computer.length;

// reset object to be called when reset is needed
function reset(){
    computer = computerChoice();
    remainingLetters = computer.length;
        answerArray =[];
        for (var i = 0; i < computer.length; i++) {
            answerArray[i] = "_";
        }
        guessLeft=10;
        guessArray =[];
}

// game content
document.onkeyup = function(event){
    const user = event.key.toLowerCase();
    const isLetter = (user >= "a" && user <= "z");
    var l = answerArray.indexOf(user);
    var m = guessArray.indexOf(user);
    if (user === answerArray[l] || user === guessArray[m]){
        alert("You already guess this letter!")
        return;
    } else if(!isLetter){
        alert ("Please enter an alphabet letter!");
        return;
    } else {
        for (var i = 0; i < computer.length; i++){
            if (computer[i] === user){
                answerArray[i] = user;
                remainingLetters--;
            }
        }
        var j = (computer.indexOf(user));
        if (j === -1) {
            guessLeft--;
            guessArray +=user;
        }
        guessArrayEl.textContent = guessArray;
        answerArrayEl.textContent = answerArray.join(" ");    
        // testing purpose...cpuEl.textContent = computer;
        guessLeftEl.textContent = guessLeft;
    }

    // when user wins
    if (remainingLetters <= 0) {
        win++;
        winEl.textContent = win;
        $('#play')[0].src = music[computer];
        reset();
    }
    
    // when use lost
    if (guessLeft <= 0) {
        alert("Game Over! Win point deducted");
        win = 0;
        winEl.textContent = win;
        reset();    
    }
} 