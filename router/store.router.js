const express = require("express");
const router = express.Router();
const storeController = require("../controller/store.controller");

// define the home page route
router.get("/stores", storeController.getStoresList);
router.post("/stores/save", storeController.saveStore);
// router.put("/notes/update", noteController.updateNote);
// router.delete("/notes/delete", noteController.deleteNote);

module.exports = router;
