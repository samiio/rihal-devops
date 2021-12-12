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

const StudentTable = ({ students, destroy, onItemEdited }) => {
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

  const getAverageAge = () => {
    const average = studentController.getAverageAge();
    return Number.isNaN(average) ? 0 : average;
  };

  return (
    <Table variant="striped">
      <TableCaption placement="top">
        The average age of all students is {getAverageAge()}.
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
                elId={el.id}
                student={el}
                onItemEdited={(value) => onItemEdited(el.id, value)}
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
