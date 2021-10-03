var cat = "../data/catalog.txt";
const readLine = require("readline");
const f = require("fs");
const datArr = f.readFileSync(cat).toString().split(/\n/);
const newDatArr = [];
const finDat=[];
for(let i = 0;i<=datArr.length;i++){
    if(i%3==0){
        continue;
    }else{
        newDatArr.push(datArr[i]);
    }
}

for(let i = 0;i<newDatArr.length;i+=2){
    finDat.push(newDatArr[i] +"\n" +newDatArr[i+1]);
}


 // Sample TLE

export {finDat}