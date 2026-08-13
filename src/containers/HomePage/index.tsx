import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { PostData } from "@/domain/posts/post";
import { Container, Category, AllPostLinks } from "./styles";
import { MainContainer } from "@/components/MainContainer";
import { PostCard } from "@/components/PostCard";
import { Footer } from "@/components/Footer";
import { SITE_NAME } from "@/config/app-config";
import { Menu } from "@/components/Menu";
import { PaginationData } from "@/domain/posts/pagination";
import { Pagination } from "@/components/Pagination";
import Link from "next/link";
import { Loading } from "@/components/Loading";
import { RouteLoading } from "@/components/RouteLoading";
import { NewsBanner } from "@/Banner";

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts = [],
  category,
  pagination,
}: HomePageProps) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <title>
          {category ? `${category.toUpperCase()} - ${SITE_NAME}` : SITE_NAME}
          {pagination?.nextPage ? ` - Página ${pagination.nextPage - 1}` : ""}
        </title>
      </Head>

      <Menu />
      <NewsBanner posts={posts} />
      {category && (
        <Category>
          <a>Categoria: {category}</a>
        </Category>
      )}

      <MainContainer>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Container>
              {posts.map((post) => (
                <PostCard
                  key={post.slug}
                  cover={
                    post.cover?.formats?.small?.url ||
                    post.cover?.url ||
                    "/images/fallback.png"
                  }
                  slug={post.slug}
                  title={post.title}
                />
              ))}
            </Container>

            {pagination && <Pagination {...pagination} />}

            {!pagination?.nextPage && (
              <Link href="/post/page/1">
                <AllPostLinks>Ver todos os posts</AllPostLinks>
              </Link>
            )}
          </>
        )}
      </MainContainer>

      <Footer />
    </>
  );
}
