export class EnemyPlane {
  public y: number = 0
  public x: number = 0
  public speed: number = 1
  public width: number = 0
  public height: number = 0
  constructor() {}

  move() {
    this.y += this.speed
  }
}

export function initEnemeyPlanes(enemyPlanes: EnemyPlane[]) {
  setInterval(() => {
    const enemy = new EnemyPlane()
    enemyPlanes.push(enemy)
  }, 2000)
}

export function runEnemyPlanes(enemyPlanes: EnemyPlane[]) {
  enemyPlanes.forEach((enemy) => {
    enemy.move()
  })
}
