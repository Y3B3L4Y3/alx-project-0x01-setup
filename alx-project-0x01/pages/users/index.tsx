import React from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersProps {
  posts: UserProps[];
}

const Users = ({ posts }: UsersProps): JSX.Element => {
  return (
    <main className="p-4 flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
