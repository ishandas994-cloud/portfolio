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
 // ═══════════════════════════════════════
  // GENERATE GALAXY
  // ═══════════════════════════════════════
  const generateGalaxy = () => {

    // Dispose old galaxy if exists
    if (points) {
      geometry.dispose()
      material.dispose()
      scene.remove(points)
    }

    geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(params.count * 3)
    const colors    = new Float32Array(params.count * 3)

    const colorInside  = new THREE.Color(params.insideColor)
    const colorOutside = new THREE.Color(params.outsideColor)

    for (let i = 0; i < params.count; i++) {
      const i3 = i * 3

      // Position
      const radius      = Math.random() * params.radius
      const branchAngle = ((i % params.branches) / params.branches) * Math.PI * 2
      const spinAngle   = radius * params.spin

      const randomX = Math.pow(Math.random(), params.power) *
                      (Math.random() < 0.5 ? 1 : -1) *
                      params.randomness * radius

      const randomY = Math.pow(Math.random(), params.power) *
                      (Math.random() < 0.5 ? 1 : -1) *
                      params.randomness * radius

      const randomZ = Math.pow(Math.random(), params.power) *
                      (Math.random() < 0.5 ? 1 : -1) *
                      params.randomness * radius

      positions[i3]     = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      // Color — lerp from inside to outside color
      const mixedColor = colorInside.clone()
      mixedColor.lerp(colorOutside, radius / params.radius)

      colors[i3]     = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3))

    material = new THREE.PointsMaterial({
      size:            params.size,
      sizeAttenuation: true,
      depthWrite:      false,
      blending:        THREE.AdditiveBlending,
      vertexColors:    true,
    })

    points = new THREE.Points(geometry, material)
    scene.add(points)
  }

  generateGalaxy()
    // ═══════════════════════════════════════
  // MOUSE PARALLAX
  // ═══════════════════════════════════════
  let mouseX = 0
  let mouseY = 0

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 0.5
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5
  })
 // ═══════════════════════════════════════
  // ANIMATION LOOP
  // ═══════════════════════════════════════
  const clock = new THREE.Clock()

  const animate = () => {
    requestAnimationFrame(animate)

    const elapsedTime = clock.getElapsedTime()

    // Rotate galaxy slowly
    if (points) {
      points.rotation.y = elapsedTime * 0.05
    }

    // Smooth mouse parallax on camera
    camera.position.x += (mouseX  - camera.position.x) * 0.02
    camera.position.y += (-mouseY - camera.position.y) * 0.02
    camera.lookAt(scene.position)

    renderer.render(scene, camera)
  }

  animate()
