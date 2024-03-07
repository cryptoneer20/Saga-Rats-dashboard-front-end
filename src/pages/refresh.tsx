import { useEffect } from "react"

export default function RefreshComponent(props: any){
    useEffect(()=>{
        window.location.href = props.location
    },[])
    return (
        <div className="main">
        </div>
    )
}