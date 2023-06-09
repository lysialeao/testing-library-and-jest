import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import UserForm from '../components/UserForm'

test('it shows two inputs and a button', () => {

  render(<UserForm />)

  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test('it calls onUserAdd when the form is submitted', async  () => {

  const mock = vi.fn()

  render(<UserForm onUserAdd={mock}/>)

  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  })

  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  })

  const button = screen.getByRole('button')

  Promise.all([
    user.click(nameInput),
    user.keyboard('Lysia'),

    user.click(emailInput),
    user.keyboard('lysialeao@gmail.com'),

    user.click(button),
  ]).then(() => {
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith({ name: 'Lysia', email: 'lysialeao@gmail.com'})
  })


})