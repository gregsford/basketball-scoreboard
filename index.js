let homeScoreboard = document.getElementById("homeScoreboard")
let guestScoreboard = document.getElementById("guestScoreboard")
let homescore = 0
let guestscore = 0

function homeAdd1() {
    homescore += 1
    homeScoreboard.innerText = homescore
}

function homeAdd2() {
    homescore += 2
    homeScoreboard.innerText = homescore
}

function homeAdd3() {
    homescore += 3
    homeScoreboard.innerText = homescore
}

function guestAdd1() {
    guestscore += 1
    guestScoreboard.innerText = guestscore
}

function guestAdd2() {
    guestscore += 2
    guestScoreboard.innerText = guestscore
}

function guestAdd3() {
    guestscore += 3
    guestScoreboard.innerText = guestscore
}