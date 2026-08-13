import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { PostData } from "@/domain/posts/post";

import {
  Banner,
  BackgroundImage,
  Overlay,
  Content,
  Category,
  Title,
  ReadMore,
  Navigation,
  ArrowButton,
  Dots,
  Dot,
} from "./styled";

type NewsBannerProps = {
  posts: PostData[];
};

export const NewsBanner = ({ posts }: NewsBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredPosts = posts.slice(0, 4);

  useEffect(() => {
    if (featuredPosts.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === featuredPosts.length - 1 ? 0 : current + 1,
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  if (!featuredPosts.length) {
    return null;
  }

  const post = featuredPosts[currentIndex];

  const imageUrl = post.cover.formats?.large?.url || post.cover.url;

  const handlePrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? featuredPosts.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((current) =>
      current === featuredPosts.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <Banner>
      <BackgroundImage>
        <Image
          src={imageUrl}
          alt={post.cover.alternativeText || post.title}
          fill
          priority={currentIndex === 0}
          sizes="100vw"
        />
      </BackgroundImage>

      <Overlay />

      <Content>
        <Category>{post.category.name}</Category>

        <Title>{post.title}</Title>

        <Link href={`/post/${post.slug}`} passHref legacyBehavior>
          <ReadMore>Ler notícia →</ReadMore>
        </Link>
      </Content>

      {featuredPosts.length > 1 && (
        <>
          <Navigation>
            <ArrowButton
              type="button"
              onClick={handlePrevious}
              aria-label="Notícia anterior"
            >
              ←
            </ArrowButton>

            <ArrowButton
              type="button"
              onClick={handleNext}
              aria-label="Próxima notícia"
            >
              →
            </ArrowButton>
          </Navigation>

          <Dots>
            {featuredPosts.map((item, index) => (
              <Dot
                key={item.id}
                type="button"
                $active={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para notícia ${index + 1}`}
              />
            ))}
          </Dots>
        </>
      )}
    </Banner>
  );
};
