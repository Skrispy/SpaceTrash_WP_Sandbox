const f = require("fs");
const parser = require("tle-parser").parser
// Using ES6 imports



var cat = "../data/catalog.txt";
const datArr = f.readFileSync(cat).toString().split(/\n/);
const newDatArr = [];
//Make array of tles
for(let i = 0;i<=datArr.length;i+=3){
        newDatArr.push(datArr[i]+ "\n" + datArr[i+1]+ "\n" +datArr[i+2]);
}
console.log("Length" + newDatArr.length)
console.log("Length" + newDatArr[0])
const sat = parser(newDatArr[0])
// for(sat in newDatArr){
//         sats.push(sat.parser);
// }

console.log(sat.name);

console.log(sat.classification_type);


// for(let i = 0;i<newDatArr.length;i+=2){
//     finDat.push(newDatArr[i] +"\n" +newDatArr[i+1]);
// }


 // Sample TLE
