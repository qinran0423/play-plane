import { expect, it, describe } from "vitest"
import { EnemyPlane, initEnemeyPlanes, runEnemyPlanes } from "./EnemyPlane"

describe("EnemyPlane", () => {
  it("move", () => {
    const enemy = new EnemyPlane()
    enemy.y = 0
    enemy.speed = 1
    enemy.move()

    expect(enemy.y).toBe(1)
  })

  it("创建一个敌军", () => {
    const enemyPlanes = []
    initEnemeyPlanes(enemyPlanes)

    expect(enemyPlanes.length).toBe(1)
  })

  it("让所有的敌军都移动", () => {
    const enemy = new EnemyPlane()
    enemy.y = 1
    const enemyPlanes = [enemy]
    runEnemyPlanes(enemyPlanes)

    expect(enemy.y).toBe(2)
  })
})
