function numbers () {
    let arr = [3,23 ,12,34,53,50,100,32 ,12 ,22];

    // use filter with a callback function to check if each element is less than 50
    let newarr = arr.filter(function(value) {
        return value < 50;
    });

    console.log(newarr);
}

numbers();