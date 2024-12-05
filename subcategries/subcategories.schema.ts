import mongoose from "mongoose";
import { subcategoriesInterface } from "./subcategories.interface";

const subcategorieSchema=new mongoose.Schema<subcategoriesInterface>({

    name:{type:String,required:true,trim:true},
    category:{type: mongoose.Schema.Types.ObjectId , ref: 'categories'},
    image:String,

},{timestamps:true});
subcategorieSchema.pre<subcategoriesInterface>(/^find/,function(next){
    this.populate({path:'category',select:'name image'});
    next();
})

export default mongoose.model<subcategoriesInterface>('subcategories',subcategorieSchema)