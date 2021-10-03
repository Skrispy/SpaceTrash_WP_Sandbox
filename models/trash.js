import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TrashSchema = new Schema({
    name:String,
    satnum:Number,
    epochyr:Number,
    epochdays:Number,
    jdsatepoch:Number,
    ndot:Number,
    nddot:Number,
    bstar:Number,
    inclo:Number,
    nodeo:Number,
    ecco:Number,
    argpo:Number,
    mo:Number,
    no:Number
});

module.exports = mongoose.model('Trash', TrashSchema);