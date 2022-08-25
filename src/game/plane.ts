export interface Plane {
  x: number
  y: number
  moveDown: () => void
}

export function setupPlane(plane: any): Plane {
  plane.x = 0
  plane.y = 0
  plane.moveDown = function () {
    plane.y += 1
  }

  return plane
}
