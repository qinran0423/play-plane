import { it, describe, expect, vi } from "vitest"
import Bullet from "./Bullet"

describe("Bullet", () => {
  it("move", () => {
    const bullet = new Bullet()
    bullet.y = 1
    bullet.speed = 1

    bullet.move()

    expect(bullet.y).toBe(0)
  })

  it("超过边界的时候应该会回调 onDestroy", () => {
    const bullet = new Bullet()
    bullet.y = 1
    bullet.x = 0
    bullet.speed = 1
    bullet.border = 0
    bullet.onDestory = vi.fn()
    bullet.move()
    expect(bullet.onDestory).toBeCalled()
  })
})
