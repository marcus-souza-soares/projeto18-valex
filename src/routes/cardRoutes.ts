import { Router } from "express";
import { createCard, activateCard, statement } from "../controllers/cardControllers.js";
import { schemaValidate } from "../middlewares/schemaValidation.js";
import { createCardSchema } from "../schemas/createCardSchema.js";
import { activateSchema } from "../schemas/activateCardSchema.js";

const cardRouters = Router();

cardRouters.post("/createcard", schemaValidate(createCardSchema), createCard);
cardRouters.post("/activatecard/:id", schemaValidate(activateSchema), activateCard)
cardRouters.get("/cardstatement/:id", statement)
export default cardRouters;
