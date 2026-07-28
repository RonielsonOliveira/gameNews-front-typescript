import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Menu } from ".";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
  args: {},
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const MenuDefault: Story = {
  args: {
    // coloque aqui as props do PostCard
  },
};
