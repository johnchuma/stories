import React from 'react'

const Paragraph = ({fontWeight,fontSize,color,text,className,textIndent}) => {
    return (
        <div>
        <div className={className+` d-none d-md-block`} style={{fontWeight:fontWeight??400,textIndent:textIndent??0, lineHeight:1, fontSize:fontSize??"1.4vw",color:color??"black"}}  >{text}</div>
        <div className={className+` d-block d-md-none`} style={{fontWeight:fontWeight??400,textIndent:textIndent??0, lineHeight:1, fontSize:fontSize??"4vw",color:color??"black"}}  >{text}</div>
        </div>
    )
}

export default Paragraph
