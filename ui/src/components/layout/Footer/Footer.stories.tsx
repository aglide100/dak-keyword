import React from "react";
import { Footer, FooterProps } from "./Footer";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Layout/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const FooterInfo = Template.bind({});
FooterInfo.args = {};
