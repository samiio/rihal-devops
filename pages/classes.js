import Meta from "../components/Meta";
import { classController, studentController } from "rihal-devops-model";
import { useDisclosure, Center } from "@chakra-ui/react";
import { useState } from "react";
import BasicTable from "../components/BasicTable";
import BasicCreateModal from "../components/BasicCreateModal";

const ClassesPage = () => {
  const [classes, setClasses] = useState(classController.getAll().table);
  const [name, setName] = useState("");
  const [editName, setEditName] = useState("");

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
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

  const handleEditClick = (e) => {
    e.preventDefault();
    classController.update(e.target.id, editName);
    onEditClose();
    setClasses(classController.getAll().table);
  };

  const getCount = (id) => {
    const students = studentController.getAll().table;
    const aClass = classController.getAll().getRecordById(id);
    return aClass.getCount(students);
  }

  const getAverageAge = (id) => {
    const students = studentController.getAll().table;
    const aClass = classController.getAll().getRecordById(id);
    return aClass.getAverageAge(students);
  }

  return (
    <div>
      <Meta title="Classes" />

      <Center>
        <BasicCreateModal
          title="Class"
          isOpen={isCreateOpen}
          onOpen={onCreateOpen}
          onClose={onCreateClose}
          name={name}
          setName={setName}
          createClicked={handleCreateClick}
        />
      </Center>

      <BasicTable
        title="Class"
        caption="Available classes"
        classList={classes}
        destroy={handleDestroyClick}
        isOpen={isEditOpen}
        onOpen={onEditOpen}
        onClose={onEditClose}
        edit={handleEditClick}
        editName={editName}
        setEditName={setEditName}
        getCount={getCount}
        getAverageAge={getAverageAge}
      />
    </div>
  );
};

export default ClassesPage;
