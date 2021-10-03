const mongoose = require("mongoose");
const Trash = require('../models/trash'); 
const f = require("fs");
const parser = require("tle-parser").parser


//Makes array of tles
var cat = "../data/catalog.txt";
const newdatArr = f.readFileSync(cat).toString().split(/\n/);
const newDatArr = [];
const finDat=[];
//Make array of tles
for(let i = 0;i<=newdatArr.length;i+=3){
        newDatArr.push(newdatArr[i]+ "\n" + newdatArr[i+1]+ "\n" +newdatArr[i+2]);
}

//connect to data base
connect('mongodb://localhost:27017/trash',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "console error:"));
db.once("open", () => {
    console.log("Database Connected");
});
//seed db with whole data array
const seedDB = async () => {
    await Trash.deleteMany({});
    for (i =0; i <newdatArr.length;i++){
        const sat = parser(newdatArr[i])
        if(sat.classification_type)
        const trash = new Trash ({
            name:newdatArr[i].name,
            intl_designator:newdatArr[i].intl_designator,
            catalog_number:newdatArr[i].catalog_number,
            classification_type:newdatArr[i].classification_type ,
            epoch:newdatArr[i].epoch ,
            inclination:newdatArr[i].inclination,
            eccentricity:newdatArr[i].eccentricity,
            right_ascension:newdatArr[i].right_ascension,
            argument_of_periapsis:newdatArr[i].argument_of_periapsis ,
            mean_anomaly:newdatArr[i].mean_anomaly,
            mean_motion:newdatArr[i].mean_motion,
            mean_motion_dot:newdatArr[i].mean_motion_dot,
            mean_motion_dot_dot:newdatArr[i].mean_motion_dot_dot,
            b_star:newdatArr[i].b_star,
            revolutions_at_epoch:newdatArr[i].revolutions_at_epoch,
            element_set_number:newdatArr[i].element_set_number,
            ephemeris_type:newdatArr[i].ephemeris_type
        })
        await trash.save();
    }
    
}