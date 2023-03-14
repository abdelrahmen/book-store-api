let queries = require("../database/queries");
let connection = require("../database/connection");
const util = require("../util/string.generator");

exports.getBooksList = async (req, res) => {
  try {
    let query = queries.queryList.GET_BOOK_LIST_QUERY;
    let result = await connection.query(query);
    return res.status(200).send(result.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
};

exports.getBookDetails = async (req, res) => {
  try {
    let bookId = req.params.bookId;
    let query = queries.queryList.GET_BOOK_DETAILS_QUERY;
    let result = await connection.query(query, [bookId]);
    return res.status(200).send(result.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
};

exports.saveBook = async (req, res) => {
  try {
    let bookTitle = req.query.bookTitle;
    let bookDescription = req.query.bookDescription;
    let bookAuthor = req.query.bookAuthor;
    let bookPublisher = req.query.bookPublisher;
    let bookPages = req.query.bookPages;
    let storeCode = req.query.storeCode;

    if (!bookTitle || !bookDescription) {
      res.status(500).send({ error: "Store Name and address are required" });
    } else {
      let values = [
        bookTitle,
        bookDescription,
        bookAuthor,
        bookPublisher,
        bookPages,
        storeCode,
      ];
      let saveBookQuery = queries.queryList.SAVE_BOOK_QUERY;
      let result = await connection.query(saveBookQuery, values);
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.updateBook = async (req, res) => {
  try {
    let bookId = req.query.bookId;
    let bookTitle = req.query.bookTitle;
    let bookDescription = req.query.bookDescription;
    let bookAuthor = req.query.bookAuthor;
    let bookPublisher = req.query.bookPublisher;
    let bookPages = req.query.bookPages;
    let storeCode = req.query.storeCode;

    if (!bookTitle || !bookDescription || !bookAuthor || !bookId) {
      res.status(500).send({ error: "All Book Data are required" });
    } else {
      let values = [
        bookId,
        bookTitle,
        bookDescription,
        bookAuthor,
        bookPublisher,
        bookPages,
        storeCode,
      ];
      let updateBookQuery = queries.queryList.UPDATE_BOOK_QUERY;
      let result = await connection.query(updateBookQuery, values);
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    let bookId = req.query.bookId;
    if (!bookId) {
      res.status(500).send({ error: "Book Id is required" });
    } else {
      let deleteBookQuery = queries.queryList.DELETE_BOOK_QUERY;
      let result = await connection.query(deleteBookQuery, [bookId]);
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
