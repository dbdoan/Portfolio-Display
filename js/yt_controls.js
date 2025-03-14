var yt_players = {};

let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let isYouTubeReady = false;

function onYouTubeIframeAPIReady() {
    let playerElement = document.getElementById("youtube-video");
    if (playerElement) {
        yt_players["youtube-video"] = new YT.Player("youtube-video", {
            events: {
                onReady: function (event) {
                    isYouTubeReady = true;
                    yt_players["youtube-video"].setVolume(30);
                }
            }
        });
    }
}

function pauseYouTubeVideo() {
    if (!isYouTubeReady || !yt_players["youtube-video"]) {
        return;
    }

    if (yt_players["youtube-video"].pauseVideo) {
        yt_players["youtube-video"].pauseVideo();
    }
}