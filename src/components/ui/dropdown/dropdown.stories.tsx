import { BrowserRouter } from 'react-router-dom'

import { Meta, StoryObj } from '@storybook/react' // Импортируем BrowserRouter
import { UserDropdown } from '../../layout/header'

const meta = {
  component: UserDropdown,
  tags: ['autodocs'],
  title: 'Components/UserDropdown',
} satisfies Meta<typeof UserDropdown>

export default meta
type Story = StoryObj<typeof meta>

// Декоратор для оборачивания компонента в BrowserRouter
const withRouter = (Story: any) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)

export const Default: Story = {
  args: {
    avatar: 'https://ui-avatars.com/api/?name=John+Doe',
    email: 'john.doe@example.com',
    onLogOut: () => console.log('Logged out'),
    photoDescription: 'John Doe Profile Picture',
    userName: 'John Doe',
  },
  decorators: [withRouter], // Добавляем декоратор сюда
  render: args => <UserDropdown {...args} />,
}

export const WithoutAvatar: Story = {
  args: {
    avatar: undefined, // Без аватара
    email: 'jane.doe@example.com',
    onLogOut: () => console.log('Logged out'),
    photoDescription: 'Jane Doe Profile Picture',
    userName: 'Jane Doe',
  },
  decorators: [withRouter], // Добавляем декоратор сюда
  render: args => <UserDropdown {...args} />,
}

export const CustomUserName: Story = {
  args: {
    avatar: 'https://ui-avatars.com/api/?name=Alex+Smith',
    email: 'alex.antony.smith@example.com',
    onLogOut: () => console.log('Logged out'),
    photoDescription: 'Alex Smith Profile Picture',
    userName: 'Alex Smith',
  },
  decorators: [withRouter], // Добавляем декоратор сюда
  render: args => <UserDropdown {...args} />,
}
