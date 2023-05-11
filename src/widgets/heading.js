import React from 'react'

const Heading = ({fontWeight,fontSize,color,text,className}) => {
    return (
        <>
          <div className={className+` d-none d-md-block`} style={{fontWeight:fontWeight??600,lineHeight:1.0, fontSize:fontSize??"6vw",color:color??"black"}}   
        dangerouslySetInnerHTML={{__html:text}}/>
          <div className={className+` d-block d-md-none`} style={{fontWeight:fontWeight??600,lineHeight:1.0, fontSize:fontSize??"12vw",color:color??"black"}}   
        dangerouslySetInnerHTML={{__html:text}}/>
        </>
      
    )
}

export default Heading
