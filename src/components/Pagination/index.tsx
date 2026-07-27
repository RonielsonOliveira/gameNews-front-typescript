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
  const categoryName = category || "";
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previoustLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previoustLink} href="/post/page/[...param]" legacyBehavior>
            <a>Previous</a>
          </Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/post/page/[...param]" legacyBehavior>
            <a>Next</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
