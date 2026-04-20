const button = document.getElementById("toggleAudio")
const audio = document.getElementById("bgAudio")

const playlist = [
  "music/all.mp3",
  "music/dark.mp3",
  "audio/track3.mp3",
  "audio/track4.mp3",
  "audio/track5.mp3",
  "audio/track6.mp3",
  "audio/track7.mp3",
  "audio/track8.mp3"
]

let currentTrack = 0

audio.volume = 0.3

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.src = playlist[currentTrack]
    audio.play()
    button.textContent = "🔇"
  } else {
    audio.pause()
    button.textContent = "🎧"
  }
})

audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlist.length
  audio.src = playlist[currentTrack]
  audio.play()
})


setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length
  updateImage()
}, 5000)