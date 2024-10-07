const swap = (arr, x, y) => {
  [arr[x], arr[y]] = [arr[y], arr[x]];
  return arr;
};
export default swap