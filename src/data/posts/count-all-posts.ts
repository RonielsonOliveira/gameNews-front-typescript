import { POSTS_URL } from "@/config/app-config";
import { fetchJson } from "@/utils/fetch-json";

type PostsResponse = {
  meta: {
    pagination: {
      total: number;
    };
  };
};

export const countAllPosts = async (): Promise<number> => {
  const url = `${POSTS_URL}?pagination[pageSize]=1`;
  const response = await fetchJson<PostsResponse>(url);
  return response.meta.pagination.total;
};
