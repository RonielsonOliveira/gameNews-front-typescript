import HomePage from "@/containers/HomePage";
import { countAllPosts } from "@/data/posts/count-all-posts";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PaginationData } from "@/domain/posts/pagination";
import { PostData } from "@/domain/posts/post";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Pagina nao encontrada...</div>;
  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(ctx);
  const page = Number(ctx.params?.param?.[0] ?? 1);

  if (!Number.isInteger(page) || page < 1) {
    return {
      notFound: true,
    };
  }
  const category = ctx.params?.param?.[1] || "";
  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;
  const categoryQuery = category
    ? `&filters[category][name][$containsi]=${encodeURIComponent(category)}`
    : "";
  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;
  console.log(urlQuery);
  console.log(page, category);
  const posts = await getAllPosts(urlQuery);
  const numberOfPosts = await countAllPosts(categoryQuery);
  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };
  return {
    props: { posts, pagination, category },
    revalidate: 120,
  };
};
