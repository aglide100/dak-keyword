import React from "react";
import { Meta, Story } from "@storybook/react";
import LoadingComponent from "./Loading";

export default {
  title: "Atom/Loading",
  component: LoadingComponent,
} as Meta;

const Template: Story<{}> = (args) => <LoadingComponent {...args} />;

export const LoadingComponentStory = Template.bind({});
LoadingComponentStory.args = {};
