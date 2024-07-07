import { ContactUs } from "../models/models.js";
import { sendEmail } from "../helpers/mailer.js";

export const readContactUs = async (req, res) => {
  const info = await ContactUs.find()
    .then(() => {
      res.status(200).json({ status: true, data: info });
    })
    .catch((error) => {
      res.status(404).json({ status: false, data: error });
    });
};

export const createContactUs = async (req, res) => {
  const mailOptions = new ContactUs(req.body);
  console.log(mailOptions);

  await mailOptions
    .save()
    .then(() => {
      res.status(201).json({ status: true, data: "Data saved" });
      let mailDetails = {
        from: `${mailOptions.name} <${mailOptions.email}>`,
        to: process.env.website_mail,
        subject: mailOptions.subject,
        text: mailOptions.content,
      };
      sendEmail(mailDetails);
    })
    .catch((error) => {
      console.error("Error saving data:", error);
      res.status(500).json({ status: false, data: error });
    });
};

export const updateContactUs = async (req, res) => {
  const { id } = req.params;
  const { name, content } = req.body;
  const info = { name, content, _id: id };

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ status: false, data: `The id ${id} is not valid` });
  }

  await ContactUs.findByIdAndUpdate(id, info, { new: true })
    .then(() => {
      res.json({ status: true, data: info });
    })
    .catch((error) => {
      res.json({ status: false, data: error });
    });
};

export const deleteContactUs = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ status: false, data: `The id ${id} is not valid` });
  }

  await ContactUs.findByIdAndRemove(id)
    .then(() => {
      res.json({ status: true, data: "deleted successfully" });
    })
    .catch((error) => {
      res.json({ status: false, data: error });
    });
};
