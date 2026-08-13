import { Loading } from "@/components/Loading";
import HomePage from "@/containers/HomePage";
import { countAllPosts } from "@/data/posts/count-all-posts";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PaginationData } from "@/domain/posts/pagination";
import { PostData } from "@/domain/posts/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export type PageProps = {
  posts: PostData[];
  pagination: PaginationData;
};

export default function Page({ posts, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  if (!posts.length) {
    return <>Página não encontrada...</>;
  }

  return <HomePage posts={posts} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params?.param ?? 1);

  if (!Number.isInteger(page) || page < 1) {
    return {
      notFound: true,
    };
  }

  const postsPerPage = 4;
  const startFrom = (page - 1) * postsPerPage;

  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}`;

  const posts = await getAllPosts(urlQuery);
  const numberOfPosts = await countAllPosts("");

  const pagination: PaginationData = {
    nextPage: page + 1,
    numberOfPosts,
    postsPerPage,
    previousPage: page - 1,
  };

  return {
    props: {
      posts,
      pagination,
    },
    revalidate: 120,
  };
};
