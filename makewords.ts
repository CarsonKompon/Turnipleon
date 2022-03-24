// npm run makewords

import { flatKeys } from './src/constants/keys'

// https://stackoverflow.com/a/2450976
function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
  }

  return array;
}

function make_word(): string {
  let lastChoice: string | undefined = undefined;
  return Array.from(Array(5)).map(i => {
    const possibleChoices = flatKeys.filter(item => item != lastChoice);
    lastChoice = shuffle(possibleChoices)[0];
    return lastChoice
  }).join('');
}

console.log('export const WORDS = [');
Array.from(Array(500)).forEach(_ => {
  console.log(`    '${make_word()}',`);
});
console.log(']');
