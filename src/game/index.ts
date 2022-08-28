import { Application } from "pixi.js"
import { Plane, setupPlane } from "./plane"

export * from "./plane"

export const game = new Application({
  width: 500,
  height: 500
})

document.body.append(game.view)

export function initGame(_plane, bullets) {
  const plane = setupPlane(_plane, bullets)

  mianTicker(plane)

  return {
    plane,
    bullets
  }
}

function mianTicker(plane: Plane) {
  game.ticker.add(() => {
    plane.run()
  })
}
