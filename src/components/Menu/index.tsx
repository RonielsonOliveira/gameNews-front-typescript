"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  CategoriesWrapper,
  Container,
  InnerContainer,
  LogoWrapper,
  MenuLink,
  MobileButton,
  MobileMenu,
} from "./styled";

import Logo from "../../utils/img/Logo.png";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Container>
      <InnerContainer>
        <LogoWrapper>
          <Link href="/">
            <Image src={Logo} alt="logo" priority />
          </Link>
        </LogoWrapper>

        {/* BOTÃO MOBILE */}
        <MobileButton onClick={toggleMenu}>☰</MobileButton>

        {/* MENU DESKTOP */}
        <CategoriesWrapper className="desktop">
          <MenuLink color="#E60012">
            <Link href="/categories/Nintendo/page/1">Nintendo</Link>
          </MenuLink>
          <MenuLink color="#0078F2">
            <Link href="/categories/Pc/page/1">Pc</Link>
          </MenuLink>
          <MenuLink color="#003791">
            <Link href="/categories/Playstation/page/1">Playstation</Link>
          </MenuLink>
          <MenuLink color="#107C10">
            <Link href="/categories/Xbox/page/1">Xbox</Link>
          </MenuLink>
        </CategoriesWrapper>

        {/* MENU MOBILE */}
        <MobileMenu isopen={isOpen}>
          <Link
            href="/categories/Nintendo/page/1"
            onClick={() => setIsOpen(false)}
          >
            Nintendo
          </Link>

          <Link href="/categories/Pc/page/1" onClick={() => setIsOpen(false)}>
            Pc
          </Link>

          <Link
            href="/categories/Playstation/page/1"
            onClick={() => setIsOpen(false)}
          >
            Playstation
          </Link>

          <Link href="/categories/Xbox/page/1" onClick={() => setIsOpen(false)}>
            Xbox
          </Link>
        </MobileMenu>
      </InnerContainer>
    </Container>
  );
};
