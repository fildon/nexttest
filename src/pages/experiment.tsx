import React from 'react'
import { css } from '@emotion/react'

import ButtonClicker from '../components/buttonClicker'
import Join from '../components/join'

const titleStyle = css({
  boxSizing: 'border-box',
  width: 300,
  height: 200,
  backgroundColor: 'red',
})

const Experiment = (): JSX.Element => (
  <>
    <span css={titleStyle}>
      Welcome to my page. Here is a button you can click.
    </span>
    <ButtonClicker buttonMessage="click me!" />
    <div>
      <Join separator={<div>I am the separator</div>}>
        <span>foo</span>
        <span>bar</span>
        <span>buzz</span>
      </Join>
    </div>
  </>
)

export default Experiment
