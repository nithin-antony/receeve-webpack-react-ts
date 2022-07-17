import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Table from './Table'

export default {
  title: 'Component/Table',
  component: Table,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  user: {
    name: 'Jane Doe',
  },
}
