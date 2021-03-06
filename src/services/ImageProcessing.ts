import sharp from "sharp";
import fs from "fs";

const resize = async (
  imageUrl: string,
  distUrl: string,
  width: number,
  height: number
) :Promise<void>=> {
  //search for image in the cache
  const isResized = fs.existsSync(distUrl);
  if (!isResized) {
    await sharp(imageUrl).resize(width, height).toFile(distUrl);
  }
};

export default resize;
