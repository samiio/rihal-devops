import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";

const App = ({ Component }) => (
  <ChakraProvider>
    <Meta />
    <Layout>
      <Component />
    </Layout>
  </ChakraProvider>
);

export default App;
