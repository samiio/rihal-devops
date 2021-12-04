import { Select } from "@chakra-ui/react";

const SelectData = ({ placeHolderString, data }) => {
  return (
    <div>
      <Select variant="filled" placeholder={placeHolderString}>
        {data.map((el) => (
          <option value={el.id}>{el.name}</option>
        ))}
      </Select>
    </div>
  );
};

export default SelectData;
