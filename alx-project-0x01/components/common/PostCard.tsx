import React from "react";

const PostCard: React.FC = () => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="font-semibold">Post Title</h2>
      <p className="text-gray-600">Post description...</p>
    </div>
  );
};

export default PostCard;
