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
  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`pagination[pageSize]=${numberOfPosts}`);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;

  if (slug === "page") {
    return {
      notFound: true,
    };
  }
  const posts = await getPost(slug);

  if (!posts.length) {
    return { notFound: true };
  }

  return {
    props: { post: posts[0] },
    revalidate: 120,
  };
};
