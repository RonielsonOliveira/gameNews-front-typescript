import { API_URL } from "@/config/app-config";
import { RichTextNode, RichTextTextNode } from "./rich-text-types";

function renderText(children: RichTextTextNode[]): string {
  return children
    .map((child) => {
      let text = child.text;
      if (child.bold) text = `<strong>${text}</strong>`;
      if (child.italic) text = `<em>${text}</em>`;
      return text;
    })
    .join("");
}

export function richTextToHtml(nodes: RichTextNode[]): string {
  return nodes
    .map((node) => {
      switch (node.type) {
        case "paragraph":
          return `<p>${renderText(node.children)}</p>`;

        case "heading":
          const level = Math.min(6, node.level || 1);
          return `<h${level}>${renderText(node.children)}</h${level}>`;

        case "list":
          const tag = node.format === "ordered" ? "ol" : "ul";
          return `<${tag}>
            ${node.children
              .map((item) => {
                if (item.type === "list-item") {
                  return `<li>${renderText(item.children)}</li>`;
                }
                // suporte listas aninhadas
                if (item.type === "list") {
                  return richTextToHtml([item]);
                }
                return "";
              })
              .join("")}
          </${tag}>`;
        case "image": {
          const img = node.image;
          if (!img?.url) return "";

          const src = img.url.startsWith("http")
            ? img.url
            : `${API_URL}${img.url}`;

          return `
            <figure>
              <img
                src="${src}"
                alt="${img.alternativeText || ""}"
                style="
                  display: block;
                  max-width: 100%;
                  width: 700px;
                  height: auto;
                  margin: 0 auto;
      "              />
            </figure>
          `;
        }

        default:
          return "";
      }
    })
    .join("");
}
