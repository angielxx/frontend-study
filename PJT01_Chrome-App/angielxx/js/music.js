////////////////////////////////// start : youtube API

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 플레이어 API 코드가 다운로드되는 즉시 실행
// 전역변수 player
var player;
function onYouTubeIframeAPIReady() {
  // 유튜브 동영상 아이디
  let youtube_id = '';
  player = new YT.Player('player', {
    height: '300',
    width: '400',
    videoId: currentSong,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    plyerVars: {
      width: 40,
      heigth: 30,
      rel: 0,
      autoplay: 0,
      showinfo: 1,
      loop: 1,
    }
  });
}

// 동영상 플레이어가 준비되면 재생을 시작해야 함
// 자동 재생 해제
function onPlayerReady(event) {
  // event.target.playVideo();
}

// 플레이어 상태 변경 시 (일시정지 등)
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

////////////////////////////////// end : youtube API



////////////////////////////////// start : musicForm

// plus 버튼 관련
const musicAddBtn = document.querySelector('.player .plus-btn');
const addImg = document.querySelector('.plus-btn img');
const playlistHeading = document.querySelector('.player h1');
const closeBtn = document.querySelector('.musicForm-close');
// musicForm 관련
const musicForm = document.querySelector('.musicForm');
const linkInput = document.querySelector('.musicForm input');

// Musics local storage key
const PLAYLIST_KEY = 'playlist'
const CURRENTSONG_KEY = 'currentSong'

// Music obj
let playlists = [];
// 현재 재생중인 노래 id 저장
let currentSong = JSON.parse(localStorage.getItem(CURRENTSONG_KEY))
if (playlists.length < 1) {
  currentSong = '';
  saveCurrentSong()
}
// 현재 재생중인 노래 인덱스 저장
let nowPlaying = playlists.findIndex( element => element.youtube_id === currentSong);
// 재생 상태
var pause = false;

function saveCurrentSong(params) {
  localStorage.setItem(CURRENTSONG_KEY, JSON.stringify(currentSong))
}
function savePlaylist(params) {
  localStorage.setItem(PLAYLIST_KEY, JSON.stringify(playlists))
}

// 음악 클릭 시 재생
function onMusicClick(event) {
  // 삭제 버튼 클릭된 경우에는 함수 작동 방지
  // 음악 이름이나 사진이 클릭되었을 경우
  if (event.target.tagName !== "IMG") {
    if (event.target !== event.currentTarget) {
      const youtube_id = event.target.parentNode.id
      currentSong = youtube_id
      showCurrentSong()
      saveCurrentSong();
      nowPlaying = playlists.findIndex( element => element.youtube_id === currentSong)
      player.loadVideoById(playlists[nowPlaying].youtube_id)
      handlePauseBtnClick();
    }
    // id를 가진 a-music이 선택되는 경우
    else {
        const youtube_id = event.target.id;
        currentSong = youtube_id;
        showCurrentSong();
        saveCurrentSong();
        nowPlaying = playlists.findIndex( element => element.youtube_id === currentSong);
        player.loadVideoById(playlists[nowPlaying].youtube_id);
        handlePauseBtnClick();
      }
    }
  } 

// 음악 삭제
function deleteMusic(event) {
  const theMusic = event.target.parentNode.parentNode
  theMusic.remove()
  playlists = playlists.filter((element) => element.youtube_id !== theMusic.id)
  savePlaylist()
  // 새롭게 현재 재생중인 음악 저장
  if (playlists.length > 0) {
    currentSong = playlists[nowPlaying].youtube_id
  } else {
    currentSong = '';
  }
  saveCurrentSong()
  showCurrentSong()
  player.loadVideoById(playlists[nowPlaying].youtube_id)
}

// 플레이리스트 보이기
function showPlaylist(newMusic) {
  // <div class="a-music">
  //       <img>
  //       <span>Title</span>
  //       
  // </div>
  const playlist = document.querySelector('.playlist .music-wrap')
  const outerDiv = document.createElement('div')
  const titleSpan = document.createElement('span')
  const imgDiv = document.createElement('div')
  // const img = new Image;
  // img.src = newMusic.thumb
  titleSpan.innerText = newMusic.title
  imgDiv.style.backgroundImage = `url(${newMusic.thumb})`;
  outerDiv.appendChild(imgDiv)
  outerDiv.appendChild(titleSpan)
  outerDiv.classList.add('a-music')
  outerDiv.id = newMusic.youtube_id
  
  // delete 버튼
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('deleteBtn')
  // deleteBtn.classList.add('hidden')
  const deleteImg = document.createElement('img')
  deleteImg.src = './img/icon/plus2.png'
  deleteBtn.appendChild(deleteImg)
  outerDiv.appendChild(deleteBtn)
  // delete 버튼 이벤트 추가
  deleteBtn.addEventListener('click', deleteMusic)
  
  // 현재 재생 중인 노래라면 클래스 추가
  if (newMusic.youtube_id === currentSong) {
    outerDiv.classList.add('playing')
  }
  playlist.appendChild(outerDiv)
  // 생성된 음악에 이벤트리스너 추가
  outerDiv.addEventListener('click', onMusicClick)
}

// 현재 재생 중인 노래에 클래스 추가, 아니라면 제거
function showCurrentSong() {
  const allMusic = document.querySelectorAll('.a-music')
  allMusic.forEach(function (element) {
    if (element.id !== currentSong) {
      element.classList.remove('playing')
    } else {
        element.classList.add('playing')
    }
  })
}

const noEmbed = 'https://noembed.com/embed?url=';
const urlForm = "https://www.youtube.com/watch?v=";

// musicForm 제출
function onMusicFormSubmit(event) {
  event.preventDefault();
  var url = linkInput.value;

  // 유튜브 URL에서 영상 id 정규식
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var matchs = url.match(regExp);
  var youtube_id = matchs[7]
  var musicObj

  // 영상의 제목 얻기
  const fetch_url = noEmbed + urlForm + youtube_id;
  fetch(fetch_url)
  .then(res => res.json())
  .then(data => {
    const {thumbnail_url, title} = data;
    musicObj = {
      title: title,
      thumb: thumbnail_url,
      url: url,
      youtube_id: youtube_id,
    };
    playlists.push(musicObj);
    savePlaylist();
    onCloselick();
    showPlaylist(musicObj);
  })

}

// url 추가 버튼 누르면 musicForm 보이기
function onAddClick(event) {
  musicAddBtn.classList.add('plus-form');
  musicForm.classList.remove('hidden');
  addImg.classList.add('hidden');
  playlistHeading.classList.add('hidden');
  closeBtn.classList.remove('hidden');
  musicAddBtn.removeEventListener('click', onAddClick);
}

// musicForm 닫기
function onCloselick(event) {
  musicAddBtn.classList.remove('plus-form');
  musicForm.classList.add('hidden');
  addImg.classList.remove('hidden');
  playlistHeading.classList.remove('hidden');
  closeBtn.classList.add('hidden');
  musicAddBtn.addEventListener('click', onAddClick);
}

const savedPlaylists = localStorage.getItem(PLAYLIST_KEY) 

if (savedPlaylists != null) {
  const parsedPlaylists = JSON.parse(savedPlaylists)
  playlists = parsedPlaylists
  parsedPlaylists.forEach(showPlaylist)
}

// musicForm 열기 
musicAddBtn.addEventListener('click', onAddClick);
// musicForm 닫기
closeBtn.addEventListener('click', onCloselick);

// musicForm 제출
musicForm.addEventListener('submit', onMusicFormSubmit);

////////////////////////////////// end : musicForm







////////////////////////////////// start : player

function onPlayerStateChange(event) {
  if(event.data == YT.PlayerState.ENDED) {
      handleNextBtnClick();
      event.target.playVideo();
  }
}

function handlePauseBtnClick() {
  if(pause === false) {
      player.playVideo();
      pause = true;
      pauseButton.src = "./img/icon/pause.png"
  } else {
      player.pauseVideo();
      pause = false;
      pauseButton.src = "./img/icon/play.png";
  }
}

function handleNextBtnClick() {
  if(nowPlaying >= playlists.length-1) {
    nowPlaying = 0;
  } else {
    nowPlaying++;
  }
  currentSong = playlists[nowPlaying].youtube_id
  showCurrentSong()
  saveCurrentSong()
  player.loadVideoById(playlists[nowPlaying].youtube_id)
}

function handleBeforeBtnClick() {
  if(nowPlaying <= 0) {
    nowPlaying = playlists.length-1;
  } else {
    nowPlaying--;
  }
  currentSong = playlists[nowPlaying].youtube_id
  showCurrentSong()
  saveCurrentSong()
  player.loadVideoById(playlists[nowPlaying].youtube_id)
}

function handleStopBtnClick() {
  player.stopVideo();
}

const beforeButton = document.querySelector(".back")
const pauseButton = document.querySelector(".pause")
const nextButton = document.querySelector(".next")

beforeButton.addEventListener("click", handleBeforeBtnClick)
pauseButton.addEventListener("click", handlePauseBtnClick)
nextButton.addEventListener("click", handleNextBtnClick)

////////////////////////////////// end : player