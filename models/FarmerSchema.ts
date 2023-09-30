import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: String,
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    cases: [
      {
        doctor_id: String,
        images: {
          type: [String],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Farmer", farmerSchema);
