const express = require("express");
const router = express.Router();
const listController = require("../controller/listController");

//Endpoints

router.get("/lists", listController.get_lists);
router.post("/createLists", listController.create);
router.put("/updateList/id/:id", listController.update);
router.delete("/deleteList/id/:id", listController.delete_list);

module.exports = router;
