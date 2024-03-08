const express = require("express");
const router = express.Router();

//Sample Messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// GET new message page
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

//POST new message submitted by user
router.post("/new", function (req, res, next) {
  const author = req.body.name;
  const messageText = req.body.message;

  messages.push({ text: messageText, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
