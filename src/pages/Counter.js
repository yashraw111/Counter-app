import { useState } from "react";

const Counter =()=>{
    const[count,setcount]=useState(1)
    const inc =()=>{
        setcount(count * 2)
    }
    const dec =()=>{
        // setcount(count-1)
        return count>0?setcount(count-1):count
    }
    
return(
    <>
     <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="row">
                <div className="col text-center">
                    <h1 className="display-4 text-primary mb-4">Counter: {count}</h1>
                    <div className="button d-flex justify-content-center">
                        <button className="btn btn-danger mx-2" onClick={dec}>DEC</button>
                        <button className="btn btn-success mx-2" onClick={inc}>INC</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Counter
