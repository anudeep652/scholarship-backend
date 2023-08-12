import mongoose from "mongoose";

const Exam = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    class: {
      type: Number,
      required: true,
    },
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Exam", Exam);
