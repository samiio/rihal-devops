import Meta from "../components/Meta";
import { countryController } from "rihal-devops-model";
import { useDisclosure, Center } from "@chakra-ui/react";
import { useState } from "react";
import BasicTable from "../components/BasicTable";
import BasicCreateModal from "../components/BasicCreateModal";

const CountriesPage = () => {
  const [countries, setCountries] = useState(countryController.getAll().table);
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
    countryController.create(name);
    onCreateClose();
    setCountries(countryController.getAll().table);
  };

  const handleDestroyClick = (id) => {
    countryController.destroy(id);
    setCountries(countryController.getAll().table);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    countryController.update(e.target.id, editName);
    onEditClose();
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
        classList={countries}
        destroy={handleDestroyClick}
        isOpen={isEditOpen}
        onOpen={onEditOpen}
        onClose={onEditClose}
        edit={handleEditClick}
        editName={editName}
        setEditName={setEditName}
      />
    </div>
  );
};

export default CountriesPage;
