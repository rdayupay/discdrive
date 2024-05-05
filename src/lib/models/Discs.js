import mongoose from 'mongoose';

const discSchema = new mongoose.Schema(
  {
    discType: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
      min: 1,
      max: 14,
    },
    color: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Disc = mongoose.models.Disc || mongoose.model('Disc', discSchema);

export default Disc;
