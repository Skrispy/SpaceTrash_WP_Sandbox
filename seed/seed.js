const mongoose = require("mongoose");
const Trash = require("../models/trash");
const f = require("fs");
const parser = require("tle-parser").parser;
// const {sats} = require('./cat');

//Makes array of tles
var cat = "../data/catalog.txt";
const newdatArr = f.readFileSync(cat).toString().split(/\n/);
const newDatArr = [];
const finDat = [];
//Make array of tles
for (let i = 0; i <= newdatArr.length; i += 3) {
  newDatArr.push(
    newdatArr[i] + "\n" + newdatArr[i + 1] + "\n" + newdatArr[i + 2]
  );
}

//connect to data base
mongoose.connect("mongodb://localhost:27017/trash", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "console error:"));
db.once("open", () => {
  console.log("Database Connected");
});
//seed db with whole data array
const seedDB = async () => {
  await Trash.deleteMany({});
  for (i = 0; i < newdatArr.length; i++) {
    const sat = parser(newdatArr[i]);
    const trash = new Trash({
      name: sat[i].name,
      intl_designator: sat[i].intl_designator,
      catalog_number: sat[i].catalog_number,
      classification_type: sat[i].classification_type,
      epoch: sat[i].epoch,
      inclination: sat[i].inclination,
      eccentricity: sat[i].eccentricity,
      right_ascension: sat[i].right_ascension,
      argument_of_periapsis: sat[i].argument_of_periapsis,
      mean_anomaly: sat[i].mean_anomaly,
      mean_motion: sat[i].mean_motion,
      mean_motion_dot: sat[i].mean_motion_dot,
      mean_motion_dot_dot: sat[i].mean_motion_dot_dot,
      b_star: sat[i].b_star,
      revolutions_at_epoch: sat[i].revolutions_at_epoch,
      element_set_number: sat[i].element_set_number,
      ephemeris_type: sat[i].ephemeris_type,
    });
    await trash.save();
  }
};
