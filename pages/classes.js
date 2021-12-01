import Meta from "../components/Meta";
import { classController, events } from "rihal-devops-model";
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
import TableClass from "../components/TableClass";

const ClassesPage = () => {
  const [classes, setClasses] = useState(classController.getAll().table);
  const [name, setName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDestroyClick = (id) => {
    classController.destroy(id);
    setClasses(classController.getAll().table);
  };

  const handleCreateClick = (e) => {
    e.preventDefault();
    classController.create(name);
    onClose();
    setClasses(classController.getAll().table);
  };

  return (
    <div>
      <Meta title="Classes" />

      {/* Modal */}
      <div>
        <Button colorScheme="blue" onClick={onOpen}>
          Add
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Class</ModalHeader>
            <ModalCloseButton />

            <form onSubmit={handleCreateClick}>
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

      {/* Table */}
      <TableClass classList={classes} destroy={handleDestroyClick} />
    </div>
  );
};

export default ClassesPage;
