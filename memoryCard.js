document.addEventListener('DOMContentLoaded', () => {

    const seriesOfTwo = document.querySelector("#series2");
    const seriesOfThree = document.querySelector("#series3");
    const seriesOfFour = document.querySelector("#series4");
    // image option
    let imgArray = [
        {
            name: "insta",
            img: "image/insta.png"
        },

        {
            name: "twit",
            img: "image/twit.png"
        },
        {
            name: "twitter",
            img: "image/twitter.png"
        },

        {
            name: "fb",
            img: "image/fb.png"
        },
        {
            name: "g+",
            img: "image/g+.png"
        },

        {
            name: "youtube",
            img: "image/youtube.png"
        },
        {
            name: "li",
            img: "image/li.png"
        },

        {
            name: "mail",
            img: "image/mail.png"
        },
        {
            name: "whatsapp",
            img: "image/whatsapp.png"
        },

        {
            name: "snapchat",
            img: "image/snapchat.png"
        },
        {
            name: "tick",
            img: "image/tick.png"
        },

        {
            name: "map",
            img: "image/map.png"
        }
    ]

    let duplicateImg;
    function checkSeries() {
        if (seriesOfTwo.checked) {
            duplicateImg = [...imgArray, ...imgArray];
        }
        else if (seriesOfThree.checked) {
            let img = imgArray.slice(0, 8);
            duplicateImg = [...img, ...img, ...img];
        }
        else if (seriesOfFour.checked) {
            let img = imgArray.slice(0, 6);
            duplicateImg = [...img, ...img, ...img, ...img];
        }
    }


    checkedSeriesTwo = () => {
        seriesOfTwo.checked = true;
        seriesOfTwo.disabled = true;
        seriesOfThree.disabled = true;
        seriesOfFour.disabled = true;
        checkSeries();
    }

    checkedSeriesThree = () => {
        seriesOfThree.checked = true;
        seriesOfTwo.disabled = true;
        seriesOfThree.disabled = true;
        seriesOfFour.disabled = true;
        checkSeries();
    }

    checkedSeriesFour = () => {
        seriesOfFour.checked = true;
        seriesOfTwo.disabled = true;
        seriesOfThree.disabled = true;
        seriesOfFour.disabled = true;
        checkSeries();
    }

    shuffleCard = () => {
        duplicateImg.sort(() => 0.5 - Math.random());
    }

    let resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let interval;

    // create grid

    function createGrid() {
        const grid = document.querySelector('#grid');
        grid.innerHTML = "";
        for (let i = 0; i < 24; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'image/test.png');
            card.className = "frontImg";
            card.setAttribute('data-id', i);
            grid.appendChild(card);
        }
    }
    //check matches of card
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'image/test.png');
            cards[optionTwoId].setAttribute('src', 'image/test.png');

        }
        else if (cardsChosen[0] === cardsChosen[1]) {

            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'image/test.png');
            cards[optionTwoId].setAttribute('src', 'image/test.png');

        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.innerHTML = cardsWon.length;
        if (cardsWon.length === duplicateImg.length / 2) {
            resultDisplay.innerHTML = 'Congratulations! You found them all!';
            clearInterval(interval);
        }
    }

    function checkForMatch3() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        const optionThreeId = cardsChosenId[2];


        if (optionOneId == optionTwoId && optionTwoId == optionThreeId) {
            cards[optionOneId].setAttribute('src', 'image/test.png');
            cards[optionTwoId].setAttribute('src', 'image/test.png');
            cards[optionThreeId].setAttribute('src', 'image/test.png');


        }
        else if (cardsChosen[0] === cardsChosen[1] && cardsChosen[1] === cardsChosen[2]) {

            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cards[optionThreeId].removeEventListener('click', flipCard);

            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'image/test.png');
            cards[optionTwoId].setAttribute('src', 'image/test.png');
            cards[optionThreeId].setAttribute('src', 'image/test.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.innerHTML = cardsWon.length;
        if (cardsWon.length === duplicateImg.length / 3) {
            resultDisplay.innerHTML = 'Congratulations! You found them all!';
            clearInterval(interval);
        }
    }

    function checkForMatch4() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        const optionThreeId = cardsChosenId[2];
        const optionFourId = cardsChosenId[3];

        if (optionOneId == optionTwoId && optionTwoId == optionThreeId && optionThreeId == optionFourId) {
            cards[optionOneId].setAttribute('src', 'image/test.png');
            cards[optionTwoId].setAttribute('src', 'image/test.png');
            cards[optionOneId].setAttribute('src', 'image/test.png');
            cards[optionTwoId].setAttribute('src', 'image/test.png');

        }
        else if ((cardsChosen[0] === cardsChosen[1]) && (cardsChosen[1] === cardsChosen[2]) && (cardsChosen[2] === cardsChosen[3])) {
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cards[optionThreeId].removeEventListener('click', flipCard);
            cards[optionFourId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'image/test.png');
            cards[optionTwoId].setAttribute('src', 'image/test.png');
            cards[optionThreeId].setAttribute('src', 'image/test.png');
            cards[optionFourId].setAttribute('src', 'image/test.png');

        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.innerHTML = cardsWon.length;
        if (cardsWon.length === duplicateImg.length / 4) {
            resultDisplay.innerHTML = 'Congratulations! You found them all!';
            clearInterval(interval);
        }
    }

    //flip the card  

    function flipCard() {
        let imgId = this.getAttribute('data-id');
        cardsChosen.push(duplicateImg[imgId].name);
        cardsChosenId.push(imgId);
        this.setAttribute('src', duplicateImg[imgId].img);
        if (cardsChosen.length === 2 && seriesOfTwo.checked) {
            setTimeout(checkForMatch, 500)
            return
        }
        if (cardsChosen.length === 3 && seriesOfThree.checked) {
            setTimeout(checkForMatch3, 800)
            return
        }
        if (cardsChosen.length === 4 && seriesOfFour.checked) {
            setTimeout(checkForMatch4, 1000)
            return
        }
        if (cardsChosen.length === 2) {
            setTimeout(checkProgressForThree, 600)
        }
        if (cardsChosen.length === 3) {
            setTimeout(checkProgressForFour, 800)
        }
    }



    function flipAllCard() {
        const imageElements = document.getElementsByClassName('frontImg');
        Array.from(imageElements).forEach((ele, index) => {
            ele.setAttribute('src', duplicateImg[index].img);
        })

    }

    let showBtn = document.querySelector('#show');
    showBtn.addEventListener('click', () => {
        shuffleCard();
        flipAllCard();
    })


    let newGame = document.querySelector('#new_game');

    createGrid();
    newGame.addEventListener('click', () => {
        if (showBtn.disabled) {
            shuffleCard();
        }
        createGrid();
        resultDisplay.innerHTML = "0";
        cardsWon = [];
        showBtn.disabled = true;
        const imageElements = document.getElementsByClassName('frontImg');
        Array.from(imageElements).forEach((ele) => {
            ele.addEventListener('click', flipCard);
        })
        let second = 60;
        let timer = document.querySelector("#timer");
        function startTimer() {
            clearInterval(interval);
            interval = setInterval(function () {
                timer.value = second--;
                if (second < 0) {
                    clearInterval(interval);
                    alert('Game Over');
                    flipAllCard();
                    timer.value = 60;
                }
            }, 1000)
        };
        startTimer()
    })
})

function help() {
    alert("* Click to Start New Game \n* Select The series of the Game\n* Match the Image \n* Click the Show button for showing the image\n* You have only 60 second to complete the game")
}

