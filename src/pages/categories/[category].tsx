import HomePage from "@/containers/HomePage";
import { getAllPosts } from "@/data/posts/get-all-posts";
import { PostData } from "@/domain/posts/post";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
export type CategoryProps = {
  posts: PostData[];
  category: string;
};
export default function Category({ posts, category }: CategoryProps) {
  return <HomePage posts={posts} category={category} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;

  const urlQuery = `sort=id:desc
  &pagination[start]=0
  &pagination[limit]=30
  &filters[category][name][$contains]=${encodeURIComponent(category)}`.replace(
    /\s/g,
    "",
  );
  const posts = await getAllPosts(urlQuery);
  console.log(posts);
  return {
    props: { posts, category },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = ["pc", "playstation", "xbox", "nintendo"];

  return {
    paths: categories.map((category) => ({
      params: { category },
    })),
    fallback: "blocking",
  };
};
