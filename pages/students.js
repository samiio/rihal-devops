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

  const [editName, setEditName] = useState("");
  const [editDob, setEditDob] = useState("");
  const [editCountryId, setEditCountryId] = useState(null);
  const [editClassId, setEditClassId] = useState(null);

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

  const handleEditClick = (e) => {
    e.preventDefault();
    editClassId = editClassId.map((el) => el.value);
    editCountryId = editCountryId.map((el) => el.value);
    studentController.update(e.target.id, editName, editDob, editClassId, editCountryId);
    onEditClose();
    setStudents(studentController.getAll().table);
  }

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
        isOpen={isEditOpen}
        onOpen={onEditOpen}
        onClose={onEditClose}
        editName={editName}
        setEditName={setEditName}
        editDob={editDob}
        setEditDob={setEditDob}
        editClassId={editClassId}
        setEditClassId={setEditClassId}
        editCountryId={editCountryId}
        setEditCountryId={setEditCountryId}
        edit={handleEditClick}
      />
    </div>
  );
};

export default StudentsPage;
