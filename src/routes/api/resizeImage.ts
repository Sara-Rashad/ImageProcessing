import express from "express";
import resize from "../../services/ImageProcessing";
import path from "path";
import { promises as fs, constants } from "fs";

const resizeImageRoute = express.Router();

resizeImageRoute.get("/", async (req, res) => {
  //read url params
  let imageName = req.query.image;
  let width = parseInt(req.query.width as string);
  let height = parseInt(req.query.height as string);
  if (imageName && width && height) {
    //call resize service
    let imgUrl = `${__dirname}/../../../resources/images/${imageName}.jpg`;
    let distUrl = `${__dirname}/../../../resources/resizedImages/${imageName}_${width}_${height}.jpg`;
    try {
      await fs.access(imgUrl, constants.F_OK);
      await resize(imgUrl, distUrl, width, height);
      res.status(200).sendFile(path.resolve(distUrl));
    } catch (e) {
      res.status(404).send("Image Not Found !");
    }
  } else {
    res.status(400).send("Invalid Parameters");
  }
});

export default resizeImageRoute;
