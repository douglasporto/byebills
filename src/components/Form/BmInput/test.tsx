import { render, screen } from '@testing-library/react'

import { BmInput } from '.'

describe('<BmInput />', () => {
  it('should render the heading', () => {
    const { container } = render(<BmInput />)

    expect(
      screen.getByRole('heading', { name: /BmInput/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
