import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initScrollAnimations() {

  // ═══════════════════════════════════════
  // REVEAL ELEMENTS ON SCROLL
  // ═══════════════════════════════════════
  const revealElements = document.querySelectorAll('.reveal')

  revealElements.forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start:   'top 85%',
      onEnter: () => {
        gsap.to(el, {
          opacity:  1,
          y:        0,
          duration: 0.8,
          delay:    (i % 3) * 0.1,
          ease:     'power3.out',
        })
        el.classList.add('active')
      },
    })
  })
 // ═══════════════════════════════════════
  // SKILL BARS — animate width on scroll
  // ═══════════════════════════════════════
  const skillFills = document.querySelectorAll('.skill-fill')

  skillFills.forEach((fill) => {
    const targetWidth = fill.dataset.width + '%'

    ScrollTrigger.create({
      trigger: fill,
      start:   'top 90%',
      onEnter: () => {
        gsap.to(fill, {
          width:    targetWidth,
          duration: 1.5,
          delay:    0.3,
          ease:     'power3.out',
        })
      },
    })
  })