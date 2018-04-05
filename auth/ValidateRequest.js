function Validate(url, req, res) {
  if (url == "index") {
    if (req._passport.session) {
    //   console.log("req is ", req);
    //   console.log("req.user is ", req._passport.session.user);

      return res.render("index", { user: req._passport.session.user });
    } else {
      return res.render("index");
    }
  } else {
    if (req._passport.session) {
    //   console.log("req is ", req);
    //   console.log("req.user is ", req._passport.session.user);

      return res.redirect("/");
    } else {
      return res.render(url);
    }
  }
}

module.exports = Validate
