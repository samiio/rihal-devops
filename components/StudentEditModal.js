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
import { EditIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { countryController, classController } from "rihal-devops-model";

const StudentEditModal = ({
  isOpen,
  onOpen,
  onClose,
  elId,
  elName,
  elDob,
  editName,
  setEditName,
  editDob,
  setEditDob,
  editClassId,
  setEditClassId,
  editCountryId,
  setEditCountryId,
  editClicked,
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
      <Button colorScheme="teal" w={8} h={8} onClick={onOpen}>
        <EditIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {elName}</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={editClicked} id={elId}>
            <ModalBody>
              <Input
                placeholder={elName}
                variant="filled"
                mb={3}
                type="text"
                onChange={(e) => setEditName(e.target.value)}
                value={editName}
                isRequired={true}
              />

              <Input
                placeholder={elDob}
                variant="filled"
                mb={3}
                type="date"
                min="1900-01-01"
                max="2003-12-31"
                onChange={(e) => setEditDob(e.target.value)}
                value={elDob}
                isRequired={true}
              />

              <FormControl pb={3}>
                <Select
                  isMulti
                  value={editCountryId}
                  options={mappedCountries}
                  placeholder="Select countries"
                  onChange={(e) => setEditCountryId(e)}
                  isRequired={true}
                />
              </FormControl>

              <Select
                isMulti
                value={editClassId}
                options={mappedClasses}
                placeholder="Select classes"
                onChange={(e) => setEditClassId(e)}
                isRequired={true}
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
    </div>
  );
};

export default StudentEditModal;
