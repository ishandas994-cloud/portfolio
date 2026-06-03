import * as THREE from 'three'

export function initShapes() {

  // ═══════════════════════════════════════
  // SETUP
  // ═══════════════════════════════════════
  const canvas = document.getElementById('shapes-canvas')
  if (!canvas) return

  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  )
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha:     true,
    antialias: true,
  })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  camera.position.z = 5

  // ═══════════════════════════════════════
  // MATERIALS
  // ═══════════════════════════════════════
  const matNeon = new THREE.MeshBasicMaterial({
    color:       0x00fff2,
    wireframe:   true,
    transparent: true,
    opacity:     0.35,
  })

  const matNeon2 = new THREE.MeshBasicMaterial({
    color:       0xbf00ff,
    wireframe:   true,
    transparent: true,
    opacity:     0.3,
  })

  const matNeon3 = new THREE.MeshBasicMaterial({
    color:       0xff00aa,
    wireframe:   true,
    transparent: true,
    opacity:     0.3,
  })