import type { Meta, StoryObj } from "@storybook/react";

import { SampleCard } from "./sample-card";

const meta = {
  title: "SampleCard",
  component: SampleCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SampleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "SampleCardTitle",
    description: "Consectetur quis laborum duis ullamco reprehenderit velit.",
  },
};
