import Meta from "../components/Meta";
import { countryController, studentController } from "rihal-devops-model";
import { useDisclosure, Center } from "@chakra-ui/react";
import { useState } from "react";
import BasicTable from "../components/BasicTable";
import BasicCreateModal from "../components/BasicCreateModal";

const CountriesPage = () => {
  const [countries, setCountries] = useState(countryController.getAll().table);
  const [name, setName] = useState("");

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();

  const handleCreateClick = (e) => {
    e.preventDefault();
    countryController.create(name);
    onCreateClose();
    setCountries(countryController.getAll().table);
  };

  const handleDestroyClick = (id) => {
    countryController.destroy(id);
    setCountries(countryController.getAll().table);
  };

  const getCount = (id) => {
    const students = studentController.getAll().table;
    const country = countryController.getAll().getRecordById(id);
    return country.getCount(students);
  };

  const getAverageAge = (id) => {
    const students = studentController.getAll().table;
    const country = countryController.getAll().getRecordById(id);
    const average = country.getAverageAge(students);
    return Number.isNaN(average) ? 0 : average;
  };

  const onItemEdited = (id, value) => {
    countryController.update(id, value);
    setCountries(countryController.getAll().table);
  };

  return (
    <div>
      <Meta title="Countries" />

      <Center>
        <BasicCreateModal
          title="Country"
          isOpen={isCreateOpen}
          onOpen={onCreateOpen}
          onClose={onCreateClose}
          name={name}
          setName={setName}
          createClicked={handleCreateClick}
        />
      </Center>

      <BasicTable
        title="Country"
        caption="Available countries"
        classList={countries}
        destroy={handleDestroyClick}
        onItemEdited={onItemEdited}
        getCount={getCount}
        getAverageAge={getAverageAge}
      />
    </div>
  );
};

export default CountriesPage;
