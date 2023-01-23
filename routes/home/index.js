"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require("./home.ctrl");
console.log(ctrl);
router.get('/', ctrl.home);

router.get('/login', ctrl.login);

//console.log(router);

module.exports = router;  // 외부로 내보내기 명령