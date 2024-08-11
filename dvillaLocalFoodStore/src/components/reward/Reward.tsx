import React, { useState } from 'react'
import { Button, Container, Stack } from 'react-bootstrap';

const Reward = () => {
    const [rewardAmt, setRewardAmt] = useState<number>(0);
  return (
    <Container>
      
        <h5 className='m-4'><b>Note: </b>You can start earning after you have bought foods and fruits over 50 DVLA</h5>
        <div className='w-1/4 bg-zinc-300 rounded-xl shadow-lg border-2 border-black p-4 m-4'>
            <Stack direction='vertical' gap={50}>
                <Stack direction='horizontal'>
            <h4>Your daily reward:</h4> 
            <h5 className='ms-auto'>DVLA {rewardAmt}</h5>
            </Stack>
            <h3>Click on button to claim</h3>
            <Button variant="success" onClick={() => {}}>Claim Reward</Button>
            </Stack>
        </div>
      
        </Container>
  )
}

export default Reward;