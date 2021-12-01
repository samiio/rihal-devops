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

const CreateClassModal = ({
  isOpen,
  onOpen,
  onClose,
  name,
  setName,
  createClicked,
}) => {
  return (
    <div>
      <Button colorScheme="blue" onClick={onOpen}>
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Class</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={createClicked}>
            <ModalBody>
              <Input
                placeholder="Title"
                variant="filled"
                mb={6}
                type="text"
                isRequired="true"
                onChange={(e) => setName(e.target.value)}
                value={name}
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

export default CreateClassModal;
