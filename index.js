// declaring variables
let lastIndex = 0;
let songIndex = 0;
const play_pause_btn = document.getElementById("play-pause");
const progressBar = document.getElementById("range");
const dancer = document.getElementById("dancer");
const songs = Array.from(document.getElementsByClassName("song-container"));
const play_btn = Array.from(document.getElementsByClassName("play-btn"));
let sI = 0;

let song_arr = [
  {
    id: 0,
    Name: "Brown Rang",
    filePath: "Music/Brown Rang.mp3",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.g8sDxpbRmt3guFLQ_x0eyQHaEK&pid=Api&P=0",
  },
  {
    id: 1,
    Name: "Chal Mere Ghar",
    filePath: "Music/Chal Mere Ghar .mp3",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.vrKCZ2fH4ngxBIDk3OOy-wHaEK&pid=Api&P=0",
  },
  {
    id: 2,
    Name: "Daftar Ki Girl",
    filePath: "Music/Daftar Ki Girl .mp3",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.Vr4KmUne-TreBQ6YlMVlPwHaEK&pid=Api&P=0",
  },
  {
    id: 3,
    Name: "Desi Kalakaar",
    filePath: "Music/Desi Kalakaar.mp3",
    image:
      "https://image.songsuno.com/movie-images/original/movie/desi-kalakaar/desi-kalakaar-poster.jpg",
  },
  {
    id: 4,
    Name: "Dheere Dheere",
    filePath: "Music/Dheere Dheere.mp3",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.3jTAvP3LDcf-fiZUCh7FKwHaHa&pid=Api&P=0",
  },
  {
    id: 5,
    Name: "Dope Shope",
    filePath: "Music/Dope Shope.mp3",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.zkmEYHWwY6oLJHm-pjWFugHaEK&pid=Api&P=0",
  },
  {
    id: 6,
    Name: "Haye Mera Dil",
    filePath: "Music/Haye Mera Dil.mp3",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.x4_lXqdFMdZJ45H2X2SgFAHaEN&pid=Api&P=0",
  },
  {
    id: 7,
    Name: "Stardom",
    filePath: "Music/Stardom.mp3",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.EhRjLSFIaNpRhK_8RyorHAHaFj&pid=Api&P=0",
  },
];
let music = new Audio(song_arr[songIndex].filePath);

const dancerControl = () => {
  // FOR PHONE WINDOW

  if (window.matchMedia("(max-width: 600px)").matches) {
    songs.forEach((e) => {
      e.style.background = "none";
      e.style.color = "black";
      e.style.backgroundColor = "gray";
    });
  } else {
    songs.forEach((e) => {
      e.style.background = "none";
      e.style.color = "white";
      e.style.backgroundColor = "black";
    });
  }

  if (music.paused) {
    // FOR PHONE MEDIA

    if (window.matchMedia("(max-width: 600px)").matches) {
      songs[songIndex].style.backgroundColor = "white";
      songs[songIndex].style.color = "black";
      document.getElementById("Russian-dance").style.background =
        "url('https://tse3.mm.bing.net/th?id=OIP.y77lqUP-k38dGobnc6oPBwHaFh&pid=Api&P=0')no-repeat no-repeat";
      document.getElementById("Russian-dance").style.backgroundSize = "cover";
    }

    // FOR WINDOW MEDIA
    else {
      // Change image by song image

      dancer.src = song_arr[songIndex].image;

      // highlight current song

      songs[songIndex].style.backgroundColor = "white";
      songs[songIndex].style.color = "black";
      document.getElementById("Russian-dance").style.background =
        "url('https://wallpapercave.com/dwp1x/wp3988899.jpg')no-repeat no-repeat";
      document.getElementById("Russian-dance").style.backgroundSize = "cover";
    }
  }
  // IF MUSIC IS PLAYING
  else {
    // FOR PHONE MEDIA

    if (window.matchMedia("(max-width: 600px)").matches) {
      songs[songIndex].style.color = "black";
      songs[songIndex].style.background =
        "url('musical-notes-gif-music-notes-moving1.gif')";
      songs[songIndex].style.backgroundPosition = "center";
      songs[songIndex].style.backgroundSize = "cover";
    }

    // FOR WINDOW MEDIA
    else {
      dancer.src =
        "https://media0.giphy.com/media/6VSSnpTAbCBd6/giphy.gif?cid=ecf05e47zcx6ewqwbolx4uovf6rhnkhhe0v6o0zyhoi4r6wd&rid=giphy.gif&ct=g";

      //   // highlight current playing song
      songs[songIndex].style.color = "black";
      songs[songIndex].style.background =
        "url('musical-notes-gif-music-notes-moving1.gif')";
      songs[songIndex].style.backgroundPosition = "center";
      songs[songIndex].style.backgroundSize = "cover";
    }

    document.getElementById("Russian-dance").style.background =
      "url('http://www.reactiongifs.com/wp-content/uploads/2013/06/smooth-russian-kid.gif')no-repeat no-repeat";
    document.getElementById("Russian-dance").style.backgroundSize = "cover";

    songs.forEach((e) => {
      e.style.backgroundColor = "";
      e.style.color = "black";
      e.style.borderBottom = "0px";
    });
  }
};

dancerControl();

// to set song name, image, duration of all songs

songs.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = song_arr[i].image;
  element.getElementsByClassName("song-name")[0].innerText = song_arr[i].Name;

  let audio = new Audio(song_arr[i].filePath);
  audio.addEventListener("loadedmetadata", () => {
    const durationInSeconds = Math.floor(audio.duration);
    const durationInMinutes = Math.floor(durationInSeconds / 60);
    const durationInSecondsRemainder = durationInSeconds % 60;

    element.getElementsByClassName(
      "duration"
    )[0].innerText = `${durationInMinutes}:${durationInSecondsRemainder
      .toString()
      .padStart(2, "0")}`;
  });
});

// play pause handle in animation box

play_pause_btn.addEventListener("click", () => {
  if (music.paused || music.currentTime === 0) {
    music.play();
    dancerControl();
    play_pause_btn.classList.remove("fa-play-circle");
    play_pause_btn.classList.add("fa-pause-circle");
    play_btn[songIndex].classList.remove("fa-play-circle");
    play_btn[songIndex].classList.add("fa-pause-circle");
    //HightlightSong();
    ChangeMusic(music.currentTime);
  } else {
    music.pause();
    dancerControl();
    play_pause_btn.classList.remove("fa-pause-circle");
    play_pause_btn.classList.add("fa-play-circle");
    play_btn[songIndex].classList.remove("fa-pause-circle");
    play_btn[songIndex].classList.add("fa-play-circle");
    //HightlightSong();
    clearInterval(timer);
  }
});

// listen progress bar

music.addEventListener("timeupdate", () => {
  // update progress bar
  progress = parseInt((music.currentTime / music.duration) * 100);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  let Changed_music = (progressBar.value * music.duration) / 100;
  music.currentTime = Changed_music;
  console.log((progressBar.value * music.duration) / 100);
  ChangeMusic(Changed_music);
});

// Function which make all song play btn pause

const AllPlay = () => {
  play_btn.forEach((e) => {
    e.classList.remove("fa-pause-circle");
    e.classList.add("fa-play-circle");
  });
};

// playlist song play pause manage logic

play_btn.forEach((e) => {
  e.addEventListener("click", (element) => {
    AllPlay();
    songIndex = parseInt(element.target.id);
    song_arr.forEach((e) => {
      if (e.id === songIndex) {
        selected_song = e.filePath;
        document.getElementById("bar-song-name").innerText = e.Name;
      }
    });

    if (lastIndex == songIndex && sI != 1) {
      music.pause();
      dancerControl();
      element.target.classList.remove("fa-pause-circle");
      element.target.classList.add("fa-play-circle");

      play_pause_btn.classList.remove("fa-pause-circle");
      play_pause_btn.classList.add("fa-play-circle");
      sI = 1;
      clearInterval(timer);

      //HightlightSong();
    } else {
      if (music.paused || music.currentTime === 0) {
        element.target.classList.remove("fa-play-circle");
        element.target.classList.add("fa-pause-circle");
        // music.currentTime = 0;
        music.src = selected_song;
        music.play();
        dancerControl();
        play_pause_btn.classList.remove("fa-play-circle");
        play_pause_btn.classList.add("fa-pause-circle");
        sI = 0;
        //HightlightSong();
        ChangeMusic(music.currentTime);
      } else {
        music.pause();
        dancerControl();
        play_pause_btn.classList.remove("fa-pause-circle");
        play_pause_btn.classList.add("fa-play-circle");
        clearInterval(timer);
        //HightlightSong();
      }
    }
    lastIndex = songIndex;
  });
});

//  NEXT AND PREVIOUS SONG

const PlayForward = () => {
  if (songIndex < song_arr.length - 1) {
    songIndex += 1;
    console.log(songIndex);
  } else {
    songIndex = 0;
  }

  song_arr.forEach((e) => {
    if (e.id === songIndex) {
      selected_song = e.filePath;
      document.getElementById("bar-song-name").innerText = e.Name;
    }
  });
  // music.currentTime = 0;
  music.src = selected_song;
  music.play();
  dancerControl();
  play_pause_btn.classList.remove("fa-play-circle");
  play_pause_btn.classList.add("fa-pause-circle");
  dancer.style.opacity = 1;

  AllPlay();

  play_btn[songIndex].classList.remove("fa-play-circle");
  play_btn[songIndex].classList.add("fa-pause-circle");
  //HightlightSong();
  ChangeMusic();
};

document.getElementById("play-forward").addEventListener("click", PlayForward);

document.getElementById("play-backward").addEventListener("click", () => {
  if (songIndex < song_arr.length && songIndex > 0) {
    songIndex -= 1;
  } else {
    songIndex = 7;
  }
  song_arr.forEach((e) => {
    if (e.id === songIndex) {
      selected_song = e.filePath;
      document.getElementById("bar-song-name").innerText = e.Name;
    }
  });
  // music.currentTime = 0;
  music.src = selected_song;
  music.play();
  dancerControl();
  play_pause_btn.classList.remove("fa-play-circle");
  play_pause_btn.classList.add("fa-pause-circle");

  AllPlay();

  play_btn[songIndex].classList.remove("fa-play-circle");
  play_btn[songIndex].classList.add("fa-pause-circle");
  //HightlightSong();
  ChangeMusic();
});

//  SONG DURATION LOGIC

music.addEventListener("loadedmetadata", () => {
  const durationInSeconds = Math.floor(music.duration);
  const durationInMinutes = Math.floor(durationInSeconds / 60);
  const durationInSecondsRemainder = durationInSeconds % 60;
  document.getElementById(
    "duration-I"
  ).textContent = `${durationInMinutes}:${durationInSecondsRemainder
    .toString()
    .padStart(2, "0")}`;
});

let timer;
let rs;

const ChangeMusic = (change_music = 0) => {
  clearInterval(timer);

  let remainingSeconds = Math.floor(change_music);
  timer = setInterval(() => {
    remainingSeconds++;
    const remainingInMinutes = Math.floor(remainingSeconds / 60);
    const remainingInSecondsRemainder = remainingSeconds % 60;

    document.getElementById(
      "remaining"
    ).textContent = `${remainingInMinutes}:${remainingInSecondsRemainder
      .toString()
      .padStart(2, "0")}`;

    rs = remainingSeconds;
  }, 1000);
};

setInterval(() => {
  if (music.duration == music.currentTime) {
    clearInterval(timer);
    document.getElementById("remaining").textContent = "0:00";
    ChangeMusic();
    PlayForward();
  }
}, 1000);
