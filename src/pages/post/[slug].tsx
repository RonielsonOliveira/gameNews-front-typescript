console.log(">>> pages/post/[slug].tsx carregado <<<");

import { Post } from "@/containers/Post";
import { countAllPosts } from "@/data/posts/count-all-posts";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { getPost } from "@/data/posts/get-post";
import { PostData } from "@/domain/posts/post";
import { GetStaticPaths, GetStaticProps } from "next";

export type DynamicPostProps = {
  post: PostData & { htmlContent: string };
};
const DynamicPost = ({ post }: DynamicPostProps) => {
  console.log("POST NO CLIENTE:", post);
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`pagination[pageSize]=${numberOfPosts}`);
  console.log(
    "SLUGS GERADOS:",
    posts.map((p) => p.slug),
  );
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const posts = await getPost(slug);

  if (!posts.length) {
    return { notFound: true };
  }

  return {
    props: { post: posts[0] },
  };
};
