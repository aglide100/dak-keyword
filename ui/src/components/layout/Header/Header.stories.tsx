import React from "react";
import Header, { HeaderProps } from "./Header";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Layout/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HeaderInfo = Template.bind({});
HeaderInfo.args = {
  isShow: true,
  scrollDirection: "up",
  scrollY: 0,
};
