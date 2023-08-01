import mongoose from "mongoose";

const underTenth = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    state: {
      type: [String],
    },
    parentOccupation: {
      type: [String],
    },
    marksPercentage: Number,
    annualIncome: {
      type: Number,
      required: true,
    },
    shouldBeGirl: Boolean,
    eligibility: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: true,
    },
    documents: {
      type: String,
      required: true,
    },
    forSpecialCategory: Boolean,
    link: {
      type: String,
      required: true,
    },
    lastDate: {
      type: String,
      required: true,
    },
    maximumFamilySiblings: Number,
    Nationality: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UnderTenth", underTenth);
