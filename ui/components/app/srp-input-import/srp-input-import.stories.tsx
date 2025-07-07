import React from 'react';
import SrpInputImport from '.';

export default {
  title: 'Components/App/SrpInputImport',
  component: SrpInputImport,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const Template = (args, { updateArgs }) => {
  const handleChange = (event) => {
    args.onChange?.(event);
    updateArgs({ value: event.target.value });
  };

  return <SrpInputImport {...args} onChange={handleChange} />;
};

export const DefaultStory = Template.bind({});
DefaultStory.storyName = 'Default';
