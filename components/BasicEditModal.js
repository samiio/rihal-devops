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

const BasicEditModal = ({
  elId,
  elName,
  editClick,
  editName,
  setEditName,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <>
      <Button colorScheme="teal" w={8} h={8} onClick={onOpen}>
        <EditIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {elName}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={editClick} id={elId}>
            <ModalBody>
              <Input type="hidden" value={elId} />
              <Input
                placeholder={elName}
                variant="filled"
                mb={6}
                type="text"
                isRequired={true}
                onChange={(e) => setEditName(e.target.value)}
                value={editName}
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
