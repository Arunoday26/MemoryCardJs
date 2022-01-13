let Two_Cards = [];
let Three_Cards;
let Four_Cards;
let radio_one = document.getElementById("radio_one");
let radio_two = document.getElementById("radio_two");
let radio_three = document.getElementById("radio_three");
let label_one = document.getElementById("label_first");
let label_two = document.getElementById("label_second");
let label_three = document.getElementById("label_third");
const game = document.querySelector(".game");
let opened = [];
let matched = [];
const modal = document.getElementById("modal");
const Help = document.querySelector(".help-btn");
const reset = document.querySelector(".reset-btn");
const Show = document.querySelector(".show-btn");
const playAgain = document.querySelector(".play-again-btn");
const timeCounter = document.querySelector(".timer");
let time;
let minutes = 0;
let seconds = 0;
let timeStart = false;
label_one.onclick = true;
label_two.onclick = false;
label_three.onclick = false;
Show.disabled = true;
const Card = ["fb.png", "g+.png", "done.png", "insta.png", "li.png", "mail.png", "map.png", "snapchat.png", "twit.png", "twitter.png", "whatsapp.png", "youtube.png"];
Two_Cards = [...Card, ...Card];
let Card_Three = Card.slice(0, 8);
Three_Cards = [...Card_Three, ...Card_Three, ...Card_Three];
let Card_Four = Card.slice(0, 6);
Four_Cards = [...Card_Four, ...Card_Four, ...Card_Four, ...Card_Four];

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function startGame(array) {
    const shuffledCard = shuffle(array);
    for (let i = 0; i < shuffledCard.length; i++) {
        const liTag = document.createElement("li");
        liTag.classList.add("card");
        const addImage = document.createElement("img");
        liTag.appendChild(addImage);
        addImage.setAttribute("src", "" + shuffledCard[i]);
        addImage.setAttribute("class", "img");
        addImage.setAttribute("alt", "image error");
        game.appendChild(liTag);
    }
}

function removeCard() {
    while (game.hasChildNodes()) {
        game.removeChild(game.firstChild);
    }
}

function timer() {
    // Update the count every 1 second
    time = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
            gameover();
        }
        // Update the timer in HTML with the time it takes the user to play the game
        timeCounter.innerHTML = " Timer: " + minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}) + ":" + seconds.toLocaleString(undefined,{minimumIntegerDigits: 2});
    }, 1000);
}

function stopTime() {
    clearInterval(time);
}

function resetEverything() {
    stopTime();
    timeStart = false;
    seconds = 0;
    minutes = 0;
    timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: 00:00";
    matched = [];
    opened = [];
    dis();
    reload();
    game.classList.remove("flip");
}

function gameover() {
    window.alert("GAME OVER");
    show();
    stopTime();
}

function help() {
    window.alert("Memory Card GAME - Help  \n\nPlayers take turns, to the left, turning any two cards picture-side-up. The cards must be turned over completely, so that all players can see them.\n\nA Match: A player makes a match if the two cards turned picture-side-up are identical. When a match is made, the player takes both cards and places them in front of him or her. That player then takes another turn, and continues taking turns until he or she misses.\n\nA Miss: A player misses if the two cards turned over are not identical. When a player misses, he or she turns the two cards picture-side-down again, in the same place.\n\nThat player's turn ends-and all players try to remember which cards were turned over, for future matches.\n\nThe game continues until all cards have been matched and removed from the playing area. All players then count up their matching pairs."
    );
}

Help.addEventListener("click", help);
function show() {
    game.classList.add("flip");
    game.classList.add("match");
    stopTime();
}

function reload() {
    location.reload();
}

function dis() {
    radio_one.checked = false;
    radio_two.checked = false;
    radio_three.checked = false;
}

function winGame(array) {
    if (matched.length === array.length) {
        stopTime();
        window.alert("YOU WIN!");
    }
}

Show.addEventListener("click", show);
startGame(Two_Cards);
//=============================================TWO CARD SERIES==========================================================================
function fliptwocard() {
    function compareTwo1() {
        if (opened.length === 2) {
            document.body.style.pointerEvents = "none";
        }
        if (opened.length === 2 && opened[0].src === opened[1].src) {
            setTimeout(function () {
                opened[0].parentElement.classList.add("match");
                opened[1].parentElement.classList.add("match");
                matched.push(...opened);
                document.body.style.pointerEvents = "auto";
                winGame(Two_Cards);
                opened = [];
            }, 600);
        }
        else if (opened.length === 2 && opened[0].src != opened[1].src) {
            setTimeout(function () {
                opened[0].parentElement.classList.remove("flip");
                opened[1].parentElement.classList.remove("flip");
                document.body.style.pointerEvents = "auto";
                opened = [];
            }, 700);
        }
    }

    game.addEventListener("click", function (evt) {
        if (evt.target.nodeName === "LI") {
            if (timeStart === false) {
                timeStart = true;
                timer();
            }
            flipCard();
        }

        function flipCard() {
            evt.target.classList.add("flip");
            addToOpened();
        }

        function addToOpened() {
            if (opened.length === 0 || opened.length === 1) {
                opened.push(evt.target.firstElementChild);
            }
            compareTwo1();
        }
    });
}
//=============================================THREE CARD SERIES=============================================================================
function flipthreecard() {
    function compare() {
        if (opened.length == 2) {
            document.body.style.pointerEvents = "none";
        }
        if (opened.length === 2 && opened[0].src === opened[1].src) {
            document.body.style.pointerEvents = "auto";
        }
        if (opened.length == 3) {
            document.body.style.pointerEvents = "none";
        }
        if (opened.length == 3 && opened[0].src === opened[1].src && opened[0].src === opened[2].src && opened[1].src === opened[2].src) {
            opened[0].parentElement.classList.add("match");
            opened[1].parentElement.classList.add("match");
            opened[2].parentElement.classList.add("match");
            matched.push(...opened);
            document.body.style.pointerEvents = "auto";
            winGame(Three_Cards);
            opened = [];
        }
        else if (opened.length === 3 && (opened[0].src != opened[1].src) != opened[2].src) {
            setTimeout(() => {
                opened[0].parentElement.classList.remove("flip");
                opened[1].parentElement.classList.remove("flip");
                opened[2].parentElement.classList.remove("flip");
                document.body.style.pointerEvents = "auto";
                opened = [];
            }, 900);
        }
        else if (opened.length === 2 && opened[0].src != opened[1].src) {
            setTimeout(() => {
                opened[0].parentElement.classList.remove("flip");
                opened[1].parentElement.classList.remove("flip");
                document.body.style.pointerEvents = "auto";
                opened = [];
            }, 800);
        }
    }

    game.addEventListener("click", function (evt) {
        if (evt.target.nodeName === "LI") {
            if (timeStart === false) {
                timeStart = true;
                timer();
            }
            flipCard();
        }

        function flipCard() {
            evt.target.classList.add("flip");
            addToOpened();
        }

        function addToOpened() {
            if (opened.length === 0 || opened.length === 1 || opened.length === 2 || opened.length === 3) {
                opened.push(evt.target.firstElementChild);
            }
            compare();
        }
    });
}
//=========================================-===========FOUR CARD SERIES =======================================================================
function flipfourcard() {
    function comparefour() {
        if (opened.length == 2) {
            document.body.style.pointerEvents = "none";
        }

        if (opened.length === 2 && opened[0].src === opened[1].src) {
            document.body.style.pointerEvents = "auto";
        }
        else if (opened.length === 2 && opened[0].src != opened[1].src) {
            setTimeout(() => {
                opened[0].parentElement.classList.remove("flip");
                opened[1].parentElement.classList.remove("flip");
                document.body.style.pointerEvents = "auto";
                opened = [];
            }, 800);
        }
        if (opened.length == 3) {
            document.body.style.pointerEvents = "none";
        }
        if (opened.length == 3 && opened[0].src === opened[1].src && opened[0].src === opened[2].src && opened[1].src === opened[2].src) {
            document.body.style.pointerEvents = "auto";
        }
        else if (opened.length === 3 && (opened[0].src != opened[1].src) != opened[2].src) {
            setTimeout(() => {
                opened[0].parentElement.classList.remove("flip");
                opened[1].parentElement.classList.remove("flip");
                opened[2].parentElement.classList.remove("flip");
                document.body.style.pointerEvents = "auto";
                opened = [];
            }, 900);
        }
        if (opened.length == 4) {
            document.body.style.pointerEvents = "none";
        }
        if (opened.length === 4 && opened[0].src === opened[1].src && opened[0].src === opened[2].src && opened[0].src === opened[3].src && opened[1].src === opened[2].src && opened[1].src === opened[3].src && opened[2].src === opened[3].src) {
            opened[0].parentElement.classList.add("match");
            opened[1].parentElement.classList.add("match");
            opened[2].parentElement.classList.add("match");
            opened[3].parentElement.classList.add("match");
            matched.push(...opened);
            document.body.style.pointerEvents = "auto";
            winGame(Four_Cards);
            opened = [];
        }
        else if (opened.length === 4 && ((opened[0].src != opened[1].src) != opened[2].src) != opened[3].src) {
            setTimeout(function () {
                // Remove class flip on images parent element
                opened[0].parentElement.classList.remove("flip");
                opened[1].parentElement.classList.remove("flip");
                opened[2].parentElement.classList.remove("flip");
                opened[3].parentElement.classList.remove("flip");
                document.body.style.pointerEvents = "auto";
                opened = [];
            }, 800);
        }
    }

    game.addEventListener("click", function (evt) {
        if (evt.target.nodeName === "LI") {
            if (timeStart === false) {
                timeStart = true;
                timer();
            }
            flipCard();
        }

        function flipCard() {
            evt.target.classList.add("flip");
            addToOpened();
        }

        function addToOpened() {
            if (opened.length === 0 || opened.length === 1 || opened.length === 2 || opened.length === 3 || opened.length === 4) {
                opened.push(evt.target.firstElementChild);
            }
            comparefour();
        }
    });
}

function check() {
    radio_two.disabled = true;
    radio_three.disabled = true;
    radio_one.disabled = true;
    Show.disabled = false;
    label_one.onclick = false;
    label_two.onclick = false;
    label_three.onclick = false;
}

/*THIS FUNCTION IS USED TO GENRATE 2 PAIR GAME*/
/*===================================================================*/
if (radio_one.checked == true) {
    TwoCard();
}
else if (radio_two.checked == true) {
    ThreeCard();
}
else if (radio_three.checked == true) {
    FourCard();
}

function TwoCard() {
    removeCard();
    startGame(Two_Cards);
    fliptwocard();
    radio_one.addEventListener("click", startGame);
    radio_one.addEventListener("click", fliptwocard);
    reset.addEventListener("click", removeCard);
    reset.addEventListener("click", reload);
    reset.addEventListener("click", resetEverything);
    check();
}

function ThreeCard() {
    removeCard();
    radio_two.addEventListener("click", removeCard);
    startGame(Three_Cards);
    flipthreecard();
    radio_two.addEventListener("click", startGame);
    radio_two.addEventListener("click", flipthreecard);
    reset.addEventListener("click", resetEverything);
    check();
}

function FourCard() {
    removeCard();
    radio_three.addEventListener("click", removeCard);
    startGame(Four_Cards);
    flipfourcard();
    radio_three.addEventListener("click", startGame);
    radio_three.addEventListener("click", flipfourcard);
    reset.addEventListener("click", resetEverything);
    check();
}