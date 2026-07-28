import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heading } from "../Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Teste",
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    children: "Título Grande",
    // size: "large", // caso exista essa prop
  },
};
