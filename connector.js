/* KULZZY RADIO — MUSIC OF THE MONTH CONNECTOR */

(function () {
  "use strict";

  const PLAYER_ID = "best-streaming-song";
  const PLAYER_NAME = "Music of the Month";

  const CONTROLLER_URL =
    "https://raw.githubusercontent.com/kulzzy/KULZZY-UNIVERSAL-MEDIA-CONTROL/main/controller.js?v=3.3";

  window.KULZZY_MEDIA_PLAYER_CONFIG = {
    playerId: PLAYER_ID,
    playerName: PLAYER_NAME,

    stop: function (detail) {
      if (typeof window.KULZZY_STOP_PLAYER === "function") {
        window.KULZZY_STOP_PLAYER(detail);
        return;
      }

      document.querySelectorAll("audio, video").forEach(function (media) {
        media.pause();
      });
    }
  };

  function connectPlayer() {
    if (window.KULZZY_UNIVERSAL_MEDIA_CONTROL) return;

    const script = document.createElement("script");
    script.src = CONTROLLER_URL;
    script.async = true;

    script.onload = function () {
      console.log("[Kulzzy Music] Controller loaded:", PLAYER_NAME);
    };

    script.onerror = function () {
      console.error("[Kulzzy Music] Controller failed to load.");
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
