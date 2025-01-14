import { Button } from './components/ui/button'

function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold '>E Bazaar</h1>
      <Button
        onClick={() => console.log('Test worked')}
      >
        Submit
      </Button>
    </div>
  )
}
export default App
