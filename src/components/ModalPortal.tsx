import React from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ children, isOpen }) => {
  const modalRoot = document.getElementById('modal-portal');
  
  if (!modalRoot || !isOpen) {
    return null;
  }

  return createPortal(children, modalRoot);
};

export default ModalPortal;