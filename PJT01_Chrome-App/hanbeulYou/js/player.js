var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let musicID = [
    {
        title: '밤하늘의 별을...',
        musician: '양정승',
        id: 'zgvI5Jqph08',
    },
    {
        title: 'Y',
        musician: '프리스타일',
        id: 'dYIT_jeUBKg',
    },
    {
        title: '응급실',
        musician: 'izi',
        id: 'E-BvyQb7mWE',
    },
    {
        title: '사랑의 바보',
        musician: '더 넛츠',
        id: 'bJxcFpSVZQY',
    },
    {
        title: '몽환의 숲',
        musician: '키네틱플로우',
        id: '2uyHtg56yTY',
    },
    {
        title: '벌써 일년',
        musician: '브라운아이즈',
        id: '-sVo6NWwK_o',
    },
    {
        title: '거리에서',
        musician: '성시경',
        id: 'RUd6LLIr-Wg',
    },
    {
        title: '기다리다',
        musician: '윤하',
        id: 'iB3VDOQPvi0',
    },
    {
        title: '비밀번호 486',
        musician: '윤하',
        id: 'RNqXM7T7f_A'
    },
    {
        title: '가시',
        musician: '버즈',
        id: 'AoVt7Qe9t1s',
    },
    {
        title: '미친 사랑의 노래',
        musician: '씨야',
        id: '_MythyZ0w3s',
    },
    {
        title: '술 한잔 해요',
        musician: '지아',
        id: 'j2t_VmzuZSc',
    },
]

// 리스트 셔플
function shuffleList(array) {
    array.sort(() => Math.random() - 0.5);
}
// 셔플된 음악리스트
// const randomMusic = musicID[Math.floor(Math.random()*musicID.length)]
shuffleList(musicID);
const title = document.querySelector(".player__title")

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '200',
        width: '400',
        videoId: musicID[0].id,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        },
    });
}

// 노래가 끝나면 다음곡 자동 재생
function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.ENDED) {
        handleNextBtnClick();
        event.target.playVideo();
    }
}

// 재생/일시정지 버튼
function pauseToPlay() {
    player.playVideo();
    pause = false;
    pauseButton.innerHTML = '<img src="./img/player/pauseBTN.png" alt="play" style="width:100%; height:100%;">';
}

function playToPause() {
    player.pauseVideo();
    pause = true;
    pauseButton.innerHTML = '<img src="./img/player/playBTN.png" alt="pause" style="width:100%; height:100%;">';
}

var pause = true;
function handlePauseBtnClick() {
    console.log("PAUSE Button")
    title.innerText = `${musicID[nowPlaying].title} - ${musicID[nowPlaying].musician}`;
    if(pause === true) {
        pauseToPlay();
    } else {
        playToPause();
    }
}

// 이전/다음 버튼
let nowPlaying = 0;
function handleNextBtnClick() {
    console.log("NEXT Button");
    if(nowPlaying >= musicID.length-1) {
        nowPlaying = 0;
    } else {
        nowPlaying++;
    }
    if(pause === true) {
        pauseToPlay();
    }
    title.innerText = `${musicID[nowPlaying].title} - ${musicID[nowPlaying].musician}`;
    player.loadVideoById(musicID[nowPlaying].id)
}

function handleBeforeBtnClick() {
    console.log("BEFORE Button");
    if(nowPlaying <= 0) {
        nowPlaying = musicID.length-1;
    } else {
        nowPlaying--;
    }
    if(pause === true) {
        pauseToPlay();
    }
    title.innerText = `${musicID[nowPlaying].title} - ${musicID[nowPlaying].musician}`;
    player.loadVideoById(musicID[nowPlaying].id)
}

// 중지 버튼
function handleStopBtnClick() {
    playToPause()
    title.innerText = '';
    console.log("STOP Button");
    player.stopVideo();
}

const beforeButton = document.querySelector("#before");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");
const nextButton = document.querySelector("#next");

beforeButton.addEventListener("click", handleBeforeBtnClick);
pauseButton.addEventListener("click", handlePauseBtnClick);
stopButton.addEventListener("click", handleStopBtnClick);
nextButton.addEventListener("click", handleNextBtnClick);

// 볼륨 조절 slider
const volumeSlider = document.getElementById("volumeRange");
volumeSlider.addEventListener("input", handleSliderInput);

function onPlayerReady(event){
    player.setVolume(50);
}

function handleSliderInput() {
    player.setVolume(volumeSlider.value);
    console.log(player.getVolume())
}

// 본문 우측 상단에 bgm list 띄워주기
const bgmContent = document.querySelector(".bgm__content");
musicID.forEach(postBGM);

function postBGM(nowMusic) {
    // console.log(nowMusic);
    const musicList = document.createElement("li");
    const musicSpan = document.createElement("span");
    musicList.appendChild(musicSpan);
    musicSpan.innerText = nowMusic.title;
    musicList.style.width = "105px";
    musicList.style.margin = "3px";
    bgmContent.appendChild(musicList);
    musicSpan.style.cursor = "pointer";
    musicSpan.addEventListener("click", handleTitleClick);
}

// bgm list에서 title 클릭시 해당 곡 재생
function handleTitleClick(event){
    const findMusicIdx = musicID.findIndex((item) => item.title === event.target.parentElement.innerText);
    console.log(event.target.parentElement.innerText);
    console.log(findMusicIdx);

    nowPlaying = findMusicIdx;
    if(pause === true) {
        pauseToPlay();
    }
    title.innerText = `${musicID[nowPlaying].title} - ${musicID[nowPlaying].musician}`;
    player.loadVideoById(musicID[nowPlaying].id)
}
