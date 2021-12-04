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
  Select,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import SelectData from "./SelectData";
import { countryController, classController } from "rihal-devops-model";

const StudentCreateModal = ({
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
                mb={3}
                type="text"
                isRequired={true}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <SelectData
                placeHolderString="Select Country"
                data={countryController.getAll().table}
              />
              <SelectData
                placeHolderString="Select Class"
                data={classController.getAll().table}
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

export default StudentCreateModal;
