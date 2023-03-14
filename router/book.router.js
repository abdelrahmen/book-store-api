const express = require("express");
const router = express.Router();
const bookController = require("../controller/book.controller");

// define the home page 
router.get("/books", bookController.getBooksList);
router.get("/books/details/:bookId", bookController.getBookDetails);
router.post("/books/save", bookController.saveBook);
router.put("/books/update", bookController.updateBook);
router.delete("/books/delete/:bookId", bookController.deleteBook);

module.exports = router;