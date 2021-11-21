import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component }) => {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}

export default App;