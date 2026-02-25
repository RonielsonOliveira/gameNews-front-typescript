import Link from "next/link";
import { Date } from "../Date";
import { CategoryLink, Container } from "./styled";
export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} | {""}
      <CategoryLink href={`/categories/${category}`}>{category}</CategoryLink>
    </Container>
  );
};
