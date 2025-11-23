import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

interface UsersProps {
  posts: UserData[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserData[]>(posts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (user: UserData) => {
    setUsers([user, ...users]);
  };

  return (
    <main className="p-4 flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add User
      </button>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
      />

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserData[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
