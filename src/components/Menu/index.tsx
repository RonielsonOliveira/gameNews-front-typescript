import Link from "next/link";
import { Container } from "./styled";
import { SITE_NAME } from "@/config/app-config";
import Logo from "..//..//utils/img/Logo.png";
import Image from "next/image";

export const Menu = () => {
  return (
    <Container>
      <Link href="/categories/Nintendo">Nintendo</Link>
      <Link href="/categories/Pc">Pc</Link>
      <Link href="/categories/Playstation">Playstation</Link>
      <Link href="/categories/Xbox">Xbox</Link>
    </Container>
  );
};
