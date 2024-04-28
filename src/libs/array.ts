/**
 * Shuffle items in array
 * @param arr Array to be shuffled
 * @returns new array but each item is the same as it was
 */
export const shuffleArray = <T>(arr: T[]) => {
  const newArr = [];

  while (arr.length > 0) {
    const randIdx = Math.floor(Math.random() * arr.length);
    newArr.push(arr.splice(randIdx, 1)[0]);
  }

  return newArr;
};
