import React from 'react'
import Brilliant from './Brilliant'
import Card from './Card'
function Home() {
  return (
    <>
      <div>Home</div>
      <Brilliant heading="service" />
      <Card 
        name="Card Name"
        link="Card LInk"/>
      <Card 
        name="Card Name"
        link="Card ;dsjflkgjlkfd"/>
      <Card 
        name="Card Name"
        link="Card LIlkgjdskldjglkjsadnk"/>
      </>
  )
}

export default Home