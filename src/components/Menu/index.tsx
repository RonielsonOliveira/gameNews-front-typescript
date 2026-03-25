import Link from "next/link";
import { CategoriesWrapper, Container, LogoWrapper, MenuLink } from "./styled";
import { SITE_NAME } from "@/config/app-config";
import Logo from "..//..//utils/img/Logo.png";
import Image from "next/image";

export const Menu = () => {
  return (
    <Container>
      <LogoWrapper>
        <Link href="/">
          <Image src={Logo} alt="logo" priority />
        </Link>
      </LogoWrapper>
      <CategoriesWrapper>
        <MenuLink color="#E60012">
          <Link href="/categories/Nintendo" className="nintendo">
            Nintendo
          </Link>
        </MenuLink>
        <MenuLink color="#0078F2">
          <Link href="/categories/Pc" className="pc">
            Pc
          </Link>
        </MenuLink>
        <MenuLink color="#003791">
          <Link href="/categories/Playstation" className="playstation">
            Playstation
          </Link>
        </MenuLink>
        <MenuLink color="#107C10">
          <Link href="/categories/Xbox" className="xbox">
            Xbox
          </Link>
        </MenuLink>
      </CategoriesWrapper>
    </Container>
  );
};
