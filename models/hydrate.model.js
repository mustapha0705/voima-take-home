import mongoose from "mongoose";

const HydrateSchema = new mongoose.Schema({
  amount: { type: Number, required: true }, // in milliliters
  reference: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const HydrateModel = mongoose.model("Hydrate", HydrateSchema);
export default HydrateModel;
