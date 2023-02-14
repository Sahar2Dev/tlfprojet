import { useState, useEffect } from "react"
import axios  from "axios";


import logoutfunction from "./authentification/logoutfunction";
      

const useFetch =(url) =>{
  
  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null
 
    const [data , setData] = useState([]);
    const [isloading , setload] = useState(true)
    const [error , setError] = useState(null)
    useEffect( ()=>{
        axios.get(url, {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: token,
            
            },
          }).then( res =>{
           setData(res.data) 
          }
            
          ).catch( err =>{
           /* if ( err.response.status=== 401) {
            logoutfunction(err.response.status)
            }*/
            
        
          })
         
        
      },[url])
      return {data , isloading , error}
}
export default  useFetch ;