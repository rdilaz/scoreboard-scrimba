let homeScore = 0
let guestScore = 0

function plusOne(){
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}

function plusTwo(){
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}

function plusThree(){
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}

function plusOneGuest(){
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}

function plusTwoGuest(){
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}

function plusThreeGuest(){
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}

function reset() {
    guestScore = 0
    document.getElementById("guest-score").textContent = 0
    homeScore = 0
    document.getElementById("home-score").textContent = 0
}