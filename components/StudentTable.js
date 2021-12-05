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
import BasicEditModal from "./BasicEditModal";

const StudentTable = ({
  students,
  destroy,
  edit,
  editName,
  setEditName,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <Table variant="striped">
      <TableCaption placement="top">Students</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>D.O.B.</Th>
        </Tr>
      </Thead>
      <Tbody>
        {students.map((el) => (
          <Tr key={el.id}>
            <Td isNumeric>{el.id}</Td>
            <Td>{el.name}</Td>
            <Td>{el.dob}</Td>
            <Td>
              <BasicEditModal
                elId={el.id}
                elName={el.name}
                editClick={edit}
                editName={editName}
                setEditName={setEditName}
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
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