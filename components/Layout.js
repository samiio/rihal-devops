import { Container, Flex, VStack } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => (
  <div>
    <Nav />
    <Container maxWidth="container.lg" padding={0}>
      <Flex height="calc(100vh - 50px)">
        <VStack
          width="full"
          height="full"
          padding={10}
          spacing={10}
          alignItems="center"
          bg="gray.50"
        >
          {children}
        </VStack>
      </Flex>
    </Container>
  </div>
);

export default Layout;
