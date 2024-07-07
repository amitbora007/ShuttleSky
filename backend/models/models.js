import mongoose from "mongoose";
const contactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const registerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    confirmation_mail_sent: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ContactUs = mongoose.model("ContactUs", contactUsSchema);
export const Register = mongoose.model("Register", registerSchema);
