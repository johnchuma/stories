import React, { useEffect } from 'react'
import Heading from '../widgets/heading'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { primaryColor, secondaryColor } from '../utils/brand_colors'
import { animated } from 'react-spring'
import { AnimateComponent } from '../utils/animation'
import Paragraph from '../widgets/paragraph'

const LoadingPage = ({loaderAnimation}) => {
    
    return (
        <div style={{height:"100vh",position:'relative'}}>
<Container >
         
         <div className='text-center d-flex justify-content-center align-items-center' style={{height:"100vh",width:"100%"}}>
    <div >
  <Stack>
  <Paragraph className={`w-100`} text={`Please wait, website will open after loading...`}/>

  </Stack>

     
     <Row className='mt-4'>
         <Col md={{span:12}}>
             <Stack>
             <div className='' style={{height:40,backgroundColor:"black", position:'relative'}}>
            <animated.div className={``} style={{position:'absolute',left:0,top:0,right:0, bottom:0,...loaderAnimation.styles, backgroundColor:secondaryColor}}>
            
            </animated.div>
         </div>
             </Stack>
         
         </Col>
     </Row>
    </div>
 </div>
       
     </Container>
        </div>
        
       
    )
}

export default LoadingPage
