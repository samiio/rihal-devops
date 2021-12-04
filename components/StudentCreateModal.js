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
  FormControl,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { countryController, classController } from "rihal-devops-model";

const StudentCreateModal = ({
  isOpen,
  onOpen,
  onClose,
  name,
  setName,
  createClicked,
}) => {
  const mappedCountries = countryController.getAll().table.map((el) => ({
    value: el.id,
    label: el.name,
  }));
  const mappedClasses = classController.getAll().table.map((el) => ({
    value: el.id,
    label: el.name,
  }));

  return (
    <div>
      <Button colorScheme="blue" w={8} h={8} onClick={onOpen} borderRadius={50}>
        <AddIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Student</ModalHeader>
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

              <FormControl pb={3}>
                <Select
                  isMulti
                  name="countryId"
                  options={mappedCountries}
                  placeholder="Select countries"
                  closeMenuOnSelect={false}
                />
              </FormControl>

              <Select
                isMulti
                name="classId"
                options={mappedClasses}
                placeholder="Select classes"
                closeMenuOnSelect={false}
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
