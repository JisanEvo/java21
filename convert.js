// inch to feet

function inchToFeet(inch){
 const feet=inch/12;
 return feet;
}

function inchToFeet2(inch){
const feetfraction=inch/12;
const feetNumber=parseInt(feetfraction);
const isremaining=inch%12;
const result= feetNumber+`feet`+isremaining+`inch`;
return result;

}



// const height2=inchToFeet(85);
// console.log(height2);

// const height=inchToFeet2(80);
// console.log(height);

// function mileToKilo(mile){
//     const kilo=mile*1.60934;
//     return kilo;
// }
// const kilometer=mileToKilo(58);
// console.log (`total kilo :`  ,    kilometer);

function kiloToMile(kilo){
 const    mile=kilo*0.62137119;

return mile;


}

const miles=kiloToMile(855);
console.log(`Total destination :  `,miles,`mile (vasty)`);