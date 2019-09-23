import { useState } from "react";

import Modal from "./modal";
import Button from "./button";

const ButtonWithModal = ({ iconName, children, buttonText }) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleOnClick = () => {
    setModalIsVisible(true);
  };

  const handleOnClose = () => {
    setModalIsVisible(false);
  };

  return (
    <div className="button-with-modal">
      <Button
        iconName={iconName}
        onClick={handleOnClick}
        textIsHidden={true}
        text={buttonText}
      />
      <Modal
        isVisible={modalIsVisible}
        onClose={handleOnClose}
        contentLabel="information"
      >
        {children}
      </Modal>
      <style jsx>
        {`
          .button-with-modal {
            $self: &;
          }
        `}
      </style>
    </div>
  );
};

ButtonWithModal.propTypes = {};

ButtonWithModal.defaultProps = {};

export default ButtonWithModal;
