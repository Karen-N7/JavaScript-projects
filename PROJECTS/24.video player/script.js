var video = document.querySelector('video')
var progressBar = document.querySelector('.progress-bar')
var progress = document.querySelector('.progress')
var playPause = document.querySelector('#playPause')
var volume = document.querySelector('#volume')
var volumRange = document.querySelector('#volumeRange')
var timeInfo = document.querySelector('.timeInfo')
playPause.className = 'fas fa-play'
volume.className = "fas fa-volume-up"

function togglePlay() {
    if (video.paused) {
        video.play()
        playPause.className = 'fas fa-pause'
    } else {
        video.pause()
        playPause.className = 'fas fa-play'
    }
}
playPause.addEventListener('click', togglePlay)

function convertTime(seconds,status) {
    function addZero(time){
        return (time < 10 ? '0': '') + time
    }
    var min = Math.floor(seconds / 60)
    var sec = seconds % 60
    if(status) {
        timeInfo.innerHTML = `${addZero(min)} : ${addZero(sec)}`
    } else {
        timeInfo.innerHTML += ` / ${addZero(min)} : ${addZero(sec)}`
    }
}

function timeUpdate() {
    var position = video.currentTime / video.duration
    progress.style.width = position * 100 + '%'
    if (video.ended) {
        playPause.className = 'fas fa-play'
    }
    convertTime(Math.round(video.currentTime),true)
    convertTime(Math.round(video.duration),false)

}
video.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', timeUpdate)

function scrub(e) {
    var scrubTime = e.offsetX / progressBar.offsetWidth * video.duration
    video.currentTime = scrubTime
}
progressBar.addEventListener('mousedown', (e) => {
    scrub(e)
    progressBar.addEventListener('mousemove', scrub)
})
progressBar.addEventListener('mouseup', () => {
    progressBar.removeEventListener('mousemove', scrub)
})

volumeRange.addEventListener('change', () => {
    video.volume = volumeRange.value
    if (volumeRange.value == 0) {
        volume.className = "fas fa-volume-mute"
    } else {
        volume.className = "fas fa-volume-up"
    }
})