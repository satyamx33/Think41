import React from "react";
import { motion } from "framer-motion";

const MemberDetailsPage = () => {
  const member = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    joinedDate: "2022-01-15",
  };

  return (
    <motion.div
      className="p-6 bg-white shadow-md rounded-xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Member Details</h2>
      <p>
        <strong>Name:</strong> {member.name}
      </p>
      <p>
        <strong>Email:</strong> {member.email}
      </p>
      <p>
        <strong>Joined Date:</strong> {member.joinedDate}
      </p>
    </motion.div>
  );
};

export default MemberDetailsPage;
