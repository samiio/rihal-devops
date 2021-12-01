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

const ClassTable = ({ classList, destroy }) => (
  <Table variant="striped" size="lg">
    <TableCaption placement="top">Available classes</TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Class</Th>
      </Tr>
    </Thead>
    <Tbody>
      {classList.map((el) => (
        <Tr key={el.id}>
          <Td isNumeric>{el.id}</Td>
          <Td>{el.name}</Td>
          <Td>
            <Button colorScheme="teal">Edit</Button>
          </Td>
          <Td>
            <Button colorScheme="red" onClick={() => destroy(el.id)}>
              <DeleteIcon />
            </Button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default ClassTable;
