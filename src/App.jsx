import Button from './components/Button'

function App() {
  return (
    <div>
      <h1>App component</h1>
      <Button text={'Text button'} type={'button'} num={1} disabled={false}/>
      <Button text={'Submit button'} type={'submit'} num={2} disabled/>
      <Button text={'Reset button'} type={'reset'} num={3} disabled={false}/>
    </div>
  )
}

export default App
