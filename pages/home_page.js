import React, { useEffect, useState } from 'react'
import Heading from '../widgets/heading'
import { Col, Form, Image, Row, Stack } from 'react-bootstrap'
import { primaryColor } from '../utils/brand_colors'
import axios from 'axios'
const HomePage = () => {
    const [videos, setVideos] = useState([]);
   useEffect(() => {
    axios.get("http://localhost:5000/videos").then((response)=>{
            setVideos(response.data.response)
        }).catch((error)=>{
            console.error(error)
        })
   }, []);
    return (
        <div className='d-flex container justify-content-center align-items-center' style={{width:"100%",height:"100vh"}}>
             <div>
             <Heading className={`text-center`} text={`Find your favorite movie and download `}/>
             <div>
                <Row className='mt-5'>
                    <Col md={{span:8,offset:2}} >
                        <Stack direction="horizontal">
                        <Form.Control className='py-3 rounded-0  shadow-none border-0' placeholder='Type the name of the video'/>
                 <div className='btn py-3 px-5 rounded-0'  style={{backgroundColor:primaryColor}}>Search</div>
                        </Stack>
                    </Col>
                    
                </Row>
             </div>
             <Row className='mt-4'>
             {videos.map((video)=><Col md={2}>
             <Image style={{height:150, objectFit:'cover',width:"100%"}} src={video.thumbnailDownloadURL} />
             </Col>)}
             </Row>
             </div>
            
             
        </div>
    )
}

export default HomePage
