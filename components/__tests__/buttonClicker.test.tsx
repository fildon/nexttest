import { render } from '@testing-library/react'

import ButtonClicker from '../buttonClicker'

describe('ButtonClicker', () => {
  it('displays the message', () => {
    const { getByText } = render(<ButtonClicker buttonMessage='test message'/>)

    expect(getByText('test message')).toBeInTheDocument()
  })
})
