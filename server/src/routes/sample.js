"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sample_1 = require("../controller/sample");
// import {} from "../controller/"
const router = (0, express_1.Router)();
router.route("/post").get(sample_1.sampleGet);
router.route("/get").post(sample_1.samplePost);
router.route("/put").put(sample_1.samplePost);
router.route("/delete").delete(sample_1.sampleDelete);
exports.default = router;
