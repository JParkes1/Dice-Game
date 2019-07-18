// Dice Game

// Global Variables
let Hdice;
let Pdice;
let BetAmount;
let funds;
let count = 5000; 
let MediumPrize;
let Mediumprize;
let LargePrize;
let Largeprize;


// Event listeners
document.getElementById('play-btn').addEventListener('click', rollPlayerDice)
document.getElementById('play-btn').addEventListener('click', rollHouseDice)
document.getElementById('play-btn').addEventListener('click', whoWins)
document.getElementById('purchase-btn').addEventListener('click', riches)

// Event Function
function rollPlayerDice() {
    // Make a 1/6 Random Chance to roll any number, or 0.20

    let randDice = Math.random();

    if (randDice <= 0.166){
        Pdice = '1'
    } else if (randDice <= 0.333) {
        Pdice = '2';
    } else if (randDice <= 0.500) {
        Pdice = '3';
    } else if (randDice <= 0.666) {
        Pdice = '4';
    } else if (randDice <= 0.832) {
        Pdice = '5';
    } else {
        Pdice = '6';
    }

    // Display the dice roll to the user
    if (Pdice == 1) {
        document.getElementById('player-die').src = 'images/1.png';
    } else if (Pdice == 2) {
        document.getElementById('player-die').src = 'images/2.png';
    } else if (Pdice == 3) {
        document.getElementById('player-die').src = 'images/3.png';
    } else if (Pdice == 4) {
        document.getElementById('player-die').src = 'images/4.png';
    } else if (Pdice == 5) {
        document.getElementById('player-die').src = 'images/5.png';
    } else {
        document.getElementById('player-die').src = 'images/6.png';
    }
}

// Event Function
function rollHouseDice() {
    // Make a 1/6 Random Chance to roll any number, or 0.20

    let randDice = Math.random();

    if (randDice <= 0.166){
        Hdice = '1'
    } else if (randDice <= 0.333) {
        Hdice = '2';
    } else if (randDice <= 0.500) {
        Hdice = '3';
    } else if (randDice <= 0.666) {
        Hdice = '4';
    } else if (randDice <= 0.832) {
        Hdice = '5';
    } else {
        Hdice = '6';
    }

    // Display the dice roll to the user
    if (Hdice == 1) {
        document.getElementById('house-die').src = 'images/1.png';
    } else if (Hdice == 2) {
        document.getElementById('house-die').src = 'images/2.png';
    } else if (Hdice == 3) {
        document.getElementById('house-die').src = 'images/3.png';
    } else if (Hdice == 4) {
        document.getElementById('house-die').src = 'images/4.png';
    } else if (Hdice == 5) {
        document.getElementById('house-die').src = 'images/5.png';
    } else {
        document.getElementById('house-die').src = 'images/6.png';
    }
}

function whoWins() {
    let BetAmount = Number(document.getElementById('bet-input').value);
    let count =  Number(document.getElementById('funds').value);

    if (Hdice > Pdice) {
        console.log("House Win!");
        funds = funds - BetAmount;
        document.getElementById('funds').innerHTML = count;

    } else if (Pdice > Hdice) {
        console.log("Player Win");
        funds = funds + BetAmount;
        document.getElementById('funds').innerHTML = count;

    } else {
        console.log("Tie!");
        funds = funds
        document.getElementById('funds').innerHTML = count;
    }
}

function riches () {
    //random generator for 1000 or less
    if (funds <= 1000) {
        document.getElementById('loot').innerHTML += '<img src="images/socks.png">';
    
    //random generator for 1000-5000
    } else if (funds >= 1001 && betInput <= 4999) {
        //random generator for 1000-5000
        let MediumPrize = Math.random();
        
        if (MediumPrize <= 0.333) {
            Mediumprize = '1'
        } else if (MediumPrize <=0.666) {
            Mediumprize = '2'
        } else {
            Mediumprize = '3'
        }

        if (Mediumprize == 1) {
            document.getElementById('loot').innerHTML += '<img src="images/ring.png">';
        } else if (Mediumprize == 2) {
            document.getElementById('loot').innerHTML += '<img src="images/bike.jpg">';
        } else {
            document.getElementById('loot').innerHTML += '<img src="images/trip.jpg">';
        }
    

    //random generator for 5000+
    } else {
        let LargePrize = math.random();

        if (LargePrize <= 0.25) {
            Largeprize = '1'
        } else if (LargePrize <= 0.5) {
            Largeprize = '2'
        } else if (LargePrize <= 0.75) {
            Largeprize = '3'
        } else {
            Largeprize = '4'
        }

        if (Largeprize == 1) {
            document.getElementById('loot').innerHTML += '<img src="images/car.png">';
        } else if (Largeprize == 2) {
            document.getElementById('loot').innerHTML += '<img src="images/boat.png">';
        } else if (Largeprize == 3) {
            document.getElementById('loot').innerHTML += '<img src="images/house.png">';
        } else {
            document.getElementById('loot').innerHTML += '<img src="images/motorcycle.jpg">';
        }
    }
}


