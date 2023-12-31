import mongoose from "mongoose";

const DiplomaSchema = new mongoose.Schema({
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
  },
  documents: {
    type: String,
    required: true,
  },
  shouldBeDifferentlyAbled: Boolean,
  link: {
    type: String,
    required: true,
  },
  lastDate: {
    type: String,
    required: true,
  },
  shouldBeFromMinorCommunity: Boolean,
  maximumFamilySiblings: Number,
  Nationality: String,
  community: [String],
  ageGrp: {
    type: {
      min: Number,
      max: Number,
    },
  },
  yearOfStudy: Number,
});

export default mongoose.model("Diplomo", DiplomaSchema);
