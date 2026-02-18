import { POSTS_URL } from "@/config/app-config";
import { PostData } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetch-json";

type PostResponse = {
  data: PostData[];
};
export const getAllPosts = async (query = ""): Promise<PostData[]> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetchJson<PostResponse>(url);

  return posts.data;
};
