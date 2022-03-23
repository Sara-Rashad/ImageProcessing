import supertest from "supertest";
import app from "../../../index";

const request = supertest(app);
describe("Test Image Processing End Point", () => {
  it("Test Image Resize Route", async () => {
    await request
      .get("/api/resizeImage")
      .query({ image: "image1", width: "250", height: "250" })
      .expect(200);
  });

  it("Test Image Resize without parameters ", async () => {
    await request
      .get("/api/resizeImage")
      .query({ image: "image1", width: "250" })
      .expect(400);
  });

  it("Test Image Not Found", async () => {
    await request
      .get("/api/resizeImage")
      .query({ image: "myImg", width: "250", height: "250" })
      .expect(404);
  });
});
