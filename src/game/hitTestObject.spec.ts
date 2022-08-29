import { describe, it, expect } from "vitest"
import { hitTestObject } from "./hitTestObject"

describe("hitTestObject", () => {
  it("两个矩形相交， 应该返回true", () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100
    }

    const rectB = {
      x: 50,
      y: 50,
      width: 100,
      height: 100
    }

    const r = hitTestObject(rectA, rectB)

    expect(r).toBe(true)
  })

  it("两个矩形不相交,应该返回false", () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 100,
      height: 100
    }

    const rectB = {
      x: 150,
      y: 150,
      width: 100,
      height: 100
    }

    const r = hitTestObject(rectA, rectB)

    expect(r).toBe(false)
  })
})
