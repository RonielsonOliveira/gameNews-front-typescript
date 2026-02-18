import { Comments } from "@/components/Comments";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Heading } from "@/components/Heading";
import { MainContainer } from "@/components/MainContainer";
import { PostContainer } from "@/components/PostContainer";
import { PostCover } from "@/components/PostCover";
import { PostDetails } from "@/components/PostDetails";
import { PostData } from "@/domain/posts/post";

export type PostProps = {
  post: PostData & { htmlContent: string };
};

export const Post = ({ post }: PostProps) => {
  console.log("Data" + post.createdAt);
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
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
