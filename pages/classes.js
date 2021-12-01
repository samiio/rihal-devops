import Meta from "../components/Meta";
import AddClassModal from "../components/AddClassModal";
import { classController } from "rihal-devops-model";

import { useState } from "react";
import TableClass from "../components/TableClass";

const ClassesPage = () => {
  const [classes, setClasses] = useState(classController.getAll().table);

  const handleDestroyClick = (id) => {
    classController.destroy(id);
    setClasses(classController.getAll().table);
  };

  return (
    <div>
      <Meta title="Classes" />

      <AddClassModal />

      <TableClass classList={classes} destroy={handleDestroyClick} />
    </div>
  );
};

export default ClassesPage;
