

function Box({show}){
    return(<>
   
    <center>
     <div className="box-content min-w-0 max-w-40 min-h-40 max-h-fit  mx-52 mt-5 flex items-center justify-center border-4 rounded-md  py-1.5 pl-7 pr-20 border-neutral-950">
          {show}
         </div>
      </center>  
    </>)
}

export default Box