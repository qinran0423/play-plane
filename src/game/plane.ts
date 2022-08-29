import { Bullet } from "./Bullet"

export interface Plane {
  bullets: Bullet[]
  run()
  attack()
  x: number
  y: number
  moveDown: () => void
  moveUp: () => void
  moveLeft: () => void
  moveRight: () => void
}

const defaultOptions = {
  x: 0,
  y: 300,
  speed: 5
}

export function setupPlane(plane, bullets: Bullet[] = [], options?): Plane {
  plane.bullets = bullets

  Object.assign(plane, defaultOptions, options)

  initMove(plane)
  initRun(plane, bullets)
  initAttack(plane, bullets)

  return plane
}

function initMove(plane) {
  plane.moveDown = function () {
    plane.y += plane.speed
  }

  plane.moveUp = function () {
    plane.y -= plane.speed
  }

  plane.moveLeft = function () {
    plane.x -= plane.speed
  }

  plane.moveRight = function () {
    plane.x += plane.speed
  }
}

function initRun(plane, bullets) {
  plane.run = function () {
    bullets.forEach((bullet) => {
      bullet.move()
    })
  }
}

function initAttack(plane, bullets) {
  plane.attack = function () {
    const bullet = new Bullet()
    bullet.x = plane.x + 25
    bullet.y = plane.y
    bullet.border = 0
    bullet.onDestory = () => {
      const index = bullets.indexOf(bullet)
      bullets.splice(index, 1)
    }
    bullets.push(bullet)
  }
}
