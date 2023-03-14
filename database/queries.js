//just queries
exports.queryList = {
  GET_STORE_LIST_QUERY:
    "SELECT store_id, store_name, store_code FROM public.store;",
  SAVE_STORE_QUERY:
    "INSERT INTO public.store (store_name, store_code, store_address) VALUES($1, $2, $3);",
  GET_BOOK_LIST_QUERY: "SELECT * FROM public.book;",
  GET_BOOK_DETAILS_QUERY: "SELECT * FROM public.book where book_id = $1;",
  SAVE_BOOK_QUERY:
    "INSERT INTO public.book (book_title, book_description, book_author, book_publisher, book_pages, store_code) VALUES($1, $2, $3, $4, $5, $6);",
  UPDATE_BOOK_QUERY: `UPDATE public.book SET book_title=$2, book_description=$3, book_author=$4, book_publisher=$5, book_pages=$6, store_code=$7 WHERE book_id=$1`,
  DELETE_BOOK_QUERY: `DELETE FROM public.book WHERE book_id=$1;`
};
