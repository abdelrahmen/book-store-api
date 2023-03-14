exports.Book = class Book {
  constructor(bookId, title, isbn, description, publisher, author, pages) {
    this.bookId = bookId;
    this.title = title;
    this.isbn = isbn;
    this.description = description;
    this.publisher = publisher;
    this.pages = pages;
    this.author = author;
  }
};
