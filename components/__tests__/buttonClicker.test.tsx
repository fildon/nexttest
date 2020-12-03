import { fireEvent, render } from '@testing-library/react'

import ButtonClicker from '../buttonClicker'

describe('ButtonClicker', () => {
  it('displays the message', () => {
    const { getByText } = render(<ButtonClicker buttonMessage='test message'/>)

    expect(getByText('test message')).toBeInTheDocument()
  })

  it('Updates the count when the button clicked', () => {
    const { getByText } = render(<ButtonClicker buttonMessage='test message'/>)

    expect(getByText('0')).toBeInTheDocument()

    fireEvent.click(getByText('test message'))

    expect(getByText('1')).toBeInTheDocument()
  })
})
