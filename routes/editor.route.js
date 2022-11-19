const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");
const editorController = require("../controllers/editor.controller");

router
  .route("/editor")
  .post(
    verifyToken,
    authorization("administrator"),
    editorController.createEditor
  );
router
  .route("/editor/:id")
  .delete(
    verifyToken,
    authorization("administrator"),
    editorController.deleteEditor
  );

router.route("/editors").get(verifyToken, editorController.getEditors);

module.exports = router;
