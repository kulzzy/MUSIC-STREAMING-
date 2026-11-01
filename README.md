# KULZZY RADIO — BEST STREAMING SONG OF THE MONTH
Tagline: **Your music. Your moment. Your stage.**

## Files
- `index.html`: public song list, rankings, dates, winner.
- `admin.html`: admin login, song and photo management, dates, official winner.
- `player.html`: separate listening page that opens in a new browser tab.
- `firebase-rules.json`: rules to paste into Firebase Realtime Database.

## Upload to GitHub
Upload all four files to the root of `kulzzy/MUSIC-STREAMING-` on the `main` branch. Then open Settings → Pages, choose Deploy from a branch, select `main` and `/(root)`, and save.

Public page: https://kulzzy.github.io/MUSIC-STREAMING-/
Admin page: https://kulzzy.github.io/MUSIC-STREAMING-/admin.html

## Firebase setup
1. Authentication → Sign-in method: enable Email/Password and Anonymous.
2. Authentication → Users: confirm `dstnewz.ng@gmail.com` has UID `ghCxTlIe3oV3Ft9qAFwXtiywDin2`.
3. Realtime Database → Rules: review and paste `firebase-rules.json`, then Publish.

## Important limitations
- Admin photo upload compresses a photo and stores it in Realtime Database. Keep photos small; this is not a replacement for a dedicated media storage service for large libraries.
- Songs are added using a public audio URL or a Google Drive *file* share link (not a folder link). The file must be shared as Anyone with the link — Viewer.
- The browser timer records a vote after 60 seconds of unpaused playback, but a client-side timer cannot prove genuine listening or prevent all fake streams. Do not use this for paid voting or fraud-proof official results without a trusted backend endpoint.
- Rules permit one vote record per authenticated UID, song and month. Anonymous authentication may issue a new UID if browser storage is cleared or a different browser/device is used.
