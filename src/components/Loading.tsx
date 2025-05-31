function Loading() {
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {Array.from({ length: 3 }).map((
        _, index) => {
          return (
            <div 
              key={ index }
              className='flex flex-col space-y-3'
            >
              
            </div>
          )
        })}
    </div>
  )
}

export default Loading
