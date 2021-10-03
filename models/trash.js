const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrashSchema = new Schema({
    name:String,
    intl_designator:String,
    catalog_number:String ,
    classification_type:String ,
    epoch:String ,
    inclination:Number,
    eccentricity:Number,
    right_ascension:Number,
    argument_of_periapsis:Number ,
    mean_anomaly:Number,
    mean_motion:Number,
    mean_motion_dot:Number,
    mean_motion_dot_dot:Number,
    b_star:Number,
    revolutions_at_epoch:Number,
    element_set_number:Number,
    ephemeris_type:Number
});


module.exports = mongoose.model('Trash', TrashSchema);