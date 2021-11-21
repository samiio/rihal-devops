import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { Center } from "@chakra-ui/react";

const Nav = () => (
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
      </ul>
    </nav>
  </Center>
);

export default Nav;
