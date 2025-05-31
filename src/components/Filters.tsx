import { Form } from 'react-router-dom'
import { Label } from './ui/label'
import { Input } from './ui/input'

const Filters = () => {
  return (
    <Form className='border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      <div className='mb-2'>
        <Label htmlFor='search'>Search Product</Label> 
        <Input
          id='search'
          name='search'
          type='text'
          defaultValue=''
        />
      </div>
    </Form>
  )
}

export default Filters
