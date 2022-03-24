import sprTurnipBoy from '../icons/turnip-boy.png'
import sprMayorOnion from '../icons/mayor-onion.png'
import sprOldManLemon from '../icons/old-man-lemon.png'
import sprAcorn from '../icons/acorn.png'
import sprAnnie from '../icons/annie.png'
import sprAppleCatRed from '../icons/apple-cat-red.png'
import sprAppleCatGreen from '../icons/apple-cat-green.png'
import sprAppleCatYellow from '../icons/apple-cat-yellow.png'
import sprBlueberry from '../icons/blueberry.png'
import sprBlueberryShady from '../icons/blueberry-shady.png'
import sprCarrot from '../icons/carrot-babysitter.png'
import sprDeb from '../icons/deb.png'
import sprJerry from '../icons/jerry.png'
import sprPumpkin from '../icons/pumpkin.png'
import sprSlayQueen from '../icons/slayqueen32.png'
import sprStrawberry from '../icons/strawberry.png'
import sprCranCran from '../icons/cran-cran.png'
import sprNurseBerry from '../icons/nurse-berry.png'
import sprBabyCarrot from '../icons/carrot-baby.png'
import sprConductorOnion from '../icons/conductor-onion.png'

export const keys = [
  ['A', 'C', 'D', 'L', 'J', 'T', 'B'],
  ['K', 'R', 'O', 'E', 'P', 'Q', 'H'],
  ['G', 'M', 'F', 'I', 'S', 'N'],
]

export const icons = {
  A: sprTurnipBoy,
  B: sprMayorOnion,
  C: sprOldManLemon,
  D: sprAnnie,
  E: sprAppleCatRed,
  F: sprSlayQueen,
  G: sprBlueberry,
  H: sprBlueberryShady,
  I: sprCarrot,
  J: sprAcorn,
  K: sprDeb,
  L: sprJerry,
  M: sprStrawberry,
  N: sprPumpkin,
  O: sprCranCran,
  P: sprAppleCatGreen,
  Q: sprAppleCatYellow,
  R: sprNurseBerry,
  S: sprBabyCarrot,
  T: sprConductorOnion,
}

export const names = {
  A: 'Turnip Boy',
  B: 'Mayor Onion',
  C: 'Old Man Lemon',
  D: 'Annie',
  E: 'Red Apple Cat',
  F: 'slayQueen32',
  G: 'Blueberry',
  H: 'Shady Blueberry',
  I: 'Babysitter Carrot',
  J: 'Acorn',
  K: 'Deb',
  L: 'Jerry',
  M: 'Strawberry',
  N: 'Pumpkin',
  O: 'Crancran',
  P: 'Green Apple Cat',
  Q: 'Yellow Apple Cat',
  R: 'Nurse Berry',
  S: 'Baby Carrot',
  T: 'Conductor Onion',
}

export const flatKeys = keys.reduce((a, i) => a.concat(i), [])
export const birdAwards = ['🥗', '🧅', '🍋', '🥑', '🍓', '🍑']
