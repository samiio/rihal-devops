import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const ClassTable = ({ classList, destroy, edit, editName, setEditName }) => {
  return (
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
              <EditModal
                elId={el.id}
                elName={el.name}
                editClick={edit}
                editName={editName}
                setEditName={setEditName}
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

const EditModal = ({ elId, elName, editClick, editName, setEditName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="teal" w={8} h={8} onClick={onOpen}>
        <EditIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {elName}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={editClick} id={elId}>
            <ModalBody>
              <Input type="hidden" value={elId} />
              <Input
                placeholder={elName}
                variant="filled"
                mb={6}
                type="text"
                isRequired={true}
                onChange={(e) => setEditName(e.target.value)}
                value={editName}
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
    </>
  );
};

export default ClassTable;
