import sprTurnipBoy from '../icons/turnip-boy.png'
import sprMayorOnion from '../icons/mayor-onion.png'
import sprOldManLemon from '../icons/old-man-lemon.png'
import sprAcorn from '../icons/acorn.png'
import sprAnnie from '../icons/annie.png'
import sprAppleCat from '../icons/apple-cat.png'
import sprBeanBaby from '../icons/bean-baby.png'
import sprBlueberry from '../icons/blueberry.png'
import sprBlueberryShady from '../icons/blueberry-shady.png'
import sprCarrot from '../icons/carrot.png'
import sprCarrotShady from '../icons/carrot-shady.png'
import sprDeb from '../icons/deb.png'
import sprJerry from '../icons/jerry.png'
import sprPlum from '../icons/plum.png'
import sprPumpkin from '../icons/pumpkin.png'

export const keys = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N'],
]

export const icons = {
  A: sprTurnipBoy,
  B: sprMayorOnion,
  C: sprOldManLemon,
  D: sprAnnie,
  E: sprAppleCat,
  F: sprBeanBaby,
  G: sprBlueberry,
  H: sprBlueberryShady,
  I: sprCarrot,
  J: sprAcorn,
  K: sprDeb,
  L: sprJerry,
  M: sprPlum,
  N: sprPumpkin,
}

export const flatKeys = keys.reduce((a, i) => a.concat(i), [])
export const birdAwards = ['🥗', '🧅', '🍋', '🥑', '🍓', '🍑']
