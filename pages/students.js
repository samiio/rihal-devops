import Meta from "../components/Meta";
import { studentController } from "rihal-devops-model";
import { useDisclosure, Center } from "@chakra-ui/react";
import { useState } from "react";
import StudentCreateModal from "../components/StudentCreateModal";
import StudentTable from "../components/StudentTable";

const StudentsPage = () => {
  const [students, setStudents] = useState(studentController.getAll().table);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [countryId, setCountryId] = useState(null);
  const [classId, setClassId] = useState(null);

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  const handleCreateClick = (e) => {
    e.preventDefault();
    classId = classId.map((el) => el.value);
    countryId = countryId.map((el) => el.value);
    studentController.create(name, dob, classId, countryId);

    // Calling update() after create()
    // create() does not insert countryId
    const myTable = studentController.getAll().table;
    const id = myTable[myTable.length - 1].id;
    studentController.update(id, name, dob, classId, countryId);

    onCreateClose();
    setStudents(studentController.getAll().table);
  };

  const handleDestroyClick = (id) => {
    studentController.destory(id);
    setStudents(studentController.getAll().table);
  };

  const onItemEdited = (id, { name, dob, classId, countryId }) => {
    studentController.update(id, name, dob, classId, countryId);
    setStudents(studentController.getAll().table);
  };

  return (
    <div>
      <Meta title="Students" />

      <Center>
        <StudentCreateModal
          isOpen={isCreateOpen}
          onOpen={onCreateOpen}
          onClose={onCreateClose}
          name={name}
          setName={setName}
          dob={dob}
          setDob={setDob}
          countryId={countryId}
          setCountryId={setCountryId}
          classId={classId}
          setClassId={setClassId}
          createClicked={handleCreateClick}
        />
      </Center>

      <StudentTable
        students={students}
        destroy={handleDestroyClick}
        onItemEdited={onItemEdited}
      />
    </div>
  );
};

export default StudentsPage;
