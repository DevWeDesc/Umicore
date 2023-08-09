import { Modal, ModalOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PropsModal {
  isOpen: boolean;
  onClose: () => boolean;
  children: ReactNode;
}

export function GenericModal({ isOpen, onClose, children }: PropsModal) {
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        {children}
      </Modal>
    </>
  );
}
