const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/User");



module.exports = function (passport) {

    // Save user ID in cookie/session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Get user from database using ID saved in session
    passport.deserializeUser((id, done) => {
        User.findById(id).then(user => done(null, user));
    });

    // GOOGLE STRATEGY
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/auth/google/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    let existingUser = await User.findOne({ googleId: profile.id });
                    if (existingUser) return done(null, existingUser);

                    const newUser = await User.create({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                    });

                    return done(null, newUser);
                } catch (err) {
                    return done(err, null);
                }
            }
        )
    );

    // GITHUB STRATEGY
    passport.use(
        new GitHubStrategy(
            {
                clientID: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                callbackURL: "/auth/github/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    let existingUser = await User.findOne({ githubId: profile.id });
                    if (existingUser) return done(null, existingUser);

                    const newUser = await User.create({
                        githubId: profile.id,
                        displayName: profile.username,
                        email: profile.emails ? profile.emails[0].value : "",
                    });

                    return done(null, newUser);
                } catch (err) {
                    return done(err, null);
                }
            }
        )
    );
};
