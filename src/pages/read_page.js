import React, { useEffect, useState } from 'react'
import Heading from '../widgets/heading'
import Space from '../widgets/space'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Paragraph from '../widgets/paragraph'
import { useSpring,animated } from 'react-spring'
import { AnimateComponent, animateComponent } from '../utils/animation'
import { secondaryColor } from '../utils/brand_colors'
import { useParams } from 'react-router-dom'
import { stories } from '../utils/stories'
const ReadStory = () => {
    const {id} = useParams();
    const selectedStory = stories[id]
    const newStoryAnimation = AnimateComponent({from:{opacity:0,scale:0},to:{opacity:1,scale:1}})
    useEffect(() => {
        newStoryAnimation.animate()
    }, []);
    return (
       <>
        <Space height={40}/>

        <Container>
            <animated.div style={newStoryAnimation.styles}>
                <Row>
                    <Col>
                    <Heading className={`mb-2`}  text={selectedStory&&selectedStory.title}/>
                    <Paragraph color={secondaryColor} textIndent={50} text={selectedStory&&selectedStory.description}/>
                    <Space height={20}/>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                    <Image fluid className='border-0' style={{width:"100%",objectFit:'cover'}} src={selectedStory&&selectedStory.image} />
                    </Col>
                    <Col>
                    
                    <Paragraph className={`mt-3`} textIndent={50} text={selectedStory&&selectedStory.full}/>

                    </Col>
                </Row>
            </animated.div>
            </Container>
            <Space/>
        </>
    )
}

export default ReadStory
