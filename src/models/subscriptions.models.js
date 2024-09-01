import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subsriber: {
      type: Schema.Types.ObjectId, //! one who IS SUBSCRIBING
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //! one to whom 'subscriber' is SUBSCRIBING
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
