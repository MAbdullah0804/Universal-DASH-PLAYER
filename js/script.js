function detectType(url) {
      if (url.includes(".mpd")) return "application/dash+xml";
      if (url.includes(".m3u8")) return "application/x-mpegURL";
      return "video/mp4"; // fallback type
    }

    function loadVideo() {
      const url = document.getElementById("streamURL").value;
      const player = videojs("videoPlayer");

      player.src({
        src: url,
        type: detectType(url)
      });

      player.play();
    }
    function loadLocalVideo() {
    const input = document.getElementById("streamFile");

    if (input.files.length === 0) {
        alert("Please select a video file first.");
        return;
    }

    const file = input.files[0];
    const fileURL = URL.createObjectURL(file); // Generate temporary browser URL

    const player = videojs("videoPlayer");

    player.src({
        src: fileURL,
        type: file.type || "video/mp4" // Use file's MIME type
    });

    player.play();
}
