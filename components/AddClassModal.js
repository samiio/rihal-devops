import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { classController } from "rihal-devops-model";

const AddClassModal = () => {
  const [name, setName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // form submit
  const handleAddClass = (e) => {
    e.preventDefault();
    classController.create(name);
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Class</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={handleAddClass}>
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
    </>
  );
};

export default AddClassModal;
