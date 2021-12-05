import { Container, Flex, VStack } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  const ssr = typeof window === "undefined";

  return (
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
            {!ssr ? children : null}
          </VStack>
        </Flex>
      </Container>
    </div>
  );
};

export default Layout;
