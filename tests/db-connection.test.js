require("dotenv").config();
const mongoose = require("mongoose");
const ArticleService = require("../services/ArticleService");

describe("Connection", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.myURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  test("Retrieve article by Id", async () => {
    const id = "629e8e522e30c2d2be6dab32";
    const article = await ArticleService.getArticlebyId(id);
    expect(article.title).toBe("This is another post example");
    console.log("article: ", article);
  });

  // afterAll(async (done) => {
  //   cleanup();
  //   done();
  // });
  setTimeout(() => {
    mongoose.disconnect();
  }, 1000);
});
