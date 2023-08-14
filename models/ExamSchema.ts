import mongoose from "mongoose";

const Exam = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    class: [Number],
    mark: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
    community: [{ cm: String, mark: Number }],
    isGovt: Boolean,
    link: String,
    lastDate: String,
    eligibility:String,
    benefits:String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Exam", Exam);
