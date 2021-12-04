import Meta from "../components/Meta";
import { studentController } from "rihal-devops-model";
import { useDisclosure, Center } from "@chakra-ui/react";
import { useState } from "react";
import StudentCreateModal from "../components/StudentCreateModal";

const StudentsPage = () => {
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
    // studentController.create(name, dob, )
    console.log(name);
    console.log(dob);
    console.log(countryId.map((el) => el.value));
    console.log(classId.map((el) => el.value));
    onCreateClose();
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
          dob={dob}
          setDob={setDob}
          countryId={countryId}
          setCountryId={setCountryId}
          classId={classId}
          setClassId={setClassId}
          createClicked={handleCreateClick}
        />
      </Center>
      <Meta title="Students" />
    </div>
  );
};

export default StudentsPage;
