import { useEffect, useState } from "react";

export default function Blogs()
{
    const [blogs,setBlogs]=useState([]);

    useEffect(() => {
        console.log("hello...");
        fetch("http://localhost:8081/getBlogs")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
      },[]);

      return (
        <div className="container">
            <div style={{backgroundColor:"cadetblue",textAlign:"center",height:"100px"}}>
            <h1><u>Blogs</u></h1>
            </div>
           
            { blogs.map((ev)=>{
                   return (<div style={{textAlign:"center",paddingLeft:"200px",paddingRight:"200px"}}>
                    <div style={{backgroundColor:"mediumaquamarine"}}>
                      
                      <h3>Published On : {ev.date}</h3>
                      <h2>{ev.content}</h2>
                      <h3 style={{textAlign:"right"}}>-Dr. {ev.dr.name}</h3>
                      </div>
                      <hr/>
                    </div>
                   )
                })}

        </div>
    )

}