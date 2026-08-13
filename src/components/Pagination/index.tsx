import { PaginationData } from "@/domain/posts/pagination";
import { Container, NextLink, PreviousLink } from "./styled";
import Link from "next/link";

export type PaginationProps = PaginationData;

export const Pagination = ({
  nextPage,
  numberOfPosts,
  category,
  previousPage,
  postsPerPage,
}: PaginationProps) => {
  const hasCategory = Boolean(category);

  const nextLink = hasCategory
    ? `/categories/${category}/page/${nextPage}`
    : `/post/page/${nextPage}`;

  const previousLink = hasCategory
    ? `/categories/${category}/page/${previousPage}`
    : `/post/page/${previousPage}`;

  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;

  const hasPreviousPage = previousPage >= 1;

  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link href={previousLink}>Página Anterior</Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link href={nextLink}>Próxima Página</Link>
        </NextLink>
      )}
    </Container>
  );
};
