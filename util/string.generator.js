const randomstring = require("randomstring");

exports.generateStoreCode = () =>
  randomstring.generate({
    length: 5,
    charset: "alphabetic",
    capitalization: "uppercase",
  });
