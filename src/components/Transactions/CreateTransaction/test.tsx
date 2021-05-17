import { render, screen } from '@testing-library/react'

import { CreateTransaction } from '.'

describe('<CreateTransaction />', () => {
  it('should render the heading', () => {
    const { container } = render(<CreateTransaction />)

    expect(
      screen.getByRole('heading', { name: /CreateTransaction/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
