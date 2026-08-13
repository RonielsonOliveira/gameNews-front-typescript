import Image from "next/image";
import Logo from "@/utils/img/Logo.png";
import { Container, LogoContainer, Spinner } from "./styled";

export const Loading = () => {
  return (
    <Container>
      <LogoContainer>
        <Image src={Logo} alt="Logo" width={280} priority />
        <Spinner />
      </LogoContainer>
    </Container>
  );
};
