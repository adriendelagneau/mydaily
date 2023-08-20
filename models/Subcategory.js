import mongoose from "mongoose";

const { Schema } = mongoose;
const subcategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
    },
    { timestamps: true }
)

//If the Post collection does not exist create a new one.
export default mongoose.models.Subcategory || mongoose.model("Subcategory", subcategorySchema);