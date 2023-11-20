import { Router } from "express"
import { sampleDelete, sampleGet, samplePost } from "../controller/sample"
// import {} from "../controller/"

const router = Router()

router.route("/post").get(sampleGet)
router.route("/get").post(samplePost)
router.route("/put").put(samplePost)
router.route("/delete").delete(sampleDelete)

export default router
