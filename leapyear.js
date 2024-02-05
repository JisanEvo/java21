// function isLeap(year) {
//     if (year % 4 === 0) {
//         return true;

//     }
//     else{
//         return false;
//     }
// }
// const leapyear=isLeap(2005);
// console.log(leapyear);

function isLeap(year){
    if(year%100!==0 && year%4===0){
        return true
    }
    else{
        return false;
    }


}
const leap=isLeap(2052);
const leap2=isLeap(1900);
const leap3=isLeap(2400);
const leap4=isLeap(2003);
const leap5=isLeap(2029);
console.log(leap,leap2,leap3,leap4,leap5);