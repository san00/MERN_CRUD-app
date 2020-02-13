//Define item object sent to database

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobVacancy = new Schema({
jobTitle: {type:String,required:true },
salary: {type:Number,required:true },
description: {type:String,required:true }
},{
    timestamps:true,
});

module.exports = Item = mongoose.model('job', jobVacancy);