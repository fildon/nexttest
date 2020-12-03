import ButtonClicker from '../components/buttonClicker'
import Join from '../components/join'

const Experiment = (): JSX.Element => (
  <>
    <span>Welcome to my page. Here is a button you can click.</span>
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
