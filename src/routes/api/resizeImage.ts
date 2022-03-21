import express from "express";
import resize from "../../services/ImageProcessing";
import path from "path";

const resizeImageRoute = express.Router();

resizeImageRoute.get("/", async (req, res) => {
  try {
    //read url params
    let imageName = req.query.image;
    let width = parseInt(req.query.width as string);
    let height = parseInt(req.query.height as string);
    if (imageName && width && height) {
      //call resize service
      let imgUrl = `${__dirname}/../../../resources/images/${imageName}.jpg`;
      let distUrl = `${__dirname}/../../../resources/resizedImages/${imageName}_${width}_${height}.jpg`;
      await resize(imgUrl, distUrl, width, height);
      res.sendFile(path.resolve(distUrl));
    } else {
      res.status(400).send("Invalid Parameters");
    }
  } catch (ex) {
    res.status(400).send("Invalid Resizing Operation");
  }
});

export default resizeImageRoute;
