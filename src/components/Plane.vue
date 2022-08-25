<template>
  <Container :x="data.x" :y="data.y"
    ><Sprite :texture="planeImg"></Sprite
  ></Container>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import planeImg from "../assets/plane.png"
import { setupPlane } from "../game/plane"

const data = reactive({})

setupPlane(data)

window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowDown":
      data.moveDown()
      break

    default:
      break
  }
})
</script>

<style scoped></style>
