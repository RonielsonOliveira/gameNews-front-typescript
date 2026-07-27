import { POSTS_URL } from "@/config/app-config";
import { PostData } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetch-json";
import { markdownToHtml } from "@/utils/markdown-to-html";
import { richTextToHtml } from "@/utils/rich-text-to-html";
import { RichTextNode } from "@/utils/rich-text-types";

type PostResponse = {
  data: PostData[];
};

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const encodedSlug = encodeURIComponent(slugString);
  const url = new URL(POSTS_URL);
  url.searchParams.set("filters[slug][$eq]", encodedSlug);

  const jsonPosts = await fetchJson<PostResponse>(url.toString());
  const post = jsonPosts.data[0];
  const htmlContent = richTextToHtml(post.content);
  const finalContent: PostData & { htmlContent: string } = {
    ...post,
    htmlContent,
  };
  return [finalContent];
};
