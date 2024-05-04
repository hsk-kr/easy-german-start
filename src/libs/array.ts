/**
 * Shuffle items in array
 * @param arr Array to be shuffled
 * @returns new array but each item is the same as it was
 */
export const shuffleArray = <T>(arr: T[]) => {
  const copiedArr = [...arr];
  const newArr = [];

  while (copiedArr.length > 0) {
    const randIdx = Math.floor(Math.random() * copiedArr.length);
    newArr.push(copiedArr.splice(randIdx, 1)[0]);
  }

  return newArr;
};
