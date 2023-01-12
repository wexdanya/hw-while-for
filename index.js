// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

// * це повинна бути функція(можливо і не одна)

////////////////////////////////

/**
 *
 * @param {number} userInput
 * @returns {boolean}
 */
function askUser(userInput) {
  if (userInput >= 15 && userInput <= 30 && userInput % 6 === 0) {
    return true;
  }
}

// через while
let i = 0;
while (i < 3) {
  i++;
  const userInput = prompt("Enter value");
  if (askUser(userInput) === true) {
    break;
  }
}
// через for
for (let i = 0; i < 3; i++) {
  const userInput = prompt("Enter value");
  if (askUser(userInput) === true) {
    break;
  }
}
