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

  // ═══════════════════════════════════════
  // ANIMATION LOOP
  // ═══════════════════════════════════════
  const clock = new THREE.Clock()

  const animate = () => {
    requestAnimationFrame(animate)

    const t = clock.getElapsedTime()

    // Rotate each shape uniquely
    icosahedron.rotation.x = t * 0.3
    icosahedron.rotation.y = t * 0.2
    icosahedron.rotation.z = t * 0.1

    torus.rotation.x = t * 0.4
    torus.rotation.z = t * 0.3

    octahedron.rotation.x = t * 0.5
    octahedron.rotation.y = t * 0.3

    tetrahedron.rotation.x = t * 0.2
    tetrahedron.rotation.y = t * 0.4
    tetrahedron.rotation.z = t * 0.3

    sphere.rotation.y = t * 0.6

    // Float up and down
    icosahedron.position.y  = 0.5  + Math.sin(t * 0.5) * 0.3
    torus.position.y        = 1    + Math.sin(t * 0.4 + 1) * 0.4
    octahedron.position.y   = -2.5 + Math.sin(t * 0.6 + 2) * 0.3
    tetrahedron.position.y  = -1   + Math.sin(t * 0.3 + 3) * 0.3
    sphere.position.y       = -1.5 + Math.sin(t * 0.7 + 4) * 0.2

    renderer.render(scene, camera)
  }

  animate()

  // ═══════════════════════════════════════
  // RESIZE HANDLER
  // ═══════════════════════════════════════
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}