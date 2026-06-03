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
