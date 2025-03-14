let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player = null; 
let isYouTubeReady = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("youtube-video", {
        events: {
            onReady: function () {
                console.log("✅ YouTube Player Ready");
                isYouTubeReady = true;
            },
            onStateChange: function (event) {
                console.log("🎥 YouTube State Changed:", event.data);
            }
        }
    });
}

function pauseYouTubeVideo() {
    if (!isYouTubeReady || !player) {
        console.warn("⚠️ YouTube Player is not initialized yet. Skipping pause.");
        return;
    }

    if (player.pauseVideo) {
        player.pauseVideo();
        console.log("✅ YouTube video paused");
    }
}