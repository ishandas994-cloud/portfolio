import VanillaTilt from 'vanilla-tilt'

export function initTilt() {

  // ═══════════════════════════════════════
  // 3D TILT ON PROJECT CARDS
  // ═══════════════════════════════════════
  const cards = document.querySelectorAll('[data-tilt]')

  if (cards.length === 0) return

  VanillaTilt.init(cards, {
    max:          12,
    speed:        400,
    glare:        true,
    'max-glare':  0.15,
    perspective:  1000,
    scale:        1.04,
    transition:   true,
    easing:       'cubic-bezier(.03,.98,.52,.99)',
  })
}