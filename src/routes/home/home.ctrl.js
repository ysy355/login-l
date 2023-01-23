"use strict";

const home = (req, res) => {
    res.render("home/index");
};   // 이크마 스크립트

console.log(home);

const login = (req, res) => {
    res.render("home/login");
};

console.log(login);

module.exports = {
    home,
    login,
};