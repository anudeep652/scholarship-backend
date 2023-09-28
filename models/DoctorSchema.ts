import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
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
    phone: {
      type: Number,
      required: true,
    },
    doctorCertificate: {
      type: String,
      required: true,
    },
    aadhar: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    availabilityTime: {
      type: String,
      required: true,
    },
    noOfDaysAvailable: {
      type: String,
      required: true,
    },
    clinicAddress: {
      type: String,
    },
    clinicCity: {
      type: String,
    },
    clinicPincode: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Doctor", doctorSchema);
