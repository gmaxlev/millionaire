export default function useOptionWord(index: number) {
  if (index < 26) {
    return String.fromCharCode(65 + index);
  }

  return index;
}
