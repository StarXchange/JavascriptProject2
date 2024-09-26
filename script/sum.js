// sum of numbers
// create the function
// create the variables that will start from the zero index
// loop through it. Then start adding the numbers

function sum(number) {
    let cal = number[0];
    for (let i = 0; i < number.length; i++) {
        cal += number[i]
    }
    return cal;
}

numbers = [1, 2, 3, 4, 5, 6]
sum(numbers)