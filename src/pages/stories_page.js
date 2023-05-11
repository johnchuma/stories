import React, { useState } from 'react'
import Heading from '../widgets/heading'
import Space from '../widgets/space'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Paragraph from '../widgets/paragraph'
import { useSpring,animated } from 'react-spring'
import { AnimateComponent, animateComponent } from '../utils/animation'
import { secondaryColor } from '../utils/brand_colors'
import { stories } from '../utils/stories'
import { useNavigate } from 'react-router-dom'

const StoriesPage = () => {

const storyAnimation = AnimateComponent({from: {scale:1,opacity:1},to: {scale:10,opacity:0},onRestTo:{scale:1,opacity:0}})
const titleAnimation = AnimateComponent({from: {opacity:1},to: {opacity:0}})
const newStoryAnimation = AnimateComponent({from:{opacity:0,scale:0},to:{opacity:1,scale:1}})
const [selectedStory, setSelectedStory] = useState(null);
const [hideOtherComponents, setHideOtherComponents] = useState(false);
const navigate = useNavigate()

    return (
        <>
        <Space />
       {
        hideOtherComponents == false && <Container>
        <animated.div style={titleAnimation.styles}>
        <Heading text={`All stories `}/>
        </animated.div>
    <div className='p-0 mt-3 w-100' style={{backgroundColor:"#f2f2f2"}}>
    </div>
    <Space height={20}/>
    {stories.map((story,index)=>
    <animated.div onClick={async ()=>{
     storyAnimation.animate()
    await titleAnimation.animate();  
    
    navigate(`/read/${index}`)
    }} style={storyAnimation.styles}  className='btn border-0 shadown-0 text-start'>
        <Row className='d-flex align-items-center'>
            <Col className='mt-3' md={{offset:3,span:2}} >
                <Image fluid style={{height:140,width:"100%",objectFit:'cover'}} src={story.image} />
            </Col>
            <Col className='mt-3' md="4">
                <Heading className={`mb-2 d-none d-md-block`}  fontSize={`2.5vw`} text={story.title}/>
                <Heading className={`mb-2 d-block d-md-none`}  fontSize={`5vw`} text={story.title}/>

                <Paragraph textIndent={50} text={story.description}/>
            </Col>
        </Row>
    </animated.div>)}
    </Container>
       }
       
      
        <Space/>
        </>
    )
}

export default StoriesPage
