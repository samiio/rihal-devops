import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

const BasicEditModal = ({ elId, elName, onItemEdited }) => {
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [editedName, setEditedName] = useState(elName);

  const toggleModal = () => {
    setIsEditingItem(!isEditingItem);
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();
    toggleModal();
    onItemEdited(editedName);
  };

  return (
    <>
      <Button colorScheme="teal" w={8} h={8} onClick={toggleModal}>
        <EditIcon />
      </Button>

      <Modal isOpen={isEditingItem} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {elName}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={onEditFormSubmit} id={elId}>
            <ModalBody>
              <Input type="hidden" value={elId} />
              <Input
                variant="filled"
                mb={6}
                type="text"
                isRequired={true}
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit">
                Confirm
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicEditModal;
