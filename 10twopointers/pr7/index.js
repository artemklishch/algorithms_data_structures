/**
 * @param {string} s
 * @param {string} t
 * @returns {string}
 */
function minWindowSubstring(s, t) {
  if (t.length > s.length) return ""; // Якщо t довше за s, рішення неможливе

  const tFreq = new Map(); // Частоти символів у t
  for (let char of t) {
    tFreq.set(char, (tFreq.get(char) || 0) + 1);
  }

  const windowFreq = new Map(); // Частоти символів у поточному вікні
  let left = 0; // Лівий покажчик вікна
  let right = 0; // Правий покажчик вікна
  let validCount = 0; // Кількість символів, які повністю задовольняють умови
  let minLen = Infinity; // Мінімальна довжина підрядка
  let result = ""; // Результат — найменший підрядок

  while (right < s.length) {
    // Додаємо символ у вікно
    const char = s[right];
    right++;
    if (tFreq.has(char)) {
      windowFreq.set(char, (windowFreq.get(char) || 0) + 1);
      if (windowFreq.get(char) === tFreq.get(char)) {
        validCount++; // Один з необхідних символів повністю враховано
      }
    }

    // Перевіряємо, чи вікно валідне (містить усі символи з t)
    while (validCount === tFreq.size) {
      // Оновлюємо результат, якщо вікно менше
      if (right - left < minLen) {
        minLen = right - left;
        result = s.slice(left, right);
      }

      // Зменшуємо вікно зліва
      const leftChar = s[left];
      left++;
      if (tFreq.has(leftChar)) {
        if (windowFreq.get(leftChar) === tFreq.get(leftChar)) {
          validCount--; // Один із символів більше не враховано повністю
        }
        windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
      }
    }
  }

  return result;
}
console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // === "BANC" // Найменший підрядок "BANC" включає 'A', 'B' і 'C' з рядка t

console.log(minWindowSubstring("a", "a")); // === "a" // Весь рядок s є найменшим підрядком.
console.log(minWindowSubstring("cabwefgewcwaefgcf", "cae")); // cwae
console.log(minWindowSubstring("bbaac", "abc")); // baac
