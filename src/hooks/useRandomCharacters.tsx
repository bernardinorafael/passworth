export default function useRandomCharacters() {
  const symbols = ["!", "@", "#", "$", "%", "&", "*", "/", "[", ">", "+"]
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const random = {
    lowercase: String.fromCharCode(Math.floor(Math.random() * 10 + 97)),
    uppercase: String.fromCharCode(Math.floor(Math.random() * 10 + 65)),
    symbols: symbols[Math.floor(Math.random() * symbols.length)],
    numbers: String(numbers[Math.floor(Math.random() * numbers.length)]),
  }

  return { random }
}
