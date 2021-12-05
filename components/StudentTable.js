import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  studentController,
  countryController,
  classController,
} from "rihal-devops-model";
import StudentEditModal from "./StudentEditModal";
import BasicEditModal from "./BasicEditModal";

const StudentTable = ({
  students,
  destroy,
  edit,
  isOpen,
  onOpen,
  onClose,
  editName,
  setEditName,
  editDob,
  setEditDob,
  editClassId,
  setEditClassId,
  editCountryId,
  setEditCountryId,
}) => {
  const getCountryString = (countryId) => {
    const countries = countryController.getAll();
    const names = countryId.map((id) => countries.getRecordById(id).name);
    return names.join(", ");
  };

  const getClassString = (classId) => {
    const classes = classController.getAll();
    const names = classId.map((id) => classes.getRecordById(id).name);
    return names.join(", ");
  };

  return (
    <Table variant="striped">
      <TableCaption placement="top">
        The average age of all students is {studentController.getAverageAge()}.
      </TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>Country</Th>
          <Th>Classes</Th>
        </Tr>
      </Thead>
      <Tbody>
        {students.map((el) => (
          <Tr key={el.id}>
            <Td isNumeric>{el.id}</Td>
            <Td>{el.name}</Td>
            <Td>{el.getAge()}</Td>
            <Td>{getCountryString(el.countryId)}</Td>
            <Td>{getClassString(el.classId)}</Td>
            <Td>
              <StudentEditModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                elId={el.id}
                elName={el.name}
                elDob={el.dob}
                editName={editName}
                setEditName={setEditName}
                editDob={editDob}
                setEditDob={setEditDob}
                editClassId={editClassId}
                setEditClassId={setEditClassId}
                editCountryId={editCountryId}
                setEditCountryId={setEditCountryId}
                editClicked={edit}
              />
            </Td>
            <Td>
              <Button
                colorScheme="red"
                w={8}
                h={8}
                onClick={() => destroy(el.id)}
              >
                <DeleteIcon />
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default StudentTable;
