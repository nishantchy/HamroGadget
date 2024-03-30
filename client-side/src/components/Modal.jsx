import React from "react";
import Modal from "react-modal";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
const ModalMenu = ({ isOpen, closeModal }) => {
  const { login } = useKindeAuth();
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Please Log In</h2>
        <p>You need to be logged in to add products to the cart.</p>
        {/* Add login/register buttons or any other login UI */}
        <button onClick={login} type="button">
          Sign In
        </button>
      </Modal>
    </div>
  );
};

export default ModalMenu;
