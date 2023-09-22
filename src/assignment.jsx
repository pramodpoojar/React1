import { useEffect } from "react";
import { useState } from "react";
import "./assignment.css"

const Assign =() => {
    let [post,setpost]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let  response=await fetch("https://jsonplaceholder.typicode.com/posts")
            let data=await response.json()
            setpost(data)
        }
        fetchdata()
    },[])
    return (  
        
        <div className="more" style={{margin:"auto"}} >
            <h1>
                Posts
            </h1>
<div className="new">
            
            {
              post.map((x)=>(
                  <div className="list">
                      <h2>Title:{x.title}</h2>
                      <h4>Body:{x.body}</h4>
                      
                  </div>
              ))
          }
          </div>
        </div>
    );
}
 
export default Assign;