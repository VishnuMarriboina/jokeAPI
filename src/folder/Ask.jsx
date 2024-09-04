import React, { useState } from "react";
import Box from "./Box";
import axios from "axios";

function Ask(){
    const[show,setShow]=useState("")

    return(<>
   <center>
    <button className= " bg-sky-500 mx-52 mt-52   hover:bg-sky-700  ring-1 ring-inset ring-gray-300 rounded-md py-1.5 pl-7 pr-7 "
      onClick={async ()=>{
        let responce = await axios.get("https://v2.jokeapi.dev/joke/Any?format=txt")
           setShow(responce.data)
      }}>
        Get Me A joke....
    </button>
   </center>
        <Box show={show} />
    </>)
}
export default Ask