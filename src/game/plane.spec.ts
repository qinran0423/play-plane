import { expect, it, describe } from "vitest"
import { setupPlane } from "./plane"

describe("Plane", () => {
  describe("move", () => {
    it("moveDown", () => {
      const plane = setupPlane({})

      plane.moveDown()

      expect(plane.y).toBe(1)
    })
  })
})
