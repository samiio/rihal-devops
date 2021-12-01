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

const TableClass = ({ classList, destroy }) => (
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
            <Button
              colorScheme="red"
              onClick={() => destroy(el.id)}
            >
              Delete
            </Button>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default TableClass;
