export type RichTextListItemNode = {
  type: "list-item";
  children: RichTextTextNode[];
};

export type RichTextListNode = {
  type: "list";
  format: "ordered" | "unordered";
  children: RichTextListItemNode[];
};

export type RichTextParagraphNode = {
  type: "paragraph";
  children: RichTextTextNode[];
};

export type RichTextTextNode = {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
};
export type RichTextImageNode = {
  type: "image";
  image: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
};
export type RichTextNode =
  | {
      type: "paragraph";
      children: RichTextTextNode[];
    }
  | {
      type: "heading";
      level?: number;
      children: RichTextTextNode[];
    }
  | {
      type: "list";
      format: "ordered" | "unordered";
      children: RichTextNode[];
    }
  | {
      type: "list-item";
      children: RichTextTextNode[];
    }
  | {
      type: "link";
      url: string;
      children: RichTextTextNode[];
    }
  | RichTextImageNode;
