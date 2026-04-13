'use client';

import { useEffect } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const router = useRouter();
  const handleClose = onClose || (() => router.back());

  const handleBackdropClick = (evnt: React.MouseEvent<HTMLDivElement>) => {
    if (evnt.target === evnt.currentTarget) {
      handleClose();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleClose]);
  return createPortal(
    <>
      <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
        <div className={css.modal}>{children}</div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
