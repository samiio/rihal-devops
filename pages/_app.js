import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

const App = ({ Component }) => (
  <ChakraProvider>
    <Layout>
      <Component />
    </Layout>
  </ChakraProvider>
);

export default App;
