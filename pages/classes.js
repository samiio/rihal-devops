import Meta from "../components/Meta";
import AddClassModal from "../components/AddClassModal";
import { classController } from "rihal-devops-model";
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
import { useState } from "react";

const ClassesPage = () => {
  const classList = classController.getAll();
  const [myClasses, setClasses] = useState(classList.table);

  return (
    <div>
      <Meta title="Classes" />

      <AddClassModal />

      <Table variant="striped" size="lg">
        <TableCaption placement="top">Available classes</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Class</Th>
          </Tr>
        </Thead>
        <Tbody>
          {myClasses.map((el) => (
            <Tr key={el.id}>
              <Td isNumeric>{el.id}</Td>
              <Td>{el.name}</Td>
              <Td>
                <Button colorScheme="teal">Edit</Button>
              </Td>
              <Td>
                <Button
                  colorScheme="red"
                  onClick={() => classController.destroy(el.id)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default ClassesPage;
