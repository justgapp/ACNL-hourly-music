var slider = tns({
    container: '.my-slider',
    items:1,
    center:true
  });

let heure = new Date().getHours()
const audio = document.querySelector('#audio')
audio.volume = 0.25

let temps = ''

const inputHeure = document.querySelector('#heure')
inputHeure.addEventListener('change', e=>{
    heure = Number(e.target.value)
})

const buttonHeure = document.querySelector('#confh')
buttonHeure.addEventListener('click', ()=>{
    startSong()
})

const songTitle = document.querySelector('#title')

function startSong() {
    audio.setAttribute('src',`ACNL/${pickSongName()}.mp3`)
    songTitle.innerText = pickSongName()
    // audio.play()
}


function pickSongName() {
    if (heure === 1) {
        if(temps === "pluvieux") {
            return '038 - 1 AM - Rainy'
        } else if (temps === 'enneigé') {
            return '062 - 1 AM - Snowy'
        } else {
            return '014 - 1 AM'
        }
    } else if (heure === 2) {
        return '015 - 2 AM'
    } else if (heure === 3) {
        return '016 - 3 AM'
    } else if (heure === 4) {
        return '017 - 4 AM'
    } else if (heure === 5) {
        return '018 - 5 AM'
    } else if (heure === 6) {
        return '019 - 6 AM'
    } else if (heure === 7) {
        return '020 - 7 AM'
    } else if (heure === 8) {
        return '021 - 8 AM'
    } else if (heure === 9) {
        return '022 - 9 AM'
    } else if (heure === 10) {
        return '023 - 10 AM'
    } else if (heure === 11) {
        return '024 - 11 AM'
    } else if (heure === 12) {
        return '025 - 12 PM'
    } else if (heure === 13) {
        return '026 - 1 PM'
    } else if (heure === 14) {
        return '027 - 2 PM'
    } else if (heure === 15) {
        return '028 - 3 PM'
    } else if (heure === 16) {
        return '029 - 4 PM'
    } else if (heure === 17) {
        return '030 - 5 PM'
    } else if (heure === 18) {
        return '031 - 6 PM'
    } else if (heure === 19) {
        return '032 - 7 PM'
    } else if (heure === 20) {
        return '033 - 8 PM'
    } else if (heure === 21) {
        return '034 - 9 PM'
    } else if (heure === 22) {
        return '035 - 10 PM'
    } else if (heure === 23) {
        return '036 - 11 PM'
    } else if (heure === 0) {
        return '037 - 12 AM'
    } else {
        return '185 - SFX - Pranked'
    }
}

startSong()



