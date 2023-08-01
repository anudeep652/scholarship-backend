import mongoose from "mongoose";

const AboveTenth = new mongoose.Schema({
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
  forSpecialCategory: Boolean,
  documents: {
    type: String,
    required: true,
  },

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
  community: [String],
});

export default mongoose.model("Abovetenth", AboveTenth);
