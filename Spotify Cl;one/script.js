console.log("Welcome to Spotify");

let songindex = 0;
let audioelement = new Audio('song/1.mp3');
//audioelement.play();
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('op');
let songitems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {
        songname: "Let me Love You",
        filepath: "song/1.mp3",
        coverpath: "https://images.pexels.com/photos/12725937/pexels-photo-12725937.jpeg?auto=compress&cs=tinysrgb&w=5560&h=5550&dpr=1"
    },
    {
        songname: "Arjan velly",
        filepath: "song/2.mp3",
        coverpath: "https://images.pexels.com/photos/2747450/pexels-photo-2747450.jpeg?auto=compress&cs=tinysrgb&w=5560&h=5550&dpr=1"
    },
    {
        songname: "Gym Song",
        filepath: "song/3.mp3",
        coverpath: "https://images.pexels.com/photos/127712/pexels-photo-127712.jpeg?auto=compress&cs=tinysrgb&w=5560&h=5550&dpr=1"
    },
    {
        songname: "Fairy tale",
        filepath: "song/4.mp3",
        coverpath: "https://images.pexels.com/photos/127712/pexels-photo-127712.jpeg?auto=compress&cs=tinysrgb&w=5560&h=5550&dpr=1"
    },
    {
        songname: "Guli mata",
        filepath: "song/5.mp3",
        coverpath: "https://images.pexels.com/photos/127712/pexels-photo-127712.jpeg?auto=compress&cs=tinysrgb&w=5560&h=5550&dpr=1"
    },
    {
        songname: "Sometimes",
        filepath: "song/6.mp3",
        coverpath: "https://images.pexels.com/photos/127712/pexels-photo-127712.jpeg?auto=compress&cs=tinysrgb&w=5560&h=5550&dpr=1"
    }
];

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

audioelement.addEventListener('timeupdate', () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
});

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
});

const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = `song/${songindex}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    });
});
