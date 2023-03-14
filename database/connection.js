//select update delete ...
const pool = require("./pool");

// exports.query = pool
//   .query(queryText, queryValues)
//   .then((res) => console.log(res.rows[0]))
//   .catch((e) => console.error(e.stack));

exports.query = (queryText, queryValues) =>
  new Promise((resolve, reject) => {
    pool
      .query(queryText, queryValues)
      .then((res) => resolve(res))
      .catch((e) => reject(e));
  });
