import React from "react";

const modal = {
    position: 'fixed',
    left: "20rem",
    top:" 0px",
    width: "100rem",
    height: "100vh",
    overflow: "auto",
    margintop: "5rem",
    backgroundcolor: "rgba(0, 0, 0, 0.8)",
    cursor:"pointer"
  };
   
  
const close = {
  position: "absolute",
  top: 15,
  right: 35,
  color: "blac",
  fontSize: 40,
  fontWeight: "bold",
  cursor: "pointer"
};

const modalContent = {
    display: "flex",
    height: "50rem",
    margin: "auto",
    cursor:"pointer"
   
};

export const Modal = ({ onOpen, children }) => {
  return <div onClick={onOpen}> {children}</div>;
};

export const ModalContent = ({ onClose, children }) => {
  return (
    <div style={modal} id="modal" >
      <span style={close} onClick={onClose}>
        &times;
      </span>
      <div style={modalContent} >{children}</div>
    </div>
  );
};

export const Modal2 = ({ onOpen2, children }) => {
    return <div onClick={onOpen2}> {children}</div>;
  };
  
  export const ModalContent2 = ({ onClose2, children }) => {
    return (
      <div style={modal} id="modal" >
        <span style={close} onClick={onClose2}>
          &times;
        </span>
        <div style={modalContent} >{children}</div>
      </div>
    );
  };

  export const Modal3 = ({ onOpen3, children }) => {
    return <div onClick={onOpen3}> {children}</div>;
  };
  
  export const ModalContent3 = ({ onClose3, children }) => {
    return (
      <div style={modal} id="modal" >
        <span style={close} onClick={onClose3}>
          &times;
        </span>
        <div style={modalContent} >{children}</div>
      </div>
    );
  };