"use client"

const HydrationTest = () => {
  const test = Math.random()

  console.log(test)
  
  return (
    <div>
      {test}
    </div>
  )
}

export default HydrationTest