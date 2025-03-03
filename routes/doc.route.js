const { Router } = require("express");
const { docsController } = require("../controllers/doc.controller");

const router = Router();

router.get("/docs", docsController.getDocs);
router.get("/docs/:id", docsController.getDocsById);
router.post("/docs", docsController.postDoc);

module.exports = router;
