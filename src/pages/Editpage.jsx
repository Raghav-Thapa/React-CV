import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const EditPage = () => {
  const { fullName, role, email, setFullName, setRole, setEmail } =
    useContext(UserContext);

  const [newFullName, setNewFullName] = useState(fullName);
  const [newRole, setNewRole] = useState(role);
  const [newEmail, setNewEmail] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(newFullName);
    setRole(newRole);
    setEmail(newEmail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={newFullName}
          onChange={(e) => setNewFullName(e.target.value)}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EditPage;
