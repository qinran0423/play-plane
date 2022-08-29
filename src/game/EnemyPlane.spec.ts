import { expect, it, describe, vi } from "vitest"
import { EnemyPlane, initEnemeyPlanes, runEnemyPlanes } from "./EnemyPlane"

describe("EnemyPlane", () => {
  it("move", () => {
    const enemy = new EnemyPlane()
    enemy.y = 0
    enemy.speed = 1
    enemy.move()

    expect(enemy.y).toBe(1)
  })

  it("2s创建一个敌军", () => {
    vi.useFakeTimers()
    const enemyPlanes = []
    initEnemeyPlanes(enemyPlanes)

    // 2000 创建一个
    vi.advanceTimersByTime(4000)
    expect(enemyPlanes.length).toBe(2)
    vi.resetAllMocks()
  })

  it("让所有的敌军都移动", () => {
    const enemy = new EnemyPlane()
    enemy.y = 1
    enemy.speed = 1
    const enemyPlanes = [enemy]
    runEnemyPlanes(enemyPlanes)

    expect(enemy.y).toBe(2)
  })
})
