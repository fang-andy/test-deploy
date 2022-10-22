import React from "react";
import ButtonTemplate from "../src/components/ButtonTemplate"

export default {
  title: 'Buttons',
  component: ButtonTemplate,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};


const Template = args => <ButtonTemplate {...args}/>

export const ButtonTemp = Template.bind({})
ButtonTemp.args = {
  bgColor: "green"
}

export const TaskButton = (args) => <ButtonTemplate mtop="5" width="full" textColor="white" round="xl" bgColor="green.400" bgHover="green.500" {...args}/>