import { MyLabel } from '../../components/MyLabel';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select'},
        customFontColor: { control: 'color' },
      },
  } satisfies Meta<typeof MyLabel>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
      size: 'h1',
      allCaps: false
    },
  };

  export const AllCaps: Story = {
    args: {
          size: 'normal',
          allCaps: true
      },
  };

  export const Secondary: Story = {
    args: {
      size: 'normal',
      color: 'secondary'
    },
  };

  export const Tertiary: Story = {
    args: {
        size: 'normal',
        color: 'tertiary'
      },
  };


