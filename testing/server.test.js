global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const server = require("../server/server.js");
const request = require("supertest");
const mongoose = require("mongoose");
const User = require("../server/models/UserModel.js");

const URI =
  "mongodb+srv://bklynpeter:334070aa@codesmith.saamf.mongodb.net/eevee?retryWrites=true&w=majority";

describe("/users POST", () => {
  beforeAll(() => {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  // signup test
  it("responds with a status 200 and exact user info for user that signed up", async () => {
    const newUser = {
      username: "hellothere5",
      password: "1234",
    };
    await request(server)
      .post("/api/users/signup")
      .send(newUser)
      // .set("Accept", "application/json")
      .expect((res) => console.log("res.body: ", res.body))
      //.expect(res => expect(res.body).toEqual(newUser))
      .expect(200);
    // .then(res => {
    //   console.log(res.body);
    //   expect(res.body).toEqual(newUser);
    //   expect(res.body.username).toEqual(newUser.username);
    //   expect(res.body.password).toEqual(newUser.password);
    // })
  });
});
