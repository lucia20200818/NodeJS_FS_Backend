const express = require("express");
const router = express.Router();

router.post("/register", (req, res, next) => {
    // 执行注册逻辑
});

router.post("/login", (req, res) => {
    // 执行登录逻辑
});

module.exports = router;