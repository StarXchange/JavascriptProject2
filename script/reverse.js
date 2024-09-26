// TO reverse string usin Javascript
// 1. Take in string either through prompt 
// 2. Turn the string coming into an array using split
// 3. Use the reverse function to reverse the split

function reverse() {
    let inputString = prompt("Input words here");

    let arrayString = inputString.split(" ")
    let reversString = arrayString.reverse()
    console.log(reverseString)
}

reverse()