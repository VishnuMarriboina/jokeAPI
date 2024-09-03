import React, { useState } from "react";
import axios from "axios";

function Ask(){
    const[show,setShow]=useState("")

    return(<>
    {/* <div className=".container">  */}
    <button className= " bg-sky-500 mx-52 mt-52   hover:bg-sky-700  ring-1 ring-inset ring-gray-300 rounded-md py-1.5 pl-7 pr-7 "
      onClick={async ()=>{
        let responce = await axios.get("https://v2.jokeapi.dev/joke/Any?format=txt")
           setShow(responce.data)
           console.log(responce.data)
      }}>
        Get Me A joke....
        </button>
      <div className="shadow-xl w-[200px] h-[200px] items-center justify-center flex" >
         {show}
      </div>
        {/* https://v2.jokeapi.dev/joke/Any */}
    {/* </div> */}
    </>)
}
export default Ask