import Meta from "../components/Meta";
import { classController } from "rihal-devops-model";
import { useDisclosure, Center } from "@chakra-ui/react";
import { useState } from "react";
import ClassTable from "../components/ClassTable";
import ClassCreateModal from "../components/ClassCreateModal";

const ClassesPage = () => {
  const [classes, setClasses] = useState(classController.getAll().table);
  const [name, setName] = useState("");
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  const handleCreateClick = (e) => {
    e.preventDefault();
    classController.create(name);
    onCreateClose();
    setClasses(classController.getAll().table);
  };

  const handleDestroyClick = (id) => {
    classController.destroy(id);
    setClasses(classController.getAll().table);
  };

  const [editName, setEditName] = useState("");
  const handleEditClick = (e) => {
    e.preventDefault();
    classController.update(e.target.id, editName);
    setClasses(classController.getAll().table);
  };

  return (
    <div>
      <Meta title="Classes" />

      <Center>
        <ClassCreateModal
          isOpen={isCreateOpen}
          onOpen={onCreateOpen}
          onClose={onCreateClose}
          name={name}
          setName={setName}
          createClicked={handleCreateClick}
        />
      </Center>

      <ClassTable
        classList={classes}
        destroy={handleDestroyClick}
        edit={handleEditClick}
        editName={editName}
        setEditName={setEditName}
      />
    </div>
  );
};

export default ClassesPage;
