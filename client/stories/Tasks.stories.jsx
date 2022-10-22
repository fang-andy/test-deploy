import React from "react";
import Tasks from "../src/components/Tasks_Card";

export default {
  title: 'Tasks',
  component: Tasks,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

const Template = args => <Tasks {...args}/>

export const Task2 = Template.bind({})
Task2.args = {
  border: '5px dashed red',
  fontSize: '15px'
}

export const Task1 = (args) => <Tasks border='5px dashed green' fontSize='30px'  {...args}/>
