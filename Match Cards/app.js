document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: "one",
            img: "images/1.png"
        },
        {
            name: "one",
            img: "images/1.png"
        },
        {
            name: "two",
            img: "images/2.png"
        },
        {
            name: "two",
            img: "images/2.png"
        },
        {
            name: "three",
            img: "images/3.png"
        },
        {
            name: "three",
            img: "images/3.png"
        },
        {
            name: "four",
            img: "images/4.png"
        },
        {
            name: "four",
            img: "images/4.png"
        },
        {
            name: "five",
            img: "images/5.png"
        },
        {
            name: "five",
            img: "images/5.png"
        },
        {
            name: "six",
            img: "images/6.png"
        },
        {
            name: "six",
            img: "images/6.png"
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())



    // create the board
    let resultDisplay = document.querySelector('#result')
    const grid = document.querySelector('.grid')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []


    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', './images/cover.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch(){
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', './images/blank.png')
            cards[optionTwoId].setAttribute('src', './images/blank.png')
            cardsWon.push(cardsChosen)
        } else{
            cards[optionOneId].setAttribute('src', './images/cover.png')
            cards[optionOneId].setAttribute('src', './images/cover.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations'
        }

    }

    //flip your card
    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()


    
})