function playUserMedia(){
    const video = document.getElementById("video");
    var vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;
    navigator.getMedia({
        video: true,
        audio: false
    },
    function(stream) {
        video.srcObject = stream;
        console.log(stream)
    },
    function(error){

    });
}

function init() {
    const playButton = document.querySelector("#play-button");
    playButton.addEventListener("click", playUserMedia);
}

document.addEventListener("DOMContentLoaded", init)