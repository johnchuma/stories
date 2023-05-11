import React from 'react'

const Heading = ({fontWeight,fontSize,color,text,className}) => {
    return (
        <div className={className} style={{fontWeight:fontWeight??600,lineHeight:1.0, fontSize:fontSize??"6vw",color:color??"black"}}  >{text}</div>
    )
}

export default Heading
