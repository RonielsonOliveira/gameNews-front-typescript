import { Image, Wrapper } from "./styled";
export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return (
    <Wrapper>
      <Image src={coverUrl} alt={alt} />
    </Wrapper>
  );
};
