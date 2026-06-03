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
  // ═══════════════════════════════════════
  // SKILL CARDS — stagger on scroll
  // ═══════════════════════════════════════
  const skillCards = document.querySelectorAll('.skill-card')

  skillCards.forEach((card, i) => {
    ScrollTrigger.create({
      trigger: card,
      start:   'top 88%',
      onEnter: () => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y:       50,
            scale:   0.95,
          },
          {
            opacity:  1,
            y:        0,
            scale:    1,
            duration: 0.6,
            delay:    i * 0.08,
            ease:     'power3.out',
          }
        )
      },
    })
  })
   // ═══════════════════════════════════════
  // PROJECT CARDS — stagger on scroll
  // ═══════════════════════════════════════
  const projectCards = document.querySelectorAll('.project-card')

  projectCards.forEach((card, i) => {
    ScrollTrigger.create({
      trigger: card,
      start:   'top 85%',
      onEnter: () => {
        gsap.fromTo(
          card,
          {
            opacity:  0,
            y:        60,
            rotateX:  8,
          },
          {
            opacity:  1,
            y:        0,
            rotateX:  0,
            duration: 0.8,
            delay:    i * 0.15,
            ease:     'power3.out',
          }
        )
      },
    })
  })

  // ═══════════════════════════════════════
  // CONTACT ITEMS — stagger on scroll
  // ═══════════════════════════════════════
  const contactItems = document.querySelectorAll('.contact-item')

  contactItems.forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start:   'top 88%',
      onEnter: () => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x:       -40,
          },
          {
            opacity:  1,
            x:        0,
            duration: 0.7,
            delay:    i * 0.15,
            ease:     'power3.out',
          }
        )
      },
    })
  })
 // ═══════════════════════════════════════
  // ABOUT SECTION — image and text
  // ═══════════════════════════════════════
  ScrollTrigger.create({
    trigger: '#about',
    start:   'top 70%',
    onEnter: () => {

      // Image slides in from left
      gsap.fromTo(
        '.about-left',
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      )

      // Text slides in from right
      gsap.fromTo(
        '.about-right',
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      )
    },
  })
  // ═══════════════════════════════════════
  // SECTION TITLES — fade in
  // ═══════════════════════════════════════
  const sectionTitles = document.querySelectorAll('.section-title')

  sectionTitles.forEach((title) => {
    ScrollTrigger.create({
      trigger: title,
      start:   'top 85%',
      onEnter: () => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        )
      },
    })
  })
