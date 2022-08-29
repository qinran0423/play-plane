import { expect, it, describe } from "vitest"
import { Bullet } from "./Bullet"
import { setupPlane } from "./plane"

describe("Plane", () => {
  describe("move", () => {
    const defaultOptions = {
      speed: 1,
      x: 0,
      y: 0
    }

    function createPlane() {
      return setupPlane({}, [], { ...defaultOptions })
    }

    it("moveDown", () => {
      const plane = createPlane()

      plane.moveDown()

      expect(plane.y).toBe(1)
    })

    it("moveUp", () => {
      const plane = createPlane()

      plane.moveUp()

      expect(plane.y).toBe(-1)
    })

    it("moveLeft", () => {
      const plane = createPlane()
      plane.moveLeft()

      expect(plane.x).toBe(-1)
    })

    it("moveRight", () => {
      const plane = createPlane()
      plane.moveRight()
      expect(plane.x).toBe(1)
    })
  })
})

describe("攻击", () => {
  it("attack", () => {
    const bullets = []
    const plane = setupPlane({}, bullets)
    plane.attack()

    expect(bullets.length).toBe(1)
  })
})

describe("run", () => {
  it("移动所有的子弹", () => {
    const bullet = new Bullet()
    bullet.y = 0
    const plane = setupPlane({}, [bullet])

    plane.run()

    expect(bullet.y).not.toBe(0)
  })

  it("子弹超过边界后，被移除", () => {
    const bullets = []
    const plane = setupPlane({}, bullets, { x: 0, y: 0 })

    plane.attack()
    plane.run()

    expect(bullets.length).toBe(0)
  })
})
