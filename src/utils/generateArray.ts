/**
 * Generate an array of the given size
 * @param size Array size
 * @returns Array with numbers and given length
 */
export const generateArray = (size: number) => {
  const result = [];
  while (size > 0) {
    result.push(size);
    size--;
  }
  return result;
};
