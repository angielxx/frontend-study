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
        title: '17171771',
        musician: '자우림',
        id: 'j_zEg4pifDU',
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
        title: '비밀번호 486',
        musician: '윤하',
        id: 'RNqXM7T7f_A',
    },
    {
        title: '가시',
        musician: '버즈',
        id: 'AoVt7Qe9t1s',
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
            'onStateChange': onPlayerStateChange
        },
    });
}

function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.ENDED) {
        handleNextBtnClick();
        event.target.playVideo();
    }
}

var pause = false;
function handlePauseBtnClick() {
    console.log("PAUSE Button")
    title.innerText = `${musicID[nowPlaying].title} - ${musicID[nowPlaying].musician}`;
    if(pause === false) {
        player.playVideo();
        pause = true;
        pauseButton.innerHTML = '<img src="./img/player/playBTN.png" alt="play">';
    } else {
        player.pauseVideo();
        pause = false;
        pauseButton.innerHTML = '<img src="./img/player/pauseBTN.png" alt="pause">';
    }
}

let nowPlaying = 0;
function handleNextBtnClick() {
    console.log("NEXT Button");
    if(nowPlaying >= musicID.length-1) {
        nowPlaying = 0;
    } else {
        nowPlaying++;
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
    title.innerText = `${musicID[nowPlaying].title} - ${musicID[nowPlaying].musician}`;
    player.loadVideoById(musicID[nowPlaying].id)
}

function handleStopBtnClick() {
    pause = false;
    pauseButton.innerHTML = '<img src="./img/player/playBTN.png" alt="play">';
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