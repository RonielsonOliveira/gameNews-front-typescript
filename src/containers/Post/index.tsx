import { Comments } from "@/components/Comments";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { MainContainer } from "@/components/MainContainer";
import { Menu } from "@/components/Menu";
import { PostContainer } from "@/components/PostContainer";
import { PostCover } from "@/components/PostCover";
import { PostDetails } from "@/components/PostDetails";
import { SITE_NAME } from "@/config/app-config";
import { PostData } from "@/domain/posts/post";
import { removeHtml } from "@/utils/remove-html";
import Head from "next/head";

export type PostProps = {
  post: PostData & { htmlContent: string };
};

export const Post = ({ post }: PostProps) => {
  const cover =
    post.cover.formats?.large?.url ||
    post.cover.formats?.medium?.url ||
    post.cover.formats?.small?.url ||
    post.cover.url;
  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.htmlContent).slice(0, 150)}
        />
      </Head>
      <Menu />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={cover} alt={post.title} />
        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.createdAt}
        />
        <PostContainer content={post.htmlContent} />
        <Comments title={post.title} slug={post.slug} />
      </MainContainer>
      <Footer />
    </>
  );
};
