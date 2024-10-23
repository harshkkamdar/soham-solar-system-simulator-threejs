// InfoButton.tsx
import {  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { IconInfoCircle } from '@tabler/icons-react';

const InfoButton = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <Button 
      isIconOnly 
      onPress={onOpen}
      color='secondary' 
      variant='flat'
    >
      <IconInfoCircle />
    </Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="opacity-90">
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Solar System Simulation</ModalHeader>
          <ModalBody>
            <p>This is a simulation of the solar system using react, three.js and nextui</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  </>
  );
};

export default InfoButton;
