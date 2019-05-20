const google = require("googleapis");
const analytics = google.analyticsreporting("v4");

module.exports = async (req, res) => {
  console.log("analytics", analytics);
  res.end("hello world");
};
