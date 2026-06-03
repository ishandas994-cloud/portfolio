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

// ═══════════════════════════════════════
// HAMBURGER MENU — mobile
// ═══════════════════════════════════════
const hamburger = document.getElementById('hamburger')
const navLinks  = document.getElementById('nav-links')

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open')
})

// Close menu when a link is clicked
navAnchors.forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open')
  })
})
// ═══════════════════════════════════════
// CONTACT FORM — mailto fallback
// ═══════════════════════════════════════
const form       = document.getElementById('contact-form')
const formStatus = document.getElementById('form-status')
const sendBtn    = document.getElementById('send-btn')

form?.addEventListener('submit', (e) => {
  e.preventDefault()

  const name    = document.getElementById('fname').value.trim()
  const email   = document.getElementById('femail').value.trim()
  const message = document.getElementById('fmessage').value.trim()

  if (!name || !email || !message) {
    formStatus.textContent = '⚠️ Please fill in all fields.'
    formStatus.style.color = '#ff00aa'
    return
  }

  sendBtn.textContent = 'Sending...'
  sendBtn.disabled    = true

  // Opens user's default email client
  const subject  = encodeURIComponent(`Portfolio Contact from ${name}`)
  const body     = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )
  const mailto   = `mailto:ishandas994@gmail.com?subject=${subject}&body=${body}`

  window.location.href = mailto

  formStatus.textContent = '✅ Opening your email client...'
  formStatus.style.color = '#00fff2'

  sendBtn.textContent = 'Send Message'
  sendBtn.disabled    = false
  form.reset()

  setTimeout(() => {
    formStatus.textContent = ''
  }, 5000)
})