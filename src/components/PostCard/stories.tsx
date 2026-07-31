import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PostCard } from ".";

const meta: Meta<typeof PostCard> = {
  title: "Components/PostCard",
  component: PostCard,
  args: {
    slug: "default-slug",
    title: "default title",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8XixlExWPsfpeBkV__54rlcW_Nj4kCQkMMbl_GPccPf18hlJRHWdOy0&s=10",
  },
};

export default meta;

type Story = StoryObj<typeof PostCard>;

export const TypeScriptCover: Story = {
  args: {},
};
export const JavaScriptCover: Story = {
  args: {
    cover:
      "https://i.pinimg.com/736x/f9/81/9b/f9819bde416ba4e12513ff713e6c930c.jpg",
  },
};
