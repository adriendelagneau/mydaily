import mongoose from "mongoose";

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true
    },
    subcategory: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId, // Assuming the author is referenced by their ObjectId
      ref: "Author",
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