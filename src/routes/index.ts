import express from "express";
import resizeImageRoute from "./api/resizeImage";

const routes = express.Router();

routes.get("/", (req:express.Request, res:express.Response):void => {
  res.status(200).send("Main Route");
});

routes.use("/resizeImage", resizeImageRoute);

export default routes;
