import { useRef } from "react";
import './useRef.css'


function Referance() {

    let userf = useRef(null)
    const a = useRef(100)

    return (
        <>
            <h4 ref={userf} className="active" >This is Heading</h4>
            <h1>Reference Value: {a.current}</h1>
            <button onClick={() => {
                // console.log(userf)
                // console.dir(userf.current)
                // userf.current.classList.toggle('active');
                userf.current.classList.toggle('inactive')


            }}>Click Me</button>
        </>
    )
}

export default Referance;