import React from 'react';

import { Tooltip } from './Tooltip';

export default {
  title: "Example/Tooltip",
  component: Tooltip,
}

const Template = (args) => <Tooltip {...args} />;

const TooltipText = ({ text }) => {
  return (
    <div>
        <div className="tooltip-tip">
        </div>
      <div
        className="content"
      >
        <h1>Title</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export const TooltipWithText = Template.bind({});
TooltipWithText.args = {
  children: <TooltipText text="lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! lots of text! "/>
};