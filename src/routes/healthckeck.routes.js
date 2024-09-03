import { Router } from "express";

import { healthcheck } from "../controllers/healthCheck_controller.js";

const router = Router();

router.route("/").get(healthcheck);

// router.route("/").get(healthcheck);
// router.route("/test").get(healthcheck);

export default router;
