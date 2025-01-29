import React from "react";

const MemberDetails = ({ member }) => {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-white max-w-sm">
      <h1 className="text-2xl font-bold text-gray-800">{member.name}</h1>
      <p className="text-gray-600 mt-2">
        <strong>Email:</strong> {member.email}
      </p>
      <p className="text-gray-600 mt-2">
        <strong>Phone:</strong> {member.phone}
      </p>
      <p className="text-gray-600 mt-2">
        <strong>Membership ID:</strong> {member.id}
      </p>
    </div>
  );
};

export default MemberDetails;
