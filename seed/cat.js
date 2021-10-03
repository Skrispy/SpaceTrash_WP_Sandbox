const readFileSync = require("fs");

// Using ES6 imports

var cat = "../data/catalog.txt";
const datArr = readFileSync(cat).toString().split(/\n/);
const newDatArr = [];
//Make array of tles
for (let i = 0; i < datArr.length; i += 3) {
  if (datArr[i].includes("DEB") || datArr[i].includes("R/B")) {
    newDatArr.push(datArr[i] + "\n" + datArr[i + 1] + "\n" + datArr[i + 2]);
  }
}

export { newDatArr };
// const sats = []
// let count = 0
// for(sat in newDatArr){
//         if(sat != null || sat != undefined){
//                 try{
//                         sats.push(parser(newDatArr[count]));
//                         count++;
//                 }catch{
//                         continue;
//                 }
//         }
// }
// console.log(sats);

// console.log("Length" + newDatArr.length)
// console.log("Length" + newDatArr[0])

// for(sat in newDatArr){
//         sats.push(sat.parser);
// }

// console.log(sat.name);
// console.log(sat.classification_type);

// for(let i = 0;i<newDatArr.length;i+=2){
//     finDat.push(newDatArr[i] +"\n" +newDatArr[i+1]);
// }

// Sample TLE
