import { Button } from "./Button"
import { Closeicon } from "./Icon/Closeicon"

interface Modalprops {
  open : boolean,
  onclose() : void
}

import { useEffect, useRef, useState } from "react";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../Configurl";
import { useContent } from "../CustomHooks/useContent";

enum ContentType  {
  Youtube  = "youtube",
  Twitter =  "twitter"
}

export const Modal = (props: Modalprops) => {

  const Tittleref = useRef<HTMLInputElement>(null)
  const Linkref = useRef<HTMLInputElement>(null)
  const Tagref = useRef<HTMLInputElement>(null)


  const [typebtn , settype ] = useState(ContentType.Youtube)
  const  { fetchdata }  = useContent();

 async  function Postcontent (){
      const tittle = Tittleref.current?.value
      const link = Linkref.current?.value
      const tag = Tagref.current?.value

      

   const response =  await  axios({
      method : "post",
      url : BACKEND_URL + "/api/v1/content",
      data : {
        tittle : tittle,
        link : link,
        tag : tag,
        type : typebtn

      },
      headers : {
        token : localStorage.getItem("token")
      }
    })

    console.log(response)
    alert("Memory Synced")
    await fetchdata()
    props.onclose()
 
    

  }

  useEffect(() => {
    if (props.open) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [props.open]);

  return (
    <>
      {props.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="w-[90%] max-w-lg bg-white rounded-2xl shadow-xl p-6 relative transform transition-all duration-300">
            {/* Close Button */}

            
            <button
              className="absolute right-4 top-6 text-gray-600 hover:text-gray-900"
              onClick={props.onclose}
            >
              <Closeicon />
            </button> 

            {/* Modal Content */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-lg font-semibold text-gray-800 font-Imprima">Sync to Brain 🔄</h2>
              <Input placeholder="Title"  ref={Tittleref}/>
              <Input placeholder="Link"  ref={Linkref}/>
              <Input placeholder="Tag"  ref={Tagref}/>
              <div className="flex gap-4 items-center"> 
                <h1 className="font-Palanquin text-xl font-medium">Type : </h1>
              <Button onClick={()=>{settype(ContentType.Youtube)}} variants={typebtn=== "youtube" ? "secondary" : "primary"} size="sm" text="youtube" />
              <Button onClick={()=>{settype(ContentType.Twitter)}} variants={typebtn=== "twitter" ? "secondary" : "primary"} size="sm" text="twitter" />
              </div>
              <Button onClick={Postcontent} variants="secondary" size="md" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

