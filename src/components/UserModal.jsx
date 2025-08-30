import React from "react";

const UserModal = ({ currentUser, setCurrentUser, setCurrentLanguage, setCurrentLevel, setCurrentPage, showUserModal, setShowUserModal }) => {
  if (!showUserModal) return null;

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentLanguage(null);
    setCurrentLevel(null);
    setShowUserModal(false);
    setCurrentPage("login");
  };

  return (
    <div className="user-modal" onClick={() => setShowUserModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={() => setShowUserModal(false)}>&times;</span>
        <h3>User Information</h3>
        <p><strong>Name:</strong> {currentUser.name}</p>
        <p><strong>Email:</strong> {currentUser.email}</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserModal;
