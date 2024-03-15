
const userNumber = parseInt(prompt("Enter a number:"));

if (isNaN(userNumber)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
  
    let factorCount = 0;


    for (let i = 1; i <= userNumber; i++) {
        if (userNumber % i === 0) {
            factorCount++;
        }
    }

    console.log(`The number ${userNumber} has ${factorCount} factors.`);
}
