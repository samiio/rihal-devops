import {
  Text,
  Box,
  Link,
  Image,
  Stack,
  Center,
  ListItem,
  UnorderedList,
  Tooltip,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const IndexPage = () => {
  const hello = "hello";
  return (
    <div>
      <Box className="header" mb={6}>
        <Text fontSize="4xl">Rihal Devops Challenge</Text>
        <Text textAlign="center">
          <Link
            fontSize="xl"
            href="https://github.com/samiio"
            target="_blank"
            isExternal
          >
            By Sami Ali
          </Link>
        </Text>
      </Box>

      <Divider />

      <Box mt={6} mb={6}>
        <Text textAlign="center">
          <Link
            href="https://github.com/samiio/rihal-devops"
            target="_blank"
            fontSize="lg"
            isExternal
          >
            View on GitHub
            <ExternalLinkIcon mx="4px" />
          </Link>
        </Text>
      </Box>

      <Box mt={6} mb={6}>
        <Text fontSize="lg">NPM package to model the data</Text>
        <UnorderedList>
          <ListItem>
            <Link
              href="https://github.com/samiio/rihal-devops-model"
              target="_blank"
              isExternal
            >
              GitHub <ExternalLinkIcon mx="4px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.npmjs.com/package/rihal-devops-model"
              target="_blank"
              isExternal
            >
              Node <ExternalLinkIcon mx="4px" />
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>

      <Divider />

      <Box mt={6} mb={6}>
        <Text textAlign="center" fontSize="lg">
          Built using
        </Text>
        <Center>
          <Stack direction="row">
            <Tooltip label="JavaScript">
              <Image
                boxSize="60px"
                objectFit="cover"
                src="/img/js.png"
                alt="javascript"
              />
            </Tooltip>
            <Tooltip label="React JS">
              <Image
                boxSize="60px"
                objectFit="cover"
                src="/img/reactjs.png"
                alt="react-js"
              />
            </Tooltip>
            <Tooltip label="Next JS">
              <Image boxSize="60px" src="/img/nextjs.png" alt="next-js" />
            </Tooltip>
            <Tooltip label="NPM">
              <Image boxSize="60px" src="/img/npm.png" alt="npm" />
            </Tooltip>
          </Stack>
        </Center>
      </Box>

      <Divider />

      <Box mt={6} mb={6}>
        <Text fontSize="lg">To do</Text>
        <UnorderedList>
          <ListItem>
            <Text>Refactor and fix bug on edit button (edits last record)</Text>
          </ListItem>
          <ListItem>
            <Text>
              Improve UX (remove class/country from student on delete)
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </div>
  );
};

export default IndexPage;
