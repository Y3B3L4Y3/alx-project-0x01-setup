import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [user, setUser] = useState<Omit<UserData, "id">>({
    name: "",
    username: "",
    email: "",
    address: { street: "", suite: "", city: "", zipcode: "", geo: { lat: "", lng: "" } },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const handleChange = (field: string, value: string) => {
    if (field.startsWith("address.")) {
      const key = field.split(".")[1];
      setUser({ ...user, address: { ...user.address, [key]: value } });
    } else if (field.startsWith("geo.")) {
      const key = field.split(".")[1];
      setUser({ ...user, address: { ...user.address, geo: { ...user.address.geo, [key]: value } } });
    } else if (field.startsWith("company.")) {
      const key = field.split(".")[1];
      setUser({ ...user, company: { ...user.company, [key]: value } });
    } else {
      setUser({ ...user, [field]: value });
    }
  };

  const handleSubmit = () => {
    onAddUser({ ...user, id: Date.now() });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">Add User</h2>
        <input
          className="border p-2 w-full"
          placeholder="Name"
          value={user.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Username"
          value={user.username}
          onChange={(e) => handleChange("username", e.target.value)}
        />
        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={user.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Add User
        </button>
        <button
          className="text-gray-600 px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserModal;
