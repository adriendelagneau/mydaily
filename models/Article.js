import mongoose from "mongoose";
import Author from "./Author";
import Category from "./Category";
import Subcategory from "./Subcategory";

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: Category,
      required: true
    },
    subcategory: {
      type: Schema.Types.ObjectId,
      ref: Subcategory,
      required: true
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId, 
      ref: Author,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Article || mongoose.model("Article", articleSchema);