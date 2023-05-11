import React, { useEffect, useState } from 'react'
import Heading from '../widgets/heading'
import { Col, Container, Image, Nav, Navbar, Row, Stack } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import Space from '../widgets/space'
import Paragraph from '../widgets/paragraph'
import { useSpring,animated } from 'react-spring'
import { primaryColor, secondaryColor } from '../utils/brand_colors'
import LoadingPage from './loading_page'

const HomePage = () => {
  
    return (
        <div>
              <Space/>
            <Container>
                <Row>
                    <Col md={{offset:3,span:6}}>
                <Heading text={`Read all your favorite <span>stories</span> `}/>
                 <Paragraph textIndent={50} className={`mt-3`} text={`Welcome to our website, where you can indulge in all your favorite stories. Get lost in captivating tales from talented writers around the world.`}/>
                    </Col>
                </Row>
                </Container>    
            <Space/>
        </div>
    )
}

export default HomePage
