import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PostData } from "@/domain/posts/post";
import { GetStaticProps } from "next";
import { title } from "process";

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export type HomeProps = {
  posts: PostData[];
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    "sort=id:desc&pagination[start]=0&pagination[limit]=30",
  );
  console.log(posts);
  return {
    props: { posts },
  };
};
