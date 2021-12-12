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
import { countryController, classController } from "rihal-devops-model";
import FixedSelect from "./FixedSelect";
import { useState } from "react";

const StudentEditModal = ({ elId, student, onItemEdited }) => {
  const mappedCountries = countryController.getAll().table.map((el) => ({
    value: el.id,
    label: el.name,
  }));

  const mappedClasses = classController.getAll().table.map((el) => ({
    value: el.id,
    label: el.name,
  }));

  const [isEditingItem, setIsEditingItem] = useState(false);
  const [editedStudent, setEditedStudent] = useState({
    ...student,
    classId: student.classId.map((id) => ({
      value: id,
      label: mappedClasses.find((el) => el.value === id)?.label,
    })),
    countryId: student.countryId.map((id) => ({
      value: id,
      label: mappedCountries.find((el) => el.value === id)?.label,
    })),
  });

  const toggleModal = () => {
    setIsEditingItem(!isEditingItem);
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();
    toggleModal();
    onItemEdited({
      ...editedStudent,
      classId: editedStudent.classId.map((el) => el.value),
      countryId: editedStudent.countryId.map((el) => el.value),
    });
  };

  return (
    <div>
      <Button colorScheme="teal" w={8} h={8} onClick={toggleModal}>
        <EditIcon />
      </Button>

      <Modal isOpen={isEditingItem} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {student.name}</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={onEditFormSubmit} id={elId}>
            <ModalBody>
              <Input
                variant="filled"
                mb={3}
                type="text"
                onChange={(e) =>
                  setEditedStudent((student) => {
                    student.name = e.target.value;
                    return { ...student };
                  })
                }
                value={editedStudent.name}
                isRequired={true}
              />

              <Input
                variant="filled"
                mb={3}
                type="date"
                min="1900-01-01"
                max="2003-12-31"
                onChange={(e) =>
                  setEditedStudent((student) => {
                    student.dob = e.target.value;
                    return { ...student };
                  })
                }
                value={editedStudent.dob}
                isRequired={true}
              />

              <FormControl pb={3}>
                <FixedSelect
                  isMulti
                  options={mappedCountries}
                  placeholder="Select countries"
                  onChange={(value) =>
                    setEditedStudent((student) => {
                      student.countryId = value;
                      return { ...student };
                    })
                  }
                  value={editedStudent.countryId}
                  required
                />
              </FormControl>

              <FixedSelect
                isMulti
                options={mappedClasses}
                placeholder="Select classes"
                onChange={(value) =>
                  setEditedStudent((student) => {
                    student.classId = value;
                    return { ...student };
                  })
                }
                value={editedStudent.classId}
                required
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
