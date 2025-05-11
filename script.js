async function github(){
     window.location.href = 'https://github.com/Rexrupam'
}


async function spotify(){
     window.location.href = 'https://spotify-activity-api.onrender.com/login'

}

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('login') === 'success') {
    document.getElementById('loginSuccess').textContent = "Successfully logged in with Spotify";
  }
});

async function topTrack(){
   window.location.href = 'https://spotify-activity-api.onrender.com/toptrack'
}

async function playTrack(){
   window.location.href = 'https://spotify-activity-api.onrender.com/playanytrack'
}

async function pauseTrack(){
   window.location.href = 'https://spotify-activity-api.onrender.com/stop'
}

async function currentTrack(){
   window.location.href = 'https://spotify-activity-api.onrender.com/current-track'
}

async function play(){
   window.location.href = 'https://spotify-activity-api.onrender.com/play'
}

