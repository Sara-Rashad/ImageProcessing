import resize from "../../services/ImageProcessing";
import { promises as fs } from "fs";

describe("Test Image Processing service", () => {
  it("Expect resize service to resize certain image and save it in the output folder", async ():Promise<void> => {
    const width = 250;
    const height = 250;
    const imgUrl = `${__dirname}/../../../resources/images/image1.jpg`;
    const distUrl = `${__dirname}/../../../resources/resizedImages/image1_${width}_${height}.jpg`;

    //check if image exist
    await fs.access(imgUrl);
    await resize(imgUrl, distUrl, width, height);

    //check if resized image exist
    expect(await fs.access(distUrl));

    //remove resized image
    await fs.unlink(distUrl);
  });
});
