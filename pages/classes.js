import Meta from "../components/Meta";
import { classController } from "rihal-devops-model";
import { useDisclosure, Center } from "@chakra-ui/react";
import { useState } from "react";
import ClassTable from "../components/ClassTable";
import ClassCreateModal from "../components/ClassCreateModal";

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

      <Center>
        <ClassCreateModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          name={name}
          setName={setName}
          createClicked={handleCreateClick}
        />
      </Center>

      <ClassTable classList={classes} destroy={handleDestroyClick} />
    </div>
  );
};

export default ClassesPage;
