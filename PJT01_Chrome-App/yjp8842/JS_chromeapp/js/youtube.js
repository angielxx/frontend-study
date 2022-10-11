var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '360',
		width: '640',
		videoId: "eR5DtxrwCms",
		events: {}
	});
}

const PLAYLIST_ID = [
  {
    name: "10cm - 서랍",
    videoId: "eR5DtxrwCms",
  },
  {
    name: '샘킴 - 여름비',
    videoId: 'Ga5jVpIfrBY',
  },
];

const playList = document.querySelector("#playList");

function handlePlayBtnClick() {
  player.playVideo();
  playList.innerText = `PLAY ${currentPlayerList + 1} - ${PLAYLIST_ID[currentPlayerList].name}`;
}

function handlePauseBtnClick() {
  player.pauseVideo();
}

let currentPlayerList = 0;
function handleNextBtnClick() {
  if (currentPlayerList >= PLAYLIST_ID.length) {
    currentPlayerList = 0;
  } else {
    currentPlayerList += 1;
  }
  player.loadVideoById(PLAYLIST_ID[currentPlayerList].videoId);
  playList.innerText = `PLAY ${currentPlayerList + 1} - ${PLAYLIST_ID[currentPlayerList].name}`;
}

const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const nextButton = document.querySelector("#next");

playButton.addEventListener("click", handlePlayBtnClick);
pauseButton.addEventListener("click", handlePauseBtnClick);
nextButton.addEventListener("click", handleNextBtnClick);