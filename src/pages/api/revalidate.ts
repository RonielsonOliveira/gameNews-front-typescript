import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // segurança
  const secret = req.headers["x-webhook-secret"];
  if (secret !== process.env.STRAPI_WEBHOOK_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const { slug, category } = req.body;

    // home
    await res.revalidate("/");

    // página do post
    if (slug) {
      await res.revalidate(`/posts/${slug}`);
    }

    // página da categoria
    if (category) {
      await res.revalidate(`/categories/${category}`);
    }

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ error: "Error revalidating" });
  }
}
