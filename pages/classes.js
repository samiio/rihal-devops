import Meta from "../components/Meta";
import { classController, studentController } from "rihal-devops-model";
import { useDisclosure, Center } from "@chakra-ui/react";
import { useState } from "react";
import BasicTable from "../components/BasicTable";
import BasicCreateModal from "../components/BasicCreateModal";

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

  const getCount = (id) => {
    const students = studentController.getAll().table;
    const aClass = classController.getAll().getRecordById(id);
    return aClass.getCount(students);
  };

  const getAverageAge = (id) => {
    const students = studentController.getAll().table;
    const aClass = classController.getAll().getRecordById(id);
    const average = aClass.getAverageAge(students);
    return Number.isNaN(average) ? 0 : average;
  };

  const onItemEdited = (id, value) => {
    classController.update(id, value);
    setClasses(classController.getAll().table);
  };

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
        onItemEdited={onItemEdited}
        getCount={getCount}
        getAverageAge={getAverageAge}
      />
    </div>
  );
};

export default ClassesPage;
