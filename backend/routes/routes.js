import express from "express";
import {
  createContactUs,
  deleteContactUs,
  readContactUs,
  updateContactUs,
} from "../controller/contactUsController.js";

import {
  createRegInfo,
  deleteRegInfo,
  readRegInfo,
  updateRegInfo,
} from "../controller/registerController.js";

export const contactUsRouter = express.Router();
contactUsRouter.get("/", readContactUs);
contactUsRouter.post("/", createContactUs);
contactUsRouter.patch("/:id", updateContactUs);
contactUsRouter.delete("/:id", deleteContactUs);

export const registerRouter = express.Router();
registerRouter.get("/", readRegInfo);
registerRouter.post("/", createRegInfo);
registerRouter.patch("/:id", updateRegInfo);
registerRouter.delete("/:id", deleteRegInfo);