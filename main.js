import Typed                    from 'typed.js'
import { initGalaxy }           from './src/galaxy.js'
import { initShapes }           from './src/shapes.js'
import { initScrollAnimations } from './src/scroll.js'
import { initTilt }             from './src/tilt.js'

// ═══════════════════════════════════════
// TYPED.JS — typewriter effect
// ═══════════════════════════════════════
new Typed('#typed', {
  strings: [
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Problem Solver',
  ],
  typeSpeed:  60,
  backSpeed:  40,
  backDelay:  1500,
  loop:       true,
  cursorChar: '|',
})

// ═══════════════════════════════════════
// THREE.JS SCENES
// ═══════════════════════════════════════
initGalaxy()
initShapes()

// ═══════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════
initScrollAnimations()

// ═══════════════════════════════════════
// 3D TILT ON PROJECT CARDS
// ═══════════════════════════════════════
initTilt()

// ═══════════════════════════════════════
// NAVBAR — shrink on scroll
// ═══════════════════════════════════════
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

// ═══════════════════════════════════════
// NAVBAR — active link highlight on scroll
// ═══════════════════════════════════════
const sections   = document.querySelectorAll('section[id]')
const navAnchors = document.querySelectorAll('.nav-links a')

window.addEventListener('scroll', () => {
  let current = ''
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 150
    if (window.scrollY >= sectionTop) {
      current = sec.getAttribute('id')
    }
  })
  navAnchors.forEach(a => {
    a.style.color = ''
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = '#00fff2'
    }
  })
})
