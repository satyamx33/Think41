import React, { useState } from "react";

const LendBookForm = ({ books, members, onLendBook }) => {
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [error, setError] = useState({ member: "", book: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const newError = { member: "", book: "" };
    if (!selectedMember) newError.member = "Please select a member.";
    if (!selectedBook) newError.book = "Please select a book.";

    setError(newError);

    if (newError.member || newError.book) {
      return; // Stop submission if there's any error
    }

    // Proceed with submission
    onLendBook(selectedMember, selectedBook);
    setSelectedMember("");
    setSelectedBook("");
    setError({ member: "", book: "" }); // Reset errors after successful submission
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-xl max-w-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lend a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="member"
            className="block text-gray-700 font-medium mb-2"
          >
            Select Member:
          </label>
          <select
            id="member"
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
            className={`w-full p-2 border rounded-md ${
              error.member ? "border-red-500" : ""
            }`}
          >
            <option value="">-- Select a Member --</option>
            {members.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
          {error.member && (
            <p className="text-red-500 text-sm mt-1">{error.member}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="book"
            className="block text-gray-700 font-medium mb-2"
          >
            Select Book:
          </label>
          <select
            id="book"
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value)}
            className={`w-full p-2 border rounded-md ${
              error.book ? "border-red-500" : ""
            }`}
          >
            <option value="">-- Select a Book --</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
          {error.book && (
            <p className="text-red-500 text-sm mt-1">{error.book}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Lend Book
        </button>
      </form>
    </div>
  );
};

export default LendBookForm;
