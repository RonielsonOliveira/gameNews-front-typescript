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
  category: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  if (!posts.length) {
    return <>Página não encontrada...</>;
  }

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const category = ctx.params?.category as string;
  const page = Number(ctx.params?.param ?? 1);

  if (!category || !Number.isInteger(page) || page < 1) {
    return {
      notFound: true,
    };
  }

  const postsPerPage = 4;
  const startFrom = (page - 1) * postsPerPage;

  const categoryQuery = `&filters[category][name][$containsi]=${encodeURIComponent(
    category,
  )}`;

  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;

  const posts = await getAllPosts(urlQuery);
  const numberOfPosts = await countAllPosts(categoryQuery);

  const pagination: PaginationData = {
    nextPage: page + 1,
    numberOfPosts,
    postsPerPage,
    previousPage: page - 1,
    category,
  };

  return {
    props: {
      posts,
      category,
      pagination,
    },
    revalidate: 120,
  };
};
