//schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Contact = new Schema({
   Name: {type:String,require:true},
   Email: { type: String, required: true },
   Message: { type: String, required: true }
   
});
export default mongoose.model("contacts",Contact);

