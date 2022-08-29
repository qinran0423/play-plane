export class EnemyPlane {
  public y: number = 0
  public x: number = 0
  public speed: number = 5
  constructor() {}

  move() {
    this.y += this.speed
  }
}

export function initEnemeyPlanes(enemyPlanes: EnemyPlane[]) {
  const enemy = new EnemyPlane()
  enemyPlanes.push(enemy)
}

export function runEnemyPlanes(enemyPlanes: EnemyPlane[]) {
  enemyPlanes.forEach((enemy) => {
    enemy.move()
  })
}
