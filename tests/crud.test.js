const mongoose = require("mongoose");
const request = require("supertest");
const myURI =
  "mongodb+srv://bklynpeter:334070aa@codesmith.saamf.mongodb.net/?retryWrites=true&w=majority";

const server = "http://localhost:3000";

// process.env.myURI
// routes?
// const ArticleService = require("../services/ArticleService");
const userController = require("../server/controllers/userController.js");

describe("Should perform Create, Update, Read", () => {
  beforeAll(async () => {
    console.log("process.env.myURI: ", myURI);
    await mongoose.connect(myURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  // figure this part out:
  afterAll(async () => {
    await mongoose.disconnect();
    // done();
  });

  test("Creates user - test POST to '/user/'", async () => {
    const newUser = {
      username: "peter",
      password: "12345",
    };
    // test: if res.locals is storing the exact user info passed in
    // const user = await userController.createUser(newUser);
    // const tester = await
    // expect(user).toEqual(expect.objectContaining(user));
    return (
      request(server)
        .post("/users/")
        // .expect("Content-Type", /json/)
        .send(newUser)
        // .then((res) => console.log(res))
        .then((res) => expect(res.body).toEqual(newUser))
      // .expect(200)
    );
  }, 30000);

  // test("Update article", async () => {
  //   const articleToUpdate = {
  //     title: "All the tests get passed",
  //     body: "Should the test fail, we should work had to improve our codebase",
  //     avartar:
  //       "https://dev-to-uploads.s3.amazonaws.com/i/blaf4ke2xt3j08mlx4ca.png",
  //   };
  //   const article = await ArticleService.updateArticle(articleToUpdate);
  //   expect(article).toEqual(expect.objectContaining(article));
  // });

  // test("Get article by Id", async () => {
  //   const articleId = "5ffcc8b0d7556519346f3bd8";
  //   const article = await ArticleService.getArticlebyId(articleId);
  //   expect(article).toEqual(expect.objectContaining(article));
  // });

  // test("Delete article", async () => {
  //   const articleId = "5ffcc8fcb6f631195c9a3529";
  //   const article = await ArticleService.deleteArticle();
  //   expect(article).toEqual(expect.objectContaining(article));
  // });

  // setTimeout(() => {
  //   mongoose.disconnect();
  // }, 1000);
});
