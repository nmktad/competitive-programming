function sortSentence(s: string): string {
  return s
    .split(" ")
    .sort((a, b) => parseInt(a.slice(-1)) - parseInt(b.slice(-1)))
    .map((word) => word.slice(0, word.length - 1))
    .join(" ");
}
