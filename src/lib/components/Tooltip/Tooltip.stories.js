import React from 'react';

import { Tooltip } from './Tooltip';

export default {
  title: "Example/Tooltip",
  component: Tooltip,
}

const Template = (args) => <Tooltip {...args} />;

const TooltipText = ({ text }) => {
  return (
    <div
      className="content"
    >
      <h1>Title</h1>
      <p>{text}</p>
    </div>
  )
}

export const TooltipWithText = Template.bind({});
TooltipWithText.args = {
  children: <TooltipText text="title content!"/>
};