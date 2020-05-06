var slider = tns({
    container: '.my-slider',
    items:1,
    gutter:2000,
    center:true,
    controls:false,
    autoWidth:true,
    nav:false,
    arrowKeys:true,
    autoplay:true,
    loop:true,
    autoplayHoverPause:true,
    lazyload:true,
    speed:750
  });

const songTitle = document.querySelector('#title')
const songHour = document.querySelector('#hour')
const audio = document.querySelector('#audio')
audio.volume = 0.25
  
let heure = new Date().getHours()
let temps = ''

const inputHeure = document.querySelector('#heure')
inputHeure.addEventListener('change', e=>{
    heure = Number(e.target.value)
})

const buttonHeure = document.querySelector('#confh')
buttonHeure.addEventListener('click', ()=>{
    startSong()
})

const selectMeteo = document.querySelector('#meteo')
selectMeteo.addEventListener('change', e=>{
    temps = e.target.value
})

const buttonMeteo = document.querySelector('#confm')
buttonMeteo.addEventListener('click', ()=>{
    startSong()
})


function startSong() {
    audio.setAttribute('src',`ACNL/${pickSongName()}.mp3`)
    songTitle.innerText = pickSongName()
    songHour.innerText = heure<=23 ? `(${heure}h)` : ''
    // audio.play()
}


function pickSongName() {
    if (heure === 1) {
        if(temps === "pluie") {
            return '038 - 1 AM - Rainy'
        } else if (temps === 'neige') {
            return '062 - 1 AM - Snowy'
        } else {
            return '014 - 1 AM'
        }
    } else if (heure === 2) {
        if(temps === "pluie"){
            return '039 - 2 AM - Rainy'
        }else if(temps === 'neige'){
            return '063 - 2 AM - Snowy'
        }else{
            return '015 - 2 AM'
        } 
    } else if (heure === 3) {
        if(temps === "pluie") {
            return '040 - 3 AM - Rainy'
        } else if (temps === 'neige') {
            return '064 - 3 AM - Snowy'
        } else {
            return '016 - 3 AM'
        }
    } else if (heure === 4) {
        if(temps === "pluie") {
            return '041 - 4 AM - Rainy'
        } else if (temps === 'neige') {
            return '065 - 4 AM - Snowy'
        } else {
            return '017 - 4 AM'
        }
    } else if (heure === 5) {
        if(temps === "pluie") {
            return '042 - 5 AM - Rainy'
        } else if (temps === 'neige') {
            return '066 - 5 AM - Snowy'
        } else {
            return '018 - 5 AM'
        }
    } else if (heure === 6) {
        if(temps === "pluie") {
            return '043 - 6 AM - Rainy'
        } else if (temps === 'neige') {
            return '067 - 6 AM - Snowy'
        } else {
            return '019 - 6 AM'
        }
    } else if (heure === 7) {
        if(temps === "pluie") {
            return '044 - 7 AM - Rainy'
        } else if (temps === 'neige') {
            return '068 - 7 AM - Snowy'
        } else {
            return '020 - 7 AM'
        }
    } else if (heure === 8) {
        if(temps === "pluie") {
            return '045 - 8 AM - Rainy'
        } else if (temps === 'neige') {
            return '069 - 8 AM - Snowy'
        } else {
            return '021 - 8 AM'
        }
    } else if (heure === 9) {
        if(temps === "pluie") {
            return '046 - 9 AM - Rainy'
        } else if (temps === 'neige') {
            return '070 - 9 AM - Snowy'
        } else {
            return '022 - 9 AM'
        }
    } else if (heure === 10) {
        if(temps === "pluie") {
            return '047 - 10 AM - Rainy'
        } else if (temps === 'neige') {
            return '071 - 10 AM - Snowy'
        } else {
            return '023 - 10 AM'
        }
    } else if (heure === 11) {
        if(temps === "pluie") {
            return '048 - 11 AM - Rainy'
        } else if (temps === 'neige') {
            return '072 - 11 AM - Snowy'
        } else {
            return '024 - 11 AM'
        }
    } else if (heure === 12) {
        if(temps === "pluie") {
            return '049 - 12 PM - Rainy'
        } else if (temps === 'neige') {
            return '073 - 12 PM - Snowy'
        } else {
            return '025 - 12 PM'
        }
    } else if (heure === 13) {
        if(temps === "pluie") {
            return '050 - 1 PM - Rainy'
        } else if (temps === 'neige') {
            return '074 - 1 PM - Snowy'
        } else {
            return '026 - 1 PM'
        }
    } else if (heure === 14) {
        if(temps === "pluie") {
            return '051 - 2 PM - Rainy'
        } else if (temps === 'neige') {
            return '075 - 2 PM - Snowy'
        } else {
            return '027 - 2 PM'
        }
    } else if (heure === 15) {
        if(temps === "pluie") {
            return '052 - 3 PM - Rainy'
        } else if (temps === 'neige') {
            return '076 - 3 PM - Snowy'
        } else {
            return '028 - 3 PM'
        }
    } else if (heure === 16) {
        if(temps === "pluie") {
            return '053 - 4 PM - Rainy'
        } else if (temps === 'neige') {
            return '077 - 4 PM - Snowy'
        } else {
            return '029 - 4 PM'
        }
    } else if (heure === 17) {
        if(temps === "pluie") {
            return '054 - 5 PM - Rainy'
        } else if (temps === 'neige') {
            return '078 - 5 PM - Snowy'
        } else {
            return '030 - 5 PM'
        }
    } else if (heure === 18) {
        if(temps === "pluie") {
            return '055 - 6 PM - Rainy'
        } else if (temps === 'neige') {
            return '079 - 6 PM - Snowy'
        } else {
            return '031 - 6 PM'
        }
    } else if (heure === 19) {
        if(temps === "pluie") {
            return '056 - 7 PM - Rainy'
        } else if (temps === 'neige') {
            return '080 - 7 PM - Snowy'
        } else {
            return '032 - 7 PM'
        }
    } else if (heure === 20) {
        if(temps === "pluie") {
            return '057 - 8 PM - Rainy'
        } else if (temps === 'neige') {
            return '081 - 8 PM - Snowy'
        } else {
            return '033 - 8 PM'
        }
    } else if (heure === 21) {
        if(temps === "pluie") {
            return '058 - 9 PM - Rainy'
        } else if (temps === 'neige') {
            return '082 - 9 PM - Snowy'
        } else {
            return '034 - 9 PM'
        }
    } else if (heure === 22) {
        if(temps === "pluie") {
            return '059 - 10 PM - Rainy'
        } else if (temps === 'neige') {
            return '083 - 10 PM - Snowy'
        } else {
            return '035 - 10 AM'
        }
    } else if (heure === 23) {
        if(temps === "pluie") {
            return '060 - 11 PM - Rainy'
        } else if (temps === 'neige') {
            return '084 - 11 PM - Snowy'
        } else {
            return '036 - 11 PM'
        }
    } else if (heure === 0) {
        if(temps === "pluie") {
            return '061 - 12 PM - Rainy'
        } else if (temps === 'neige') {
            return '085 - 12 PM - Snowy'
        } else {
            return '037 - 12 PM'}
    } else {
        return '185 - SFX - Pranked'
    }
}

startSong()



