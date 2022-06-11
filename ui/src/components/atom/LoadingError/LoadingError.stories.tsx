import React from "react";
import { Meta, Story } from "@storybook/react";
import LoadingError, { LoadingErrorProps } from "./LoadingError";

export default {
  title: "Atom/LoadingError",
  component: LoadingError,
} as Meta;

const Template: Story<LoadingErrorProps> = (args) => <LoadingError {...args} />;

export const LoadingErrorStory = Template.bind({});
LoadingErrorStory.args = {
  children: <p>Error reason</p>,
};
