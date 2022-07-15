# Expo Skia Demo

> [Web Demo](https://expo-skia.netlify.app/)

1. `yarn` -- install packages
2. Run `node copy-canvaskit-wasm.js web` -- copy public file (this may be upstreamed).
3. `expo start --web` -- start

### Production

> Expo Webpack

1. `npx expo export:web` or `expo build:web` (global expo-cli)
2. `npx serve web-build`
3. [Publish and share](https://docs.expo.dev/distribution/publishing-websites/).

#### Metro Web

> Experimental Expo Metro (SDK 46)

1. Set `expo.web.bundler: "metro"` in the `app.json`
2. Run `node copy-canvaskit-wasm.js public` -- copy public file to `public` (this may be upstreamed).
3. Start `npx expo start --web`
