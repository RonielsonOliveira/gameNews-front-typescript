import Head from "next/head";
import { PostData } from "@/domain/posts/post";
import { Container, Category } from "./styles";
import { Header } from "@/components/Header";
import { MainContainer } from "@/components/MainContainer";
import { PostCard } from "@/components/PostCard";
import { Footer } from "@/components/Footer";
import { SITE_NAME } from "@/config/app-config";
import { Menu } from "@/components/Menu";
export type HomePageProps = {
  posts: PostData[];
  category?: string;
};
export default function HomePage({ posts, category }: HomePageProps) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Este é o meu blog sobre jogos" />
      </Head>
      <Header />
      <Menu />
      {category && (
        <Category>
          <a> Categoria: {category}</a>
        </Category>
      )}

      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
