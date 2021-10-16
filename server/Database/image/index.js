import mongoose, { Schema } from "mongoose";
const ImageSchema=new Schema({
    images:[
        {
            location:{type:String,required:true},
        },
    ],
},
{
    timestamps:true
});
export const ImageModel=mongoose.model("Images",ImageSchema);