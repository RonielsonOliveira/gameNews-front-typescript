import { Container } from "./styled";

export const Footer = () => {
  return (
    <Container>
      <p>
        <strong>Game News</strong> © {new Date().getFullYear()} — Notícias,
        análises e novidades do universo dos games.
      </p>
    </Container>
  );
};
