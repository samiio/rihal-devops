import Meta from "../components/Meta";
import { studentController } from "rihal-devops-model";
import { useDisclosure, Center } from "@chakra-ui/react";
import { useState } from "react";
import StudentCreateModal from "../components/StudentCreateModal";

const StudentsPage = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [countryId, setCountryId] = useState("");
  const [classId, setClassId] = useState("");

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  const handleCreateClick = (e) => {
    e.preventDefault();
    studentController.create(name);
    onCreateClose();
    setCountries(countryController.getAll().table);
  };

  return (
    <div>
      <Center>
        <StudentCreateModal
          isOpen={isCreateOpen}
          onOpen={onCreateOpen}
          onClose={onCreateClose}
          name={name}
          setName={setName}
          createClicked={handleCreateClick}
        />
      </Center>
      <Meta title="Students" />
    </div>
  );
};

export default StudentsPage;
