import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PostData } from "@/domain/posts/post";
import { GetServerSideProps } from "next";
export type CategoryProps = {
  posts: PostData[];
  category: string;
};
export default function Category({ posts, category }: CategoryProps) {
  return <HomePage posts={posts} category={category} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const category = Array.isArray(ctx.query.category)
    ? ctx.query.category[0]
    : ctx.query.category;
  const urlQuery = `sort=id:desc
  &pagination[start]=0
  &pagination[limit]=30
  &filters[category][name][$contains]=${encodeURIComponent(category ?? "")}`;
  const posts = await getAllPosts(urlQuery);
  console.log(posts);
  return {
    props: { posts, category: ctx.query.category },
  };
};
