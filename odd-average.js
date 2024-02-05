function oddAverage(numbers) {
    const odd = []
    for (const number of numbers) {

        if (number % 2 === 1) {
            // console.log(number)
            odd.push(number)

        }
    }

    // console.log(odd);
    let sum = 0
    for (const number of odd) {
        sum = sum + number;
    }
    const count = odd.length
    console.log(sum,count)

     const average=sum/odd.length;
     return average;
}
const numbers = [41, 25, 36, 78, 77, 85]
const average = oddAverage(numbers);
console.log(`average of the odd number is:`, average);