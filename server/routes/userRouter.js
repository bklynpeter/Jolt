const authController = require("../controllers/authController.js");
const userController = require("../controllers/userController.js");

const router = express.Router();

// path: 'localhost:3000/users/'
router.post("/", userController.createUser, (req, res) => {
  console.log("res.locals.newUser: ", res.locals.newUser);
  res.status(200).json(res.locals.newUser);
});

module.exports = userRouter;
