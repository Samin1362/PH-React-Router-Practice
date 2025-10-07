import React from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="text-[40px] text-bold text-center">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center">
        {data.map((book, idx) => (
          <Book book={book} key={idx}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
