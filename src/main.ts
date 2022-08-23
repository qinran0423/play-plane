import App from "./App.vue"
import { createApp } from "./runtime-canvas/index"
import { game } from "./game"

createApp(App).mount(game.stage)
