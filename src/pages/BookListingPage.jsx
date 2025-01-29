import React from "react";
import { motion } from "framer-motion";

const BookListingPage = () => {
  const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ];

  return (
    <motion.div
      className="p-6 bg-white shadow-md rounded-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Listing</h2>
      <ul className="list-disc pl-6">
        {books.map((book) => (
          <li key={book.id} className="mb-2">
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default BookListingPage;
