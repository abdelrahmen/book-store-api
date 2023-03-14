create table  book(
  Book_ID serial NOT null PRIMARY KEY,
  Book_Title VARCHAR(255) NOT NULL,
  Book_Description VARCHAR(255) NOT NULL,
  Book_Author VARCHAR(255) NOT NULL,
  Book_Publisher VARCHAR(255) NOT NULL,
  Book_Pages INT NOT null,
  Store_Code VARCHAR(255) NOT null
);

create table store(
  Store_ID serial NOT null PRIMARY KEY,
  Store_Name VARCHAR(100) NOT NULL,
  Store_Code VARCHAR(255) NOT null,
  Store_Address VARCHAR(200) NOT null
);

