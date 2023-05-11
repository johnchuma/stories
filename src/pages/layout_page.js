import React, { useEffect, useState } from 'react'
import Heading from '../widgets/heading'
import { Col, Container, Image, Nav, Navbar, Row, Stack } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import Space from '../widgets/space'
import Paragraph from '../widgets/paragraph'
import { useSpring,animated } from 'react-spring'
import { primaryColor, secondaryColor } from '../utils/brand_colors'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import LoadingPage from './loading_page'
import { AnimateComponent } from '../utils/animation'

const LayoutPage = () => {
    const from = {width:"0%"}
    const to = {width:"100%"}
const navigate = useNavigate()
const location = useLocation()
      const [styles,api] = useSpring(()=>({
        from
      }))
      const triggerAnimation = ()=>{
        api.start({
            from,
            to,
            onRest:()=>{
                switch (location.pathname) {
                    case "/":
                     navigate("/stories")
                        break;
                    case "/stories":
                            navigate("/")
                               break;
                    default:
                     navigate("/stories")
                        break;
                }
                api.start({
                    from:to,
                    to:from
                })
            }
        })
      }
      const loaderAnimation = AnimateComponent({from:{width:'0%'},to:{width:'100%'},duration:5000})
      const loadingFadingAnimation = AnimateComponent({from:{opacity:1},to:{opacity:0},duration:3000})
      const pageOpeningAnimation = AnimateComponent({from:{opacity:0},to:{opacity:1},duration:3000})

      const [isLoading, setIsLoading] = useState(true);
   
      useEffect( () => {
        loaderAnimation.animate().then(()=>{
            loadingFadingAnimation.animate().then(()=>{
                setIsLoading(false)
                pageOpeningAnimation.animate()
            })
            
        })
    }, []);
    return (
        <div>
   {
        isLoading?
        <animated.div style={loadingFadingAnimation.styles}>
<LoadingPage loaderAnimation={loaderAnimation} >
              <animated.div style={{position:'absolute',bottom:0,top:0,
        right:0,height:"100%", backgroundColor:location.pathname =="/"?primaryColor: secondaryColor,...styles}}>
        </animated.div>
        </LoadingPage>
        </animated.div>
        :   <animated.div className='' style={{position:'relative',...pageOpeningAnimation.styles}}>
          
        <Space height={40}/>
        <Navbar className='mt-0'>
            <Container> 
            <Navbar.Brand className='btn p-0 m-0 border-0 ' onClick={triggerAnimation} style={{fontWeight:600}}>
                <Heading className={`d-none d-md-block`} fontSize={`2.5vw`} text={`Stories`}/>
                <Heading className={`d-block d-md-none`} fontSize={`6vw`} text={`Stories`}/>
                </Navbar.Brand>
             <Nav className='ms-auto'>
                <Nav.Link onClick={triggerAnimation}>
                    <Stack  direction='horizontal'>
                    <Paragraph  className={`me-2`} text={`${location.pathname==="/stories"?"Home":"Browse"}`}/>
                    <BsArrowRight/>
                    </Stack>
                    </Nav.Link> 
             </Nav>
            </Container>
           
        </Navbar>
       <Outlet/>
        
       <div style={{backgroundColor:"#f2f2f2"}}>
        <Container>
            <Space />
            <Row>
                <Col md={4}>
            

                    <div className='p-5 mt-3' style={{backgroundColor:"black"}}>
                    <Image fluid src='stories.png'/>

                    </div>
                </Col>
                <Col className='mt-3'  md={{offset:1,span:4}}>
          

                <Heading fontSize={`2vw`} className={`mb-3 d-none d-md-block`} text={'About web'}/>
                <Heading fontSize={`5vw`} className={`mb-3 d-block d-md-none`} text={'About web'}/>

                <Paragraph  text={`This website was created in 2023 using the React framework and published to GitHub Pages for public access. `}/>
                </Col>
                <Col className='mt-3' md="3">
          

                <Heading fontSize={`2vw`} className={`mb-3 d-none d-md-block`} text={'Developer info'}/>
                <Heading fontSize={`5vw`} className={`mb-3 d-block d-md-none`} text={'About web'}/>

                <Paragraph className={`mb-1`} text={'John vedastus chuma'}/>
                <Paragraph className={`mb-1`} text={'johnvchuma@gmail.com'}/>
                <Paragraph className={`mb-1`} text={'+255627707434'}/>
               <a style={{textDecoration:'none'}} className={`mb-1`} target='_blank' href='https://www.johnchuma.com/'><Paragraph text={'www.johnchuma.com'}/></a> 

                </Col>
            </Row>
            <Space/>

        </Container>
       </div>
       <animated.div style={{position:'absolute',bottom:0,top:0,
        right:0,height:"100%", backgroundColor:location.pathname =="/"?primaryColor: secondaryColor,...styles}}>
        </animated.div>
    </animated.div>
      }  

        </div>
   
        
     
    )
}

export default LayoutPage
