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
  // ═══════════════════════════════════════
  // SHAPE 1 — Icosahedron (left side)
  // ═══════════════════════════════════════
  const icosahedron = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.2, 0),
    matNeon
  )
  icosahedron.position.set(-3.5, 0.5, -2)
  scene.add(icosahedron)
 // ═══════════════════════════════════════
  // SHAPE 2 — Torus (right side)
  // ═══════════════════════════════════════
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.9, 0.25, 8, 30),
    matNeon2
  )
  torus.position.set(3.5, 1, -1)
  scene.add(torus)
  // ═══════════════════════════════════════
  // SHAPE 3 — Octahedron (bottom center)
  // ═══════════════════════════════════════
  const octahedron = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.7, 0),
    matNeon3
  )
  octahedron.position.set(0.5, -2.5, -1)
  scene.add(octahedron)

  // ═══════════════════════════════════════
  // SHAPE 4 — Tetrahedron (top right)
  // ═══════════════════════════════════════
  const tetrahedron = new THREE.Mesh(
    new THREE.TetrahedronGeometry(0.6, 0),
    matNeon
  )
  tetrahedron.position.set(2.5, -1, -2)
  scene.add(tetrahedron)

  // ═══════════════════════════════════════
  // SHAPE 5 — Small Sphere (top left)
  // ═══════════════════════════════════════
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 8, 8),
    matNeon2
  )
  sphere.position.set(-2, -1.5, -1)
  scene.add(sphere)