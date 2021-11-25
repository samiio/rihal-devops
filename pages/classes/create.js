import Meta from "../../components/Meta";
import { Button, Flex, Heading, Input } from "@chakra-ui/react";

const CreateClassPage = () => (
  <div>
    <Meta title="Create class" />
    <Flex direction="column" background="gray.100" p={12} rounded={6}>
      <Heading mb={6}>Create Class</Heading>
      <Input placeholder="Title" variant="filled" mb={6} type="text" />
      <Button colorScheme="teal">Create</Button>
    </Flex>
  </div>
);

export default CreateClassPage;
