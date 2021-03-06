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

const BasicTable = ({
  title,
  caption,
  classList,
  destroy,
  onItemEdited,
  getCount,
  getAverageAge,
}) => {
  return (
    <Table variant="striped">
      <TableCaption placement="top">{caption}</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>{title}</Th>
          <Th>Count</Th>
          <Th>Average Age</Th>
        </Tr>
      </Thead>
      <Tbody>
        {classList.map((el) => {
          return (
            <Tr key={el.id}>
              <Td isNumeric>{el.id}</Td>
              <Td>{el.name}</Td>
              <Td>{getCount(el.id)}</Td>
              <Td>{getAverageAge(el.id)}</Td>
              <Td>
                <BasicEditModal
                  elId={el.id}
                  elName={el.name}
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
          );
        })}
      </Tbody>
    </Table>
  );
};

export default BasicTable;
