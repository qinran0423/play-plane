import { Container, Text, Sprite, Texture } from "pixi.js"

import { createRenderer } from "vue"
const renderer = createRenderer<Container, Container>({
  createElement(type) {
    let elemet
    switch (type) {
      case "Container":
        elemet = new Container()
        break
      case "Sprite":
        elemet = new Sprite()
        break
      default:
        throw new Error(`type 不存在 ${type}`)
        break
    }

    return elemet
  },
  patchProp(el, key, preValue, nextValue) {
    switch (key) {
      case "texture":
        ;(el as Sprite).texture = Texture.from(nextValue)
        break

      default:
        el[key] = nextValue
        break
    }
  },
  insert(el, parent) {
    if (el && parent) {
      parent.addChild(el)
    }
  },
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el)
    }
  },
  createText(text) {
    return new Text(text)
  },
  createComment(text) {
    return new Text(text)
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent
  },
  nextSibling(node) {
    return null
  }
})

export function createApp(rootComponent: any) {
  return renderer.createApp(rootComponent)
}
