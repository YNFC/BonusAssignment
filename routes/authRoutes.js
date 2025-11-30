const express = require("express");
const router = express.Router();
const passport = require("passport");

// LOGIN PAGE
router.get("/login", (req, res) => {
    res.render("login");
});

// GOOGLE LOGIN
router.get("/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect("/");
    }
);

// GITHUB LOGIN
router.get("/auth/github",
    passport.authenticate("github", { scope: ["user:email"] })
);

router.get("/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect("/");
    }
);

// LOGOUT
router.get("/logout", (req, res) => {
    req.logout(function (err) {
        if (err) return next(err);
        res.redirect("/");
    });
});

module.exports = router;
