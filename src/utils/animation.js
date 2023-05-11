import { useSpring } from "react-spring"

export const AnimateComponent = ({from,to,onRestTo,onRestFrom, duration})=>{
    const [styles,api] = useSpring(()=>({
        from,
        config:{duration:duration??500}
}))
const startAnimation = ()=>{
    return new Promise((resolve)=>{
        api.start({
            from,
            to,
            onRest:()=>{
                resolve()

                api.start({
                    from:onRestFrom??to,
                    to:onRestTo??to,
                   
                })   
            }
           })
    })
  
}
return {styles,animate:startAnimation}
}