import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { Center, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Center>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/students">Students</Link>
          </li>
          <li>
            <Link href="/classes">Classes</Link>
          </li>
          <li>
            <Link href="/countries">Countries</Link>
          </li>
          <li>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </li>
        </ul>
      </nav>
    </Center>
  );
};

export default Nav;
