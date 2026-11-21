/* KULZZY RADIO — MUSIC OF THE MONTH CONNECTOR */

(function () {
  "use strict";

  const PLAYER_ID = "best-streaming-song";
  const PLAYER_NAME = "Music of the Month";

  const CONTROLLER_URL =
    "https://raw.githubusercontent.com/kulzzy/KULZZY-UNIVERSAL-MEDIA-CONTROL/main/controller.js";

  let controllerLoading = false;

  /* PLAYER CONNECTION SETTINGS */

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

  /* LOAD CENTRAL CONTROLLER */

  function connectPlayer() {
    if (controllerLoading) return;

    if (window.KULZZY_UNIVERSAL_MEDIA_CONTROL) return;

    controllerLoading = true;

    const script = document.createElement("script");

    script.src = CONTROLLER_URL;
    script.async = true;

    script.onload = function () {
      console.log(
        "Kulzzy Universal Media Controller connected:",
        PLAYER_NAME
      );
    };

    script.onerror = function () {
      controllerLoading = false;

      console.error(
        "Could not connect Music of the Month to the Kulzzy Universal Media Controller."
      );
    };

    document.head.appendChild(script);
  }

  /* WAIT FOR THE PLAYER PAGE TO INITIALIZE */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", connectPlayer, {
      once: true
    });
  } else {
    connectPlayer();
  }

})();
