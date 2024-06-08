import { Button } from "@/components/ui/button"

function App() {

  return (
      <div>
        <h1 className='text-7xl text-[#ff4500] font-bold bg-[#111] p-4'>E-Bazaar 2</h1>
        <Button 
          variant='destructive'
          size='lg'
          onClick={() => console.log('Button Pressed')}
        >
          Submit
        </Button>
      </div>
  )
}

export default App
