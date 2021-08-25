// 1. Create an empty array
let numbers = [];
// 2. Ask 6 numbers to the user
for (let i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt("Give me a number"));
    // 3. if odd add it to the array
    if (userNumber % 2 != 0) {
        numbers.push(userNumber);
    }
}
alert(numbers);