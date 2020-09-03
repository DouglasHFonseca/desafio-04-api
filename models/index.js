import mongoose from 'mongoose';
import studentModel from './gradeModel.js'
const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.studentModel = studentModel(mongoose);

export { db };
