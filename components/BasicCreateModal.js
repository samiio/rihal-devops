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
import { AddIcon } from "@chakra-ui/icons";

const BasicCreateModal = ({
  title,
  isOpen,
  onOpen,
  onClose,
  name,
  setName,
  createClicked,
}) => {
  return (
    <div>
      <Button colorScheme="blue" w={8} h={8} onClick={onOpen} borderRadius={50}>
        <AddIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add {title}</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={createClicked}>
            <ModalBody>
              <Input
                placeholder="Name"
                variant="filled"
                mb={6}
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                isRequired={true}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type="submit">
                Add
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BasicCreateModal;
