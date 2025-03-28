import axios from "axios";
import { Shareicon } from "./Icon/Shareicon";
import { Trashicon } from "./Icon/Trash";
import { Xicon } from "./Icon/xicon";
import { Youtubeicon } from "./Icon/Youtubeicon";
import { BACKEND_URL } from "../Configurl";
import { useContent } from "../CustomHooks/useContent";

interface Cardprops {
    tittle : string,
    link : string,
    type : "twitter" | "youtube"
    tag : string,
    _id : string
}

export function Card(props : Cardprops){
    const  { fetchdata }  = useContent();
    return (
        <div className="bg-gray-200  rounded-lg shadow-md  min-h-80 w-72 m-3 border shadow-[#3f4b65] border-spacing-8 p-2 overflow-hidden " >
            <div className=" h-1/5 flex  justify-between items-center ">
            <div className="flex ml-1 gap-3 items-center ">
            {props.type === "twitter" && <Xicon />}
            {props.type === "youtube" && <Youtubeicon />}
               <span className="font-semibold text-lg font-Imprima">{props.tittle}</span>
            </div>
            <div className="flex gap-2 mr-1  text-gray-500">
            <div className="cursor-pointer" onClick={async ()=>{
                const SenUrl =  BACKEND_URL + "/api/v1/content/" + props._id

              const response =   await axios({
                    method : "delete",
                    url : SenUrl,
                    headers : {
                        token : localStorage.getItem("token")
                    }
                })
                 fetchdata()
                console.log(response.data)
            }}> <Trashicon size="sm"/></div>
            <div><Shareicon size="sm"/></div>
            </div>
            </div>
            {props.type === "youtube" &&  <div className=" rounded-xl overflow-hidden "><iframe className="w-full" src={props.link.replace("watch" , "embed").replace("?v=" , "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className="text-link-link  pt-14 text-lg font-Imprima font-bold">#{props.tag}</div></div>}
           
           
            {props.type === "twitter" && <div className="rounded-xl w-full h-60 overflow-y-scroll no-scrollbar overscroll-none"><blockquote className="twitter-tweet ">
             <a href={props.link.replace("x.com" , "twitter.com")}></a> 
            </blockquote>
            <div className="text-link-link   text-lg font-Imprima font-bold">#{props.tag}</div></div> }  

            


        </div> 
    )
} 