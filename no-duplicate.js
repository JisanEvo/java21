const biriyaniKhor = [`abul`, `babul`, `cabul`, `dabul`, `nokul`, `mokbul`, `abul`, `babul`, `cabul`, `dabul`]
const number = [11, 12, 13, 14, 15, 12, 13, 14, 15, 25, 266, 58]




function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        // console.log(item);
        if (unique.includes(item)===false) {
            unique.push(item);

        }



}
return unique;
}



const unique = noDuplicate(biriyaniKhor);
console.log(unique); 