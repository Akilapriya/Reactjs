import axios from "axios";
import { useEffect, useState } from "react";
import "./css/style.css";
 

function ECommerceWeb(){
  let  baseUrl="https://jsonplaceholder.typicode.com/";
    const [product, setProduct]=useState([]);

    useEffect(()=>{

        axios.get(`${"https://fakestoreapi.com/products"}`).then((response)=>{
             console.log(response.data);
             setProduct(response.data)
        }).catch((error)=>{
          console.log(error);
        })                                         
      },[]);
      return(
        <>
         {/* <div className=" d-flex  flex-wrap"> */}
         <div className="Container  d-flex  flex-wrap" style={{marginTop:"100px"}}>
          <div className="navbar" style={{color:"Blue",height:"100px", width:"100%"}}></div>
            {
                product.map((value, index)=>(
                 
                  <div className="card m-3 " style={{width:"400px", height:"400px"}}>
                      <div  key={index}>
                       <br/>
                        <img  src={value.image} style={{height:"200px",width:"200px"}}/>
                        <div > {value.title}</div>
                        <div ><b>Rs.</b> {value.price}</div>
                        <div >{value.category}</div> 
                        {/* <div > {value.description}</div>                                                         */}
                        <button className="btn btn-success" ><b></b>{value.rating.rate}</button>
                        <div >{value.rating.count}</div>
                    </div><br/>
                    </div>
                   
                  
                ))
            }
             </div>

         {/* </div> */}
        </>
      )
}
export default ECommerceWeb;