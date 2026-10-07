# Jev CrowdPilot

A Twitch overlay that compares viewer votes with a finite Jev decision. The stream supplies legal actions and optional code-simulated outcomes; chat votes; Jev chooses; the overlay reveals agreement or a split decision.

```bash
npm test
npm run demo
```

The offline demo at `http://127.0.0.1:8800` uses synthetic votes and sends no request. `extension/overlay.html` is the Twitch Extension surface and loads Twitch's official Extension Helper.

The extension never executes a game action. The broadcaster owns execution, the host must re-check the revision, and fabricated votes/actions are ignored or rejected. A production Extension Backend Service must verify Twitch JWTs, authenticate PubSub messages, rate-limit votes and keep `TYPESAFE_API_KEY` server-side.

Independent experimental community project. Not affiliated with Twitch or TypeSafe. MIT licensed.
