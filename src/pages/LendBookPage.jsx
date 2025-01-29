import React, { useReducer } from "react";
import { motion } from "framer-motion";
import "./LendBookPage.scss";

const initialState = {
  selectedMember: "",
  selectedBooks: [],
  error: "",
  message: "",
  progress: 0,
};

function lendingReducer(state, action) {
  switch (action.type) {
    case "SET_MEMBER":
      return {
        ...state,
        selectedMember: action.payload,
        progress: action.payload
          ? state.selectedBooks.length > 0 && state.selectedBooks.length <= 2
            ? 2
            : 1
          : 0,
        message: "",
      };
    case "TOGGLE_BOOK":
      const selectedBooks = state.selectedBooks.includes(action.payload)
        ? state.selectedBooks.filter((book) => book !== action.payload)
        : [...state.selectedBooks, action.payload];

      let progress = 0;
      if (selectedBooks.length === 0) {
        progress = state.selectedMember ? 1 : 0;
      } else if (selectedBooks.length > 0 && selectedBooks.length <= 2) {
        progress = 2;
      } else {
        progress = 1;
      }

      let message = "";
      if (selectedBooks.length === 0) {
        message = "Select a book.";
      } else if (selectedBooks.length > 2) {
        message = "Maximum limit 2 books possible.";
      } else {
        message = "Success!";
      }

      return { ...state, selectedBooks, progress, message };
    case "SUBMIT":
      if (state.selectedBooks.length === 0) {
        return { ...state, error: "Please select at least one book." };
      } else if (state.selectedBooks.length > 2) {
        return { ...state, error: "You cannot lend more than 2 books." };
      } else if (!state.selectedMember) {
        return { ...state, error: "Please select a member." };
      } else {
        return { ...state, error: "", message: "Books lent successfully!" };
      }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const LendBookPage = () => {
  const [state, dispatch] = useReducer(lendingReducer, initialState);

  const members = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];

  const books = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Book ${i + 1}`,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });

    if (!state.error && state.message === "Books lent successfully!") {
      alert(
        `Books "${state.selectedBooks.join(", ")}" lent to "${
          state.selectedMember
        }"!`
      );
      dispatch({ type: "RESET" });
    }
  };

  return (
    <motion.div
      className="p-6 bg-white shadow-md rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lend a Book</h2>

      {/* Progress Bar */}
      <div className="progress-container mb-6">
        <motion.div
          className="progress-bar"
          initial={{ width: "0%" }}
          animate={{ width: `${(state.progress / 2) * 100}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <p className="text-sm text-gray-500 mt-1">
          {state.progress}/2 steps completed
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {state.error && <p className="text-red-500 mb-4">{state.error}</p>}
        {state.message && <p className="text-blue-500 mb-4">{state.message}</p>}

        {/* Member Selection */}
        <div className="mb-4">
          <label htmlFor="member" className="block font-medium mb-2">
            Select Member:
          </label>
          <select
            id="member"
            value={state.selectedMember}
            onChange={(e) =>
              dispatch({ type: "SET_MEMBER", payload: e.target.value })
            }
            className="w-full p-2 border rounded-md"
          >
            <option value="">-- Select a Member --</option>
            {members.map((member) => (
              <option key={member.id} value={member.name}>
                {member.name}
              </option>
            ))}
          </select>
        </div>

        {/* Book Selection */}
        <div className="mb-4">
          <label htmlFor="books" className="block font-medium mb-2">
            Select Books (Max: 2):
          </label>
          <div className="grid grid-cols-2 gap-2">
            {books.map((book) => (
              <label
                key={book.id}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={state.selectedBooks.includes(book.title)}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_BOOK", payload: book.title })
                  }
                />
                <span>{book.title}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Lend Books
        </button>
      </form>
    </motion.div>
  );
};

export default LendBookPage;

