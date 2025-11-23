import React from "react";
import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard = ({ user }: UserCardProps): JSX.Element => {
  return (
    <div className="border rounded p-4 shadow-md w-full max-w-md bg-white">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>
        Address: {user.address.street}, {user.address.suite}, {user.address.city},{" "}
        {user.address.zipcode}
      </p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserCard;
