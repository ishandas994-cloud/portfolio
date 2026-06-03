import * as THREE from 'three'

export function initGalaxy() {

  // ═══════════════════════════════════════
  // SETUP
  // ═══════════════════════════════════════
  const canvas = document.getElementById('galaxy-canvas')
  if (!canvas) return

  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha:     true,
    antialias: true,
  })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  camera.position.z = 3
  // ═══════════════════════════════════════
  // GALAXY PARAMETERS
  // ═══════════════════════════════════════
  const params = {
    count:        8000,
    size:         0.012,
    radius:       5,
    branches:     3,
    spin:         1,
    randomness:   0.3,
    power:        3,
    insideColor:  '#00fff2',
    outsideColor: '#bf00ff',
  }

  let geometry = null
  let material = null
  let points   = null
