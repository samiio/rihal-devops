import Meta from "../components/Meta";
import { classController } from "rihal-devops-model";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import TableClass from "../components/TableClass";
import CreateClassModal from "../components/CreateClassModal";

const ClassesPage = () => {
  const [classes, setClasses] = useState(classController.getAll().table);
  const [name, setName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDestroyClick = (id) => {
    classController.destroy(id);
    setClasses(classController.getAll().table);
  };

  const handleCreateClick = (e) => {
    e.preventDefault();
    classController.create(name);
    onClose();
    setClasses(classController.getAll().table);
  };

  return (
    <div>
      <Meta title="Classes" />

      <CreateClassModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        name={name}
        setName={setName}
        createClicked={handleCreateClick}
      />

      <TableClass classList={classes} destroy={handleDestroyClick} />
    </div>
  );
};

export default ClassesPage;
