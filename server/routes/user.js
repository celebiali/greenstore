const express = require("express");
const { register, login, logout,forgotPassword,resetPassword,userDetail } = require("../controllers/user");
const { authenticationMid } = require("../middleware/auth");

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/forgotpassword", forgotPassword);
router.put("/reset/:token", resetPassword);
router.get("/me",authenticationMid,userDetail);

module.exports = router;
