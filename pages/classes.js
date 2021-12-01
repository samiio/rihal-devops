import Meta from "../components/Meta";
import AddClassModal from "../components/AddClassModal";
import { classController } from "rihal-devops-model";

import { useState } from "react";
import TableClass from "../components/TableClass";

const ClassesPage = () => {
  const classList = classController.getAll();
  const [myClasses, setClasses] = useState(classList.table);

  return (
    <div>
      <Meta title="Classes" />

      <AddClassModal />

      <TableClass
        classList={classList.table}
        destroy={classController.destroy}
      />
    </div>
  );
};

export default ClassesPage;
