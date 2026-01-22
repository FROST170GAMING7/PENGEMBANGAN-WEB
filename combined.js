// contains code from idex video.js: Ensures only one video plays at a time
(function () {
    // Ambil elemen video utama
    const videoPlayer = document.querySelector(".video-player");

    // Ambil semua tombol pemilih video
    const buttons = document.querySelectorAll(".button-card button");

    // Ambil semua media di halaman (video + audio)
    const allMedia = document.querySelectorAll("video, audio");

    // Fungsi untuk menghentikan semua media lain
    function stopAllMedia(except = null) {
        allMedia.forEach(media => {
            if (media !== except) {
                media.pause();
                media.currentTime = 0;
            }
        });
    }

    // Event klik tombol
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const url = button.getAttribute("data-url");

            // Hentikan semua media sebelum memutar video baru
            stopAllMedia(videoPlayer);

            // Ganti sumber video
            videoPlayer.src = url;

            // Putar video
            videoPlayer.play();
        });
    });

    // Saat video utama diputar, hentikan media lain
    videoPlayer.addEventListener("play", () => {
        stopAllMedia(videoPlayer);
    });
})();

// audio pause logic from script.js: Ensures only one audio plays at a time
(function () {
    // Ambil semua elemen audio
    const audios = document.querySelectorAll("audio");

    // Fungsi untuk menghentikan semua audio kecuali yang sedang diputar
    function stopOtherAudios(except = null) {
        audios.forEach(audio => {
            if (audio !== except) {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    }

    // Saat salah satu audio diputar, hentikan audio lain
    audios.forEach(audio => {
        audio.addEventListener("play", () => {
            stopOtherAudios(audio);
        });
    });
})();

// video pause 
(function () {
    // Ambil semua video dengan class "instance"
    const videos = document.querySelectorAll(".instance");

    // Fungsi untuk menghentikan semua video kecuali yang sedang diputar
    function stopOtherVideos(except = null) {
        videos.forEach(video => {
            if (video !== except) {
                video.pause();
                video.currentTime = 0;
            }
        });
    }

    // Saat salah satu video diputar, hentikan video lainyoutube
    videos.forEach(video => {
        video.addEventListener("play", () => {
            stopOtherVideos(video);
        });
    });
})();

//Verify
function verify() {
    var pass = document.getElementById("passInput").value;
    var target = "https://www.youtube.com/"; // Link yang ingin dibuka
    
    if (pass === "RAHASIA") {
        window.location.href = target;
    } else {
        alert("Password salah!");
    }
}


