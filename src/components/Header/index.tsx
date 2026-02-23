import Link from "next/link";
import { Container } from "./styled";
import { SITE_NAME } from "@/config/app-config";
import Logo from "..//..//utils/img/Logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Image src={Logo} alt="logo" priority />
      </Link>
    </Container>
  );
};
