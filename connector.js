(function () {
  "use strict";

  const PLAYER_ID = "best-streaming-song";
  const PLAYER_NAME = "Music of the Month";

  const CONTROLLER_URL =
    "https://cdn.jsdelivr.net/gh/kulzzy/KULZZY-UNIVERSAL-MEDIA-CONTROL@main/controller.js";

  window.KULZZY_MEDIA_PLAYER_CONFIG = {
    playerId: PLAYER_ID,
    playerName: PLAYER_NAME,
    mediaSelector: "audio,video",

    stop: function (detail) {
      if (typeof window.KULZZY_STOP_PLAYER === "function") {
        window.KULZZY_STOP_PLAYER(detail);
      }

      document.querySelectorAll("audio,video").forEach(function (media) {
        try {
          media.pause();
        } catch (error) {}
      });
    }
  };

  function connectPlayer() {
    if (window.KULZZY_UNIVERSAL_MEDIA_CONTROL) return;
    if (document.getElementById("kulzzy-universal-controller")) return;

    const script = document.createElement("script");
    script.id = "kulzzy-universal-controller";
    script.src = CONTROLLER_URL;
    script.async = true;

    script.onerror = function () {
      console.error("Kulzzy controller failed to load.");
    };

    document.head.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", connectPlayer, {
      once: true
    });
  } else {
    connectPlayer();
  }
})();
