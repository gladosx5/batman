import React from 'react';
import { createPortal } from 'react-dom';
import GothamScene from './GothamScene';

const GothamPortal = () => {
  const gothamRoot = document.getElementById('gotham-portal');
  
  if (!gothamRoot) {
    return null;
  }

  return createPortal(<GothamScene />, gothamRoot);
};

export default GothamPortal;